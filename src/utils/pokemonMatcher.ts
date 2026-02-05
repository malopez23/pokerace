const TOTAL_POKEMON = 898;

function hashString(value: string): number {
  return value
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

export function getPokemonIdFromCar(
  carPrice: string,
  carModel: string
): number {
  // 🔹 Remove tudo que não for número (R$ 85.000 → 85000)
  const numericPrice =
    parseInt(carPrice.replace(/[^\d]/g, ""), 10) || 50000;

  // 🔹 Base pelo preço
  let pokemonId = Math.floor(numericPrice / 500) % TOTAL_POKEMON;

  // 🔹 Variação pelo modelo
  const modelHash = hashString(carModel);
  pokemonId = (pokemonId + modelHash) % TOTAL_POKEMON;

  // 🔹 Garante range válido (1–898)
  return pokemonId + 1;
}
