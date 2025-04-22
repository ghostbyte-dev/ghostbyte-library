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
import { iconMap } from "../lib/Icons";
import { HouseIcon } from "lucide-react";

const navLinks = [
  {
    name: "Design",
    items: [
      {
        title: "Icons",
        path: "/icons",
      },
      {
        title: "Illustrations",
        path: "/illustrations",
      },
      {
        title: "Stock Photos",
        path: "/stock-photos",
      },
      {
        title: "Colors",
        path: "/colors",
      },
      {
        title: "Inspiration",
        path: "/inspiration",
      },
      {
        title: "UI Components",
        path: "/ui-components",
      },
      {
        title: "Typography",
        path: "/fonts",
      },
      {
        title: "Tools",
        path: "/tools",
      },
      {
        title: "Browser Extensions",
        path: "/extensions",
      },
      {
        title: "Best Practices",
        path: "/best-practices",
      },
      {
        title: "Design Systems",
        path: "/systems",
      },
      {
        title: "AI Art",
        path: "/ai-art",
      },
      {
        title: "Games",
        path: "/games",
      },
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
          className={`text-white text-sm flex items-center gap-3 p-3 rounded-lg ${
            pathname === "/" ? "bg-gray-900" : "hover:bg-gray-700"
          }`}
        >
          <div className="p-2 rounded-md bg-gradient-to-br from-purple-500 to-cyan-600">
            <HouseIcon size={20} className="text-white" />
          </div>
          Home
        </Link>
      </li>
      {navLinks.map((bucket) => (
        <li key={bucket.name}>
          <ul className="list-none px-0">
            {bucket.items.map((link) => {
              const { gradient, icon: Icon } = iconMap[link.title];

              return (
                <li className="mb-1" key={link.title}>
                  <Link
                    href={link.path}
                    onClick={toggleMenu}
                    className={`text-white whitespace-nowrap text-sm flex items-center gap-3 p-3 rounded-lg ${
                      pathname === link.path
                        ? "bg-gray-900"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-md bg-gradient-to-br ${gradient}`}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Links;
