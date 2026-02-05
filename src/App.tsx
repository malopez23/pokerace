import { CarSelector } from "./components/CarSelector";
import { getPokemonIdFromCar } from "./utils/pokemonMatcher";
import { getPokemonById } from "./api/pokemon";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-10">
      <CarSelector
        onCarSelected={async (car) => {
          const pokemonId = getPokemonIdFromCar(
            car.Valor,
            car.Modelo
          );

          const pokemon = await getPokemonById(pokemonId);

          console.log("Car:", car);
          console.log("Pokemon:", pokemon);
        }}
      />
    </div>
  );
}

export default App;
