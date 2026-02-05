import type { PokemonData } from "../api/pokemon";

export type PokemonStats = {
  speed: number;
  power: number;
  durability: number;
};

export function getPokemonStats(pokemon: PokemonData): PokemonStats {
  return {
    speed: pokemon.stats.speed,
    power:
      pokemon.stats.attack +
      pokemon.stats.special_attack / 2,

    durability:
      pokemon.stats.hp +
      pokemon.stats.defense +
      pokemon.stats.special_defense / 2,
  };
}
