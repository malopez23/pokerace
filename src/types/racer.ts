import type { FipeCar } from "../api/fipe";

export type Racer = {
  car: FipeCar;
  pokemon: FipeCar;
  carStats: {
    speed: number;
    power: number;
    durability: number;
  };
  pokemonStats: {
    speed: number;
    power: number;
    durability: number;
  };
};

export type RacerBattleResult = {
  winner: "racerA" | "racerB" | "draw";
  racerAScore: number;
  racerBScore: number;
  breakdown: {
    speed: number;
    power: number;
    durability: number;
  };
};
