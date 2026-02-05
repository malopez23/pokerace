import { PokeCarCard } from "./components/ui/PokeCarCard";
import type { PokeCar } from "./types/pokecar";

const mockPokeCar: PokeCar = {
  name: "PikaCivic",
  car_brand: "Honda",
  car_model: "Civic",
  car_year: "2020",
  pokemon_name: "pikachu",
  pokemon_sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  pokemon_types: ["electric"],
  stats: {
    hp: 35,
    attack: 55,
    defense: 40,
    special_attack: 50,
    special_defense: 50,
    speed: 90,
  },
  total_power: 320,
  wins: 5,
  losses: 2,
};

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex gap-10 items-center justify-center p-10">
      <PokeCarCard pokeCar={mockPokeCar} showStats />
      <div className="w-80">
        <PokeCarCard pokeCar={mockPokeCar} compact />
      </div>
    </div>
  );
}

export default App;
