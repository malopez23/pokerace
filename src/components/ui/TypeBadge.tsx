type TypeBadgeProps = {
  type: string;
  size?: "sm" | "md" | "lg";
};

const TYPE_STYLES: Record<string, string> = {
  normal: "bg-gray-400 text-gray-900",
  fire: "bg-orange-500 text-white",
  water: "bg-blue-500 text-white",
  electric: "bg-yellow-400 text-gray-900",
  grass: "bg-green-500 text-white",
  ice: "bg-cyan-300 text-gray-900",
  fighting: "bg-red-700 text-white",
  poison: "bg-purple-500 text-white",
  ground: "bg-amber-600 text-white",
  flying: "bg-indigo-300 text-gray-900",
  psychic: "bg-pink-500 text-white",
  bug: "bg-lime-500 text-gray-900",
  rock: "bg-stone-500 text-white",
  ghost: "bg-purple-800 text-white",
  dragon: "bg-violet-600 text-white",
  dark: "bg-gray-800 text-white",
  steel: "bg-slate-400 text-gray-900",
  fairy: "bg-pink-300 text-gray-900",
};

const TYPE_EMOJI: Record<string, string> = {
  normal: "⚪",
  fire: "🔥",
  water: "💧",
  electric: "⚡",
  grass: "🌿",
  ice: "❄️",
  fighting: "🥊",
  poison: "☠️",
  ground: "🌎",
  flying: "🕊️",
  psychic: "🔮",
  bug: "🐛",
  rock: "🪨",
  ghost: "👻",
  dragon: "🐉",
  dark: "🌑",
  steel: "⚙️",
  fairy: "✨",
};

const SIZE_STYLES: Record<
  "sm" | "md" | "lg",
  { container: string; text: string }
> = {
  sm: {
    container: "w-20 h-6",
    text: "text-xs",
  },
  md: {
    container: "w-24 h-7",
    text: "text-sm",
  },
  lg: {
    container: "w-28 h-8",
    text: "text-base",
  },
};

export function TypeBadge({ type, size = "md" }: TypeBadgeProps) {
  const colorClass = TYPE_STYLES[type] ?? "bg-gray-600 text-white";
  const emoji = TYPE_EMOJI[type] ?? "❓";
  const sizeStyle = SIZE_STYLES[size];

  return (
    <div
      className={`
        ${sizeStyle.container}
        ${colorClass}
        rounded-full
        flex items-center justify-center
        gap-1
        overflow-hidden
        font-bold uppercase
        ${sizeStyle.text}
      `}
    >
      <span className="shrink-0">{emoji}</span>
      <span className="truncate">{type}</span>
    </div>
  );
}
