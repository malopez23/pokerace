import { useState } from "react";

import { CarSelector } from "./components/CarSelector";
import { PokemonReveal } from "./components/ui/PokemonReveal";

import type { PokemonData } from "./api/pokemon";
import type { FipeCar } from "./api/fipe";

import { getPokemonById } from "./api/pokemon";
import { getPokemonIdFromCar } from "./utils/pokemonMatcher";

export default function App() {
  // const [car, setCar] = useState<FipeCar | null>(null);
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

  async function handleCarSelected(selectedCar: FipeCar) {
    // setCar(selectedCar);

    // 🔥 Matching carro → Pokémon
    const pokemonId = getPokemonIdFromCar(
      selectedCar.Valor,
      selectedCar.Modelo
    );

    const pokemonData = await getPokemonById(pokemonId);
    setPokemon(pokemonData);

    console.log("Car:", selectedCar);
    console.log("Pokemon:", pokemonData);
  }

 return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
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
