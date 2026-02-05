export type BattleResult = {
  winner: "car" | "pokemon" | "draw";
  carScore: number;
  pokemonScore: number;
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
