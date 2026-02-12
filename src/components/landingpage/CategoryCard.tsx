import Link from "next/link";
import {
  Type,
  Palette,
  ImageIcon,
  Wrench,
  Shapes,
  Layout,
  Code,
  Lightbulb,
  Gamepad2,
  Globe,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

interface CategoryCardProps {
  title: string;
  slug: string;
  icon: string;
  description: string;
  gradient: string;
}

export function CategoryCard({
  title,
  slug,
  icon,
  description,
  gradient,
}: CategoryCardProps) {
  const iconMap: Record<string, LucideIcon> = {
    type: Type,
    palette: Palette,
    image: ImageIcon,
    wrench: Wrench,
    shapes: Shapes,
    layout: Layout,
    code: Code,
    lightbulb: Lightbulb,
    gamepad: Gamepad2,
    globe: Globe,
    book: BookOpen,
  };

  const IconComponent = iconMap[icon] || Type;

  return (
    <Link href={`/${slug}`}>
      <div className="group relative h-full overflow-hidden rounded-xl bg-dark p-6 transition-all hover:shadow-lg hover:shadow-purple-900/20">
        <div className="relative z-10">
          <div
            className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${gradient} mb-4`}
          >
            <IconComponent className="h-6 w-6 text-white" />
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </Link>
  );
}
