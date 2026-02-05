import { TypeBadge } from "./components/ui/TypeBadge";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex gap-3 items-center justify-center">
      <TypeBadge type="fire" />
      <TypeBadge type="water" />
      <TypeBadge type="electric" />
      <TypeBadge type="grass" />
      <TypeBadge type="dragon" />
      <TypeBadge type="ice" />
    </div>
  );
}

export default App;
