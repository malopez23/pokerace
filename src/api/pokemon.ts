const BASE_URL = "https://pokeapi.co/api/v2";

export type PokemonData = {
  id: number;
  name: string;
  sprite: string;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
};

type PokemonApiType = {
  type: {
    name: string;
  };
};

type PokemonApiStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};


export async function getPokemonById(
  id: number
): Promise<PokemonData> {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  const data = await res.json();

  return {
    id: data.id,
    name: data.name,
    sprite:
      data.sprites.other["official-artwork"].front_default ??
      data.sprites.front_default,
    types: data.types.map(
      (t: PokemonApiType) => t.type.name
    ),
    stats: {
      hp: data.stats.find((s: PokemonApiStat) => s.stat.name === "hp")
        .base_stat,
      attack: data.stats.find(
        (s: PokemonApiStat) => s.stat.name === "attack"
      ).base_stat,
      defense: data.stats.find(
        (s: PokemonApiStat) => s.stat.name === "defense"
      ).base_stat,
      special_attack: data.stats.find(
        (s: PokemonApiStat) => s.stat.name === "special-attack"
      ).base_stat,
      special_defense: data.stats.find(
        (s: PokemonApiStat) => s.stat.name === "special-defense"
      ).base_stat,
      speed: data.stats.find(
        (s: PokemonApiStat) => s.stat.name === "speed"
      ).base_stat,
    },
  };
}
