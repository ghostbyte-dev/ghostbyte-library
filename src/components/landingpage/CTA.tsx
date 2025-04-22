import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Want to suggest a resource?
        </h2>
        <p className="text-gray-300 mb-8">
          Help us grow our library by suggesting useful websites and tools
          you've discovered.
        </p>
        <Link
          href="https://github.com/ghostbyte-dev/ghostbyte-library/issues"
          className="flex bg-gradient-to-r font-semibold from-purple-700 to-cyan-600 hover:from-purple-800 hover:to-cyan-700 text-white border-0 h-12 px-6 rounded-md"
        >
          <span className="relative z-10 flex items-center">
            Submit a Resource
            <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}
