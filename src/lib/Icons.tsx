import {
  Smile,
  Image,
  Camera,
  Palette,
  Lightbulb,
  Smartphone,
  Type,
  Wrench,
  Puzzle,
  ThumbsUp,
  LayoutTemplate,
  Brush,
  Gamepad2,
} from "lucide-react";

export const iconMap: Record<
  string,
  {
    gradient: string;
    icon: React.ElementType;
  }
> = {
  Icons: {
    gradient: "bg-gradient-to-r from-pink-500 to-rose-700",
    icon: Smile,
  },
  Illustrations: {
    gradient: "bg-gradient-to-r from-yellow-400 to-orange-600",
    icon: Image,
  },
  "Stock Photos": {
    gradient: "bg-gradient-to-r from-blue-500 to-indigo-700",
    icon: Camera,
  },
  Colors: {
    gradient: "bg-gradient-to-r from-green-400 to-emerald-600",
    icon: Palette,
  },
  Inspiration: {
    gradient: "bg-gradient-to-r from-fuchsia-500 to-pink-700",
    icon: Lightbulb,
  },
  "UI Components": {
    gradient: "bg-gradient-to-r from-cyan-500 to-blue-700",
    icon: Smartphone,
  },
  Typography: {
    gradient: "bg-gradient-to-r from-purple-500 to-violet-700",
    icon: Type,
  },
  Tools: {
    gradient: "bg-gradient-to-r from-lime-500 to-green-700",
    icon: Wrench,
  },
  "Browser Extensions": {
    gradient: "bg-gradient-to-r from-teal-500 to-cyan-700",
    icon: Puzzle,
  },
  "Best Practices": {
    gradient: "bg-gradient-to-r from-amber-500 to-yellow-700",
    icon: ThumbsUp,
  },
  "Design Systems": {
    gradient: "bg-gradient-to-r from-rose-500 to-red-700",
    icon: LayoutTemplate,
  },
  "AI Art": {
    gradient: "bg-gradient-to-r from-sky-500 to-indigo-600",
    icon: Brush,
  },
  Games: {
    gradient: "bg-gradient-to-r from-red-500 to-pink-600",
    icon: Gamepad2,
  },
};
