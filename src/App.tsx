import { useState } from "react";

import { CarSelector } from "./components/CarSelector";
import { BattleResult } from "./components/ui/BattleResult";

import type { FipeCar } from "./api/fipe";
import type { PokemonData } from "./api/pokemon";
import type { BattleResult as BattleResultType } from "./types/battle";

import { getPokemonById } from "./api/pokemon";
import { getPokemonIdFromCar } from "./utils/pokemonMatcher";

import { getCarStats } from "./utils/carStats";
import { getPokemonStats } from "./utils/pokemonStats";
import { resolveBattle } from "./utils/battleResolver";

export default function App() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [battle, setBattle] = useState<BattleResultType | null>(null);

  async function handleCarSelected(selectedCar: FipeCar) {
    console.clear();
    console.log("🚗 Car selected:", selectedCar);

    // 🔹 Gera Pokémon baseado no carro
    const pokemonId = getPokemonIdFromCar(
      selectedCar.Valor,
      selectedCar.Modelo
    );

    const pokemonData = await getPokemonById(pokemonId);
    setPokemon(pokemonData);

    console.log("🐲 Pokémon generated:", pokemonData);

    // 🔹 Calcula stats
    const carStats = getCarStats(selectedCar);
    const pokemonStats = getPokemonStats(pokemonData);

    console.log("📊 Car stats:", carStats);
    console.log("📊 Pokémon stats:", pokemonStats);

    // 🔹 Resolve batalha
    const result = resolveBattle(carStats, pokemonStats);
    setBattle(result);

    console.log("🏆 Battle result:", result);
  }

  function handleRestart() {
    setPokemon(null);
    setBattle(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">
      {!pokemon && (
        <CarSelector onCarSelected={handleCarSelected} />
      )}

      {pokemon && battle && (
        <BattleResult
          pokemon={pokemon}
          battle={battle}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
