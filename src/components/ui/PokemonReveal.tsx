import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PokemonData } from "../../api/pokemon";

type PokemonRevealProps = {
  pokemon: PokemonData;
  onConfirm: () => void;
};

type RevealState = "idle" | "loading" | "revealed";

export function PokemonReveal({ pokemon, onConfirm }: PokemonRevealProps) {
  const [state, setState] = useState<RevealState>("idle");

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {state === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center space-y-6"
          >
            <h2 className="text-2xl font-bold text-white">
              Ready to reveal {pokemon.name}?
            </h2>

            <button
              onClick={() => {
                setState("loading");
                setTimeout(() => {
                  setState("revealed");
                  onConfirm();
                }, 1000);
              }}
              className="px-6 py-3 rounded-xl bg-linear-to-r from-yellow-400 to-orange-500 font-bold text-black hover:scale-105 transition"
            >
              Reveal Pokémon
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
