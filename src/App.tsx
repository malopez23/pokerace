import { StatsDisplay } from "./components/ui/StatsDisplay";

const mockStats = {
  hp: 78,
  attack: 84,
  defense: 78,
  special_attack: 109,
  special_defense: 85,
  speed: 100,
};

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex gap-10 items-center justify-center p-10">
      <div className="w-64">
        <StatsDisplay stats={mockStats} />
      </div>

      <div className="w-48">
        <StatsDisplay stats={mockStats} compact />
      </div>
    </div>
  );
}

export default App;
