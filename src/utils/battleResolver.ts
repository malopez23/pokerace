import type { BattleResult } from "../types/battle";
import type { CarStats } from "./carStats";
import type { PokemonStats } from "./pokemonStats";

export function resolveBattle(
  car: CarStats,
  pokemon: PokemonStats
): BattleResult {
  const carScore =
    car.speed * 1.2 +
    car.power * 1.5 +
    car.durability;

  const pokemonScore =
    pokemon.speed * 1.2 +
    pokemon.power * 1.5 +
    pokemon.durability;

  let winner: BattleResult["winner"] = "draw";

  if (carScore > pokemonScore) winner = "car";
  if (pokemonScore > carScore) winner = "pokemon";

  return {
    winner,
    carScore,
    pokemonScore,
    breakdown: {
      speed: {
        car: car.speed,
        pokemon: pokemon.speed,
      },
      power: {
        car: car.power,
        pokemon: pokemon.power,
      },
      durability: {
        car: car.durability,
        pokemon: pokemon.durability,
      },
    },
  };
}
