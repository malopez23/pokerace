import { TypeBadge } from "./TypeBadge";
import { StatsDisplay } from "./StatsDisplay";
import type { PokeCar } from "../../types/pokecar";

type PokeCarCardProps = {
  pokeCar: PokeCar;
  onClick?: () => void;
  selected?: boolean;
  compact?: boolean;
  showStats?: boolean;
};

export function PokeCarCard({
  pokeCar,
  onClick,
  selected = false,
  compact = false,
  showStats = false,
}: PokeCarCardProps) {
  const baseClasses = `
  bg-gray-800/60 border border-gray-700 rounded-xl
  transition-all cursor-pointer
  hover:border-gray-500 active:scale-[0.98]
  ${
    selected
      ? "ring-2 ring-yellow-400 scale-[1.03] bg-gray-800/90"
      : "hover:scale-[1.02]"
  }
`;

  if (compact) {
    return (
      <div
        onClick={onClick}
        className={`${baseClasses} flex items-center gap-4 p-3`}
      >
        <img
          src={pokeCar.pokemon_sprite}
          alt={pokeCar.pokemon_name}
          className="w-16 h-16 object-contain"
        />

        <div className="flex-1">
          <div className="font-bold text-white">{pokeCar.name}</div>

          <div className="flex gap-1 mt-1">
            {pokeCar.pokemon_types.map((type) => (
              <TypeBadge key={type} type={type} size="sm" />
            ))}
          </div>
        </div>

        <div className="text-right text-xs text-gray-300">
          <div>⚡ {pokeCar.total_power}</div>
          <div>
            {pokeCar.wins}W / {pokeCar.losses}L
          </div>
        </div>
      </div>
    );
  }

  return (
    <div onClick={onClick} className={`${baseClasses} p-4 w-72`}>
      <div className="flex justify-center">
        <img
          src={pokeCar.pokemon_sprite}
          alt={pokeCar.pokemon_name}
          className="w-28 h-28 object-contain drop-shadow-lg"
        />
      </div>

      <h3 className="text-lg font-black text-center text-white mt-2">
        {pokeCar.name}
      </h3>

      <div className="flex justify-center gap-2 mt-2">
        {pokeCar.pokemon_types.map((type) => (
          <TypeBadge key={type} type={type} />
        ))}
      </div>

      <div className="text-xs text-gray-400 text-center mt-2">
        {pokeCar.car_brand} {pokeCar.car_model} ({pokeCar.car_year})
      </div>

      <div className="flex justify-between text-sm text-white mt-3">
        <span>⚡ Power</span>
        <span className="font-bold">{pokeCar.total_power}</span>
      </div>

      <div className="flex justify-between text-xs text-gray-300 mt-1">
        <span>
          {pokeCar.wins}W / {pokeCar.losses}L
        </span>
        <span>
          Win rate:{" "}
          {pokeCar.wins + pokeCar.losses > 0
            ? Math.round((pokeCar.wins / (pokeCar.wins + pokeCar.losses)) * 100)
            : 0}
          %
        </span>
      </div>

      {showStats && (
        <div className="mt-4">
          <StatsDisplay stats={pokeCar.stats} />
        </div>
      )}
    </div>
  );
}
