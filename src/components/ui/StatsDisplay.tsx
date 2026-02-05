type Stats = {
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
};

type StatsDisplayProps = {
  stats: Stats;
  compact?: boolean;
};

const STAT_LABELS: Record<keyof Stats, string> = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  special_attack: "SP.ATK",
  special_defense: "SP.DEF",
  speed: "SPD",
};

const STAT_COLORS: Record<keyof Stats, string> = {
  hp: "bg-green-500",
  attack: "bg-red-500",
  defense: "bg-blue-500",
  special_attack: "bg-purple-500",
  special_defense: "bg-indigo-500",
  speed: "bg-yellow-400",
};

const MAX_STAT = 200;

export function StatsDisplay({ stats, compact = false }: StatsDisplayProps) {
  if (compact) {
    return (
      <div className="grid grid-cols-3 gap-2 text-xs">
        {Object.entries(stats).map(([key, value]) => (
          <div
            key={key}
            className="bg-gray-800 rounded-md p-2 text-center"
          >
            <div className="text-gray-400">
              {STAT_LABELS[key as keyof Stats]}
            </div>
            <div className="font-bold text-white">{value}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {Object.entries(stats).map(([key, value]) => {
        const percent = Math.min((value / MAX_STAT) * 100, 100);

        return (
          <div key={key}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">
                {STAT_LABELS[key as keyof Stats]}
              </span>
              <span className="font-bold text-white">{value}</span>
            </div>

            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full ${STAT_COLORS[key as keyof Stats]} transition-all duration-500`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
