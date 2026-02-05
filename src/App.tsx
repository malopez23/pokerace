import { useState } from "react";
import { CarSelector } from "./components/CarSelector";

import type { FipeCar } from "./api/fipe";
import type { Racer } from "./types/racer";
import type { RacerBattleResult } from "./types/racer";

import { createRacerFromCar } from "./utils/createRacer";
import { resolveRacerBattle } from "./utils/resolveRacerBattle";

export default function App() {

  function getWinnerLabel(winner: "racerA" | "racerB" | "draw") {
    if (winner === "draw") return "Draw";
    if (winner === "racerA") return "Player 1";
    return "Player 2";
  }

  const [playerOne, setPlayerOne] = useState<Racer | null>(null);
  const [playerTwo, setPlayerTwo] = useState<Racer | null>(null);
  const [battle, setBattle] = useState<RacerBattleResult | null>(null);

  async function handlePlayerOne(car: FipeCar) {
    console.clear();
    console.log("🚗 Player 1 selected:", car);

    const racer = await createRacerFromCar(car);
    setPlayerOne(racer);

    console.log("🧩 Player 1 racer:", racer);
  }

  async function handlePlayerTwo(car: FipeCar) {
    console.log("🚙 Player 2 selected:", car);

    const racer = await createRacerFromCar(car);
    setPlayerTwo(racer);

    console.log("🧩 Player 2 racer:", racer);

    if (playerOne) {
      const result = resolveRacerBattle(playerOne, racer);
      setBattle(result);

      console.log("🏁 Battle result:", result);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      {!playerOne && (
        <>
          <h2 className="text-xl font-bold">Player 1</h2>
          <CarSelector onCarSelected={handlePlayerOne} />
        </>
      )}

      {playerOne && !playerTwo && (
        <>
          <h2 className="text-xl font-bold">Player 2</h2>
          <CarSelector onCarSelected={handlePlayerTwo} />
        </>
      )}

      {battle && (
        <div className="p-6 rounded-xl bg-gray-800 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">🏆 PvP Result</h2>

          <p>
            Winner: <strong className="uppercase">{getWinnerLabel(battle.winner)}</strong>
          </p>

          <p>🚗 Player 1 score: {battle.racerAScore.toFixed(2)}</p>
          <p>🚙 Player 2 score: {battle.racerBScore.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
