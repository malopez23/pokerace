import { CarSelector } from "./components/CarSelector";
import type { FipeCarDetails } from "./api/fipe";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-10">
      <CarSelector
        onCarSelected={(car: FipeCarDetails) =>
          console.log("Selected car:", car)
        }
      />
    </div>
  );
}

export default App;
