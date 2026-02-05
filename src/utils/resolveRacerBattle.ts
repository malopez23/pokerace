import type { Racer } from "../types/racer";

export type RacerBattleResult = {
  winner: "racerA" | "racerB" | "draw";
  racerAScore: number;
  racerBScore: number;
  breakdown: {
    speed: number;
    power: number;
    durability: number;
  };
};

export function resolveRacerBattle(
  racerA: Racer,
  racerB: Racer
): RacerBattleResult {
  const racerAScore =
    racerA.carStats.speed +
    racerA.carStats.power +
    racerA.carStats.durability +
    racerA.pokemonStats.speed +
    racerA.pokemonStats.power +
    racerA.pokemonStats.durability;

  const racerBScore =
    racerB.carStats.speed +
    racerB.carStats.power +
    racerB.carStats.durability +
    racerB.pokemonStats.speed +
    racerB.pokemonStats.power +
    racerB.pokemonStats.durability;

  let winner: RacerBattleResult["winner"] = "draw";

  if (racerAScore > racerBScore) winner = "racerA";
  if (racerBScore > racerAScore) winner = "racerB";

  return {
    winner,
    racerAScore,
    racerBScore,
    breakdown: {
      speed:
        racerA.carStats.speed +
        racerA.pokemonStats.speed -
        (racerB.carStats.speed + racerB.pokemonStats.speed),
      power:
        racerA.carStats.power +
        racerA.pokemonStats.power -
        (racerB.carStats.power + racerB.pokemonStats.power),
      durability:
        racerA.carStats.durability +
        racerA.pokemonStats.durability -
        (racerB.carStats.durability + racerB.pokemonStats.durability),
    },
  };
}
