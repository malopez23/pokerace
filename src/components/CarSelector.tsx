/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import {
  getBrands,
  getModels,
  getYears,
  getCarDetails,
  type FipeBrand,
  type FipeModel,
  type FipeYear,
  type FipeCarDetails,
} from "../api/fipe";

type CarSelectorProps = {
  onCarSelected: (car: FipeCarDetails) => void;
};

export function CarSelector({ onCarSelected }: CarSelectorProps) {
  const [brands, setBrands] = useState<FipeBrand[]>([]);
  const [models, setModels] = useState<FipeModel[]>([]);
  const [years, setYears] = useState<FipeYear[]>([]);

  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("");

  const [loadingBrands, setLoadingBrands] = useState(false);
  const [loadingModels, setLoadingModels] = useState(false);
  const [loadingYears, setLoadingYears] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);

  // 🔹 Load brands
  useEffect(() => {
    setLoadingBrands(true);
    getBrands()
      .then(setBrands)
      .finally(() => setLoadingBrands(false));
  }, []);

  // 🔹 Load models when brand changes
  useEffect(() => {
    if (!selectedBrand) return;

    setLoadingModels(true);
    setModels([]);
    setYears([]);
    setSelectedModel(null);
    setSelectedYear("");

    getModels(selectedBrand)
      .then(setModels)
      .finally(() => setLoadingModels(false));
  }, [selectedBrand]);

  // 🔹 Load years when model changes
  useEffect(() => {
    if (!selectedBrand || !selectedModel) return;

    setLoadingYears(true);
    setYears([]);
    setSelectedYear("");

    getYears(selectedBrand, selectedModel)
      .then(setYears)
      .finally(() => setLoadingYears(false));
  }, [selectedBrand, selectedModel]);

  // 🔹 Load car details when year changes
  useEffect(() => {
    if (!selectedBrand || !selectedModel || !selectedYear) return;

    setLoadingDetails(true);
    getCarDetails(selectedBrand, selectedModel, selectedYear)
      .then(onCarSelected)
      .finally(() => setLoadingDetails(false));
  }, [selectedBrand, selectedModel, selectedYear, onCarSelected]);

  return (
    <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-bold text-white">
        Select your car
      </h2>

      {/* Brand */}
      <div>
        <label className="text-sm text-gray-400">Brand</label>
        <select
          className="w-full mt-1 p-2 rounded bg-gray-900 text-white border border-gray-700"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">
            {loadingBrands ? "Loading brands..." : "Select a brand"}
          </option>
          {brands.map((brand) => (
            <option key={brand.codigo} value={brand.codigo}>
              {brand.nome}
            </option>
          ))}
        </select>
      </div>

      {/* Model */}
      <div>
        <label className="text-sm text-gray-400">Model</label>
        <select
          className="w-full mt-1 p-2 rounded bg-gray-900 text-white border border-gray-700"
          value={selectedModel ?? ""}
          disabled={!selectedBrand || loadingModels}
          onChange={(e) =>
            setSelectedModel(Number(e.target.value))
          }
        >
          <option value="">
            {loadingModels
              ? "Loading models..."
              : "Select a model"}
          </option>
          {models.map((model) => (
            <option key={model.codigo} value={model.codigo}>
              {model.nome}
            </option>
          ))}
        </select>
      </div>

      {/* Year */}
      <div>
        <label className="text-sm text-gray-400">Year</label>
        <select
          className="w-full mt-1 p-2 rounded bg-gray-900 text-white border border-gray-700"
          value={selectedYear}
          disabled={!selectedModel || loadingYears}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">
            {loadingYears
              ? "Loading years..."
              : "Select a year"}
          </option>
          {years.map((year) => (
            <option key={year.codigo} value={year.codigo}>
              {year.nome}
            </option>
          ))}
        </select>
      </div>

      {loadingDetails && (
        <div className="text-sm text-gray-400">
          Loading car details...
        </div>
      )}
    </div>
  );
}
