const BASE_URL = "https://parallelum.com.br/fipe/api/v1/carros";

export type FipeBrand = {
  codigo: string;
  nome: string;
};

export type FipeModel = {
  codigo: number;
  nome: string;
};

export type FipeYear = {
  codigo: string;
  nome: string;
};

export type FipeCarDetails = {
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Valor: string;
  Combustivel: string;
  CodigoFipe: string;
};

export type FipeCar = {
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
};


export async function getBrands(): Promise<FipeBrand[]> {
  const res = await fetch(`${BASE_URL}/marcas`);
  return res.json();
}

export async function getModels(
  brandCode: string
): Promise<FipeModel[]> {
  const res = await fetch(
    `${BASE_URL}/marcas/${brandCode}/modelos`
  );
  const data = await res.json();
  return data.modelos;
}

export async function getYears(
  brandCode: string,
  modelCode: number
): Promise<FipeYear[]> {
  const res = await fetch(
    `${BASE_URL}/marcas/${brandCode}/modelos/${modelCode}/anos`
  );
  return res.json();
}

export async function getCarDetails(
  brandCode: string,
  modelCode: number,
  yearCode: string
): Promise<FipeCarDetails> {
  const res = await fetch(
    `${BASE_URL}/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`
  );
  return res.json();
}
