"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
      { title: "Icons", path: "/icons", icon: Smiley },
      { title: "Illustrations", path: "/illustrations", icon: ImageSquare },
      { title: "Stock Photos", path: "/stock-photos", icon: Camera },
      { title: "Colors", path: "/colors", icon: Palette },
      { title: "Inspiration", path: "/inspiration", icon: Lightbulb },
      { title: "UI Components", path: "/ui-components", icon: DeviceMobileSpeaker },
      { title: "Typography", path: "/fonts", icon: TextAa },
      { title: "Tools", path: "/tools", icon: Wrench },
      { title: "Browser Extensions", path: "/extensions", icon: PuzzlePiece },
      { title: "Best Practices", path: "/best-practices", icon: ThumbsUp },
      { title: "Design Systems", path: "/systems", icon: BezierCurve },
      { title: "AI Art", path: "/ai-art", icon: PaintBrush },
      { title: "Games", path: "/games", icon: GameController },
    ],
  },
];

interface LinksProps {
  toggleMenu?: () => void;
}

const Links: React.FC<LinksProps> = ({ toggleMenu }) => {
  const pathname = usePathname();

  return (
    <ul className="list-none px-0">
      <li className="my-4">
        <Link
          href="/"
          onClick={toggleMenu}
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
                  onClick={toggleMenu}
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
