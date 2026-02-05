import type { BattleResult as BattleResultType } from "../../types/battle";
import type { PokemonData } from "../../api/pokemon";

type Props = {
  pokemon: PokemonData;
  battle: BattleResultType;
  onRestart?: () => void;
};

export function BattleResult({ pokemon, battle, onRestart }: Props) {
  const winnerLabel =
    battle.winner === "car"
      ? "🚗 Car wins!"
      : battle.winner === "pokemon"
      ? "🐲 Pokémon wins!"
      : "🤝 Draw";

  return (
    <div className="bg-gray-900/90 rounded-xl p-6 w-full max-w-md text-center space-y-4 text-white shadow-xl">
      <h2 className="text-2xl font-bold">Battle Result</h2>

      <img
        src={pokemon.sprite}
        alt={pokemon.name}
        className="mx-auto w-40 h-40"
      />

      <p className="text-lg capitalize">
        Pokémon: <strong>{pokemon.name}</strong>
      </p>

      <p className="text-xl font-bold">{winnerLabel}</p>

      <div className="text-sm opacity-90 space-y-1">
        <p>🚗 Car score: {battle.carScore.toFixed(2)}</p>
        <p>🐲 Pokémon score: {battle.pokemonScore.toFixed(2)}</p>
      </div>

      {onRestart && (
        <button
          onClick={onRestart}
          className="mt-4 px-4 py-2 rounded-lg bg-yellow-400 text-black font-bold hover:scale-105 transition"
        >
          Try another car
        </button>
      )}
    </div>
  );
}
