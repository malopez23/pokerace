import type { FipeCar } from "../api/fipe";

export type CarStats = {
  speed: number;
  power: number;
  durability: number;
};

export function getCarStats(car: FipeCar): CarStats {
  const price = parseInt(car.Valor.replace(/[^\d]/g, ""), 10);

  return {
    // velocidade simulada
    speed: Math.min(150, Math.floor(price / 1000)),

    // potência baseada no valor + tipo
    power:
      Math.floor(price / 800),

    // durabilidade baseada no ano
    durability: Math.max(
      30,
      100 - (new Date().getFullYear() - car.AnoModelo)
    ),
  };
}
