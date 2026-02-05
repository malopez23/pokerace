export type PokeCar = {
  name: string;
  car_brand: string;
  car_model: string;
  car_year: string;
  pokemon_name: string;
  pokemon_sprite: string;
  pokemon_types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
  total_power: number;
  wins: number;
  losses: number;
};
