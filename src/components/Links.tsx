"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Corrected import
import {
  House,
  DeviceMobileSpeaker,
  Palette,
  TextAa,
  GameController,
  BezierCurve,
  PaintBrush,
  Camera,
  ImageSquare,
  Lightbulb,
  Smiley,
  ThumbsUp,
  Wrench,
  PuzzlePiece,
} from "phosphor-react";

const navLinks = [
  {
    name: "Design",
    items: [
      { title: "Icons", path: "/design/icons", icon: Smiley },
      { title: "Illustrations", path: "/design/illustrations", icon: ImageSquare },
      { title: "Stock Photos", path: "/design/stock-photos", icon: Camera },
      { title: "Colors", path: "/design/colors", icon: Palette },
      { title: "Inspiration", path: "/design/inspiration", icon: Lightbulb },
      { title: "UI Components", path: "/design/ui-components", icon: DeviceMobileSpeaker },
      { title: "Typography", path: "/design/fonts", icon: TextAa },
      { title: "Tools", path: "/design/tools", icon: Wrench },
      { title: "Browser Extensions", path: "/design/extensions", icon: PuzzlePiece },
      { title: "Best Practices", path: "/design/best-practices", icon: ThumbsUp },
      { title: "Design Systems", path: "/design/systems", icon: BezierCurve },
      { title: "AI Art", path: "/design/ai-art", icon: PaintBrush },
      { title: "Games", path: "/design/games", icon: GameController },
    ],
  },
];

interface ChildProps {
  toggleMenu: () => void;
}

const Links = () => {
  const pathname = usePathname(); // Corrected from useRouter()

  return (
    <ul className="list-none px-0">
      <li className="my-4">
        <Link
          href="/"
          className={`text-white text-sm flex p-3 rounded-lg ${
            pathname === "/" ? "bg-gray-900" : "hover:bg-gray-700"
          }`}
        >
          <House color="white" size={20} className="mr-2" /> Home
        </Link>
      </li>
      {navLinks.map((bucket) => (
        <li key={bucket.name}>
          <ul className="list-none px-0">
            {bucket.items.map((link) => (
              <li className="mb-1" key={link.title}>
                <Link
                  href={link.path}
                  className={`text-white whitespace-nowrap text-sm flex p-3 rounded-lg ${
                    pathname === link.path ? "bg-gray-900" : "hover:bg-gray-700"
                  }`}
                >
                  <link.icon color="white" size={20} className="mr-2" /> {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Links;
