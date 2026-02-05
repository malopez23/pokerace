import { useState } from "react";

import { CarSelector } from "./components/CarSelector";
import { PokemonReveal } from "./components/ui/PokemonReveal";

import type { FipeCar } from "./api/fipe";
import type { PokemonData } from "./api/pokemon";

import { getPokemonById } from "./api/pokemon";
import { getPokemonIdFromCar } from "./utils/pokemonMatcher";

import { getCarStats } from "./utils/carStats";
import { getPokemonStats } from "./utils/pokemonStats";
import { resolveBattle } from "./utils/battleResolver";

export default function App() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

  async function handleCarSelected(selectedCar: FipeCar) {
    // 🔹 Match carro → Pokémon
    const pokemonId = getPokemonIdFromCar(
      selectedCar.Valor,
      selectedCar.Modelo
    );

    const pokemonData = await getPokemonById(pokemonId);
    setPokemon(pokemonData);

    // 🔥 Engine de batalha (Fase 5)
    const carStats = getCarStats(selectedCar);
    const pokemonStats = getPokemonStats(pokemonData);
    const battleResult = resolveBattle(carStats, pokemonStats);

    // Logs apenas para validação (dev)
    console.log("Car:", selectedCar);
    console.log("Pokemon:", pokemonData);
    console.log("Battle result:", battleResult);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center">
      {!pokemon && (
        <CarSelector onCarSelected={handleCarSelected} />
      )}

      {pokemon && (
        <PokemonReveal
          pokemon={pokemon}
          onConfirm={() => {
            console.log("Pokémon confirmado:", pokemon.name);
          }}
        />
      )}
    </div>
  );
}
