import type { FipeCar } from "../api/fipe";
import type { Racer } from "../types/racer";

import { getPokemonIdFromCar } from "./pokemonMatcher";
import { getPokemonById } from "../api/pokemon";
import { getCarStats } from "./carStats";
import { getPokemonStats } from "./pokemonStats";

export async function createRacerFromCar(
  car: FipeCar
): Promise<Racer> {
  const pokemonId = getPokemonIdFromCar(car.Valor, car.Modelo);
  const pokemon = await getPokemonById(pokemonId);

  const carStats = getCarStats(car);
  const pokemonStats = getPokemonStats(pokemon);

  return {
    car,
    pokemon,
    carStats,
    pokemonStats,
  };
}
