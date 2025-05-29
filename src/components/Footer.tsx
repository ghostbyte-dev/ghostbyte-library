import { GhostIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-purple-900/30 py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <div className="flex items-center justify-center mb-4">
          <img
            src="/images/ghostbyte_logo_white.svg"
            alt="Ghostbyte logo white"
            height={24}
            className="h-6 mr-2"
          />
          <span className="text-xl font-bold text-white">Ghostbyte</span>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent ml-2">
            Library
          </span>
        </div>
        <p>
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://ghostbyte.dev"
            className="hover:underline hover:text-white"
          >
            Ghostbyte
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
