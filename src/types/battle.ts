export type BattleResult = {
  carScore: number;
  pokemonScore: number;
  winner: "car" | "pokemon" | "draw";
  breakdown: {
    speed: {
      car: number;
      pokemon: number;
    };
    power: {
      car: number;
      pokemon: number;
    };
    durability: {
      car: number;
      pokemon: number;
    };
  };
};
