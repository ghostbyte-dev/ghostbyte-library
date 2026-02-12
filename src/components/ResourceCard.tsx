import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { ITag } from "../types/types";
import Image from "next/image";

interface ResourceCardProps {
  title: string;
  description: string;
  tags: ITag[];
  logo: string;
  url: string;
}

const tagLabels: Record<string, string> = {
  os: "Open Source",
  free: "Free",
  freemium: "Freemium",
  paid: "Paid",
};

const tagColors: Record<string, string> = {
  os: "bg-green-900/30 text-green-400",
  free: "bg-purple-900/30 text-purple-400",
  freemium: "bg-orange-900/30 text-orange-400",
  paid: "bg-red-900/30 text-red-400",
};

export function ResourceCard({
  title,
  description,
  tags,
  logo,
  url,
}: ResourceCardProps) {
  // Map of gradients for different logos
  const gradientMap: Record<string, string> = {
    google: "from-blue-500 to-green-500",
    fontjoy: "from-purple-500 to-pink-500",
    dafont: "from-red-500 to-orange-500",
    typesource: "from-cyan-500 to-blue-500",
    fontsquirrel: "from-amber-500 to-yellow-500",
    cufon: "from-green-500 to-emerald-500",
    fontshare: "from-violet-500 to-indigo-500",
    fontspace: "from-rose-500 to-pink-500",
    default: "from-rose-500 to-pink-500",
  };

  const gradient = gradientMap[logo] || gradientMap.default;

  return (
    <Link
      href={url}
      target="_blank"
      className="group h-full relative block overflow-hidden rounded-xl bg-[#262626] p-6 transition-all hover:border-purple-700/50 hover:shadow-lg hover:shadow-purple-900/20"
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <Image
            src={`/images/${logo}`}
            alt=""
            width={46}
            height={46}
            className="rounded-md"
          />

          <ExternalLink className="h-4 w-4 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => {
            const label = tagLabels[tag.name] || tag.name;
            const color = tagColors[tag.name] || "bg-gray-800 text-gray-300";

            return (
              <span
                // biome-ignore lint/suspicious/noArrayIndexKey: Tag names are stable and order is not critical here
                key={index}
                className={`text-xs font-medium px-2 py-1 rounded-full ${color}`}
              >
                {label}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
