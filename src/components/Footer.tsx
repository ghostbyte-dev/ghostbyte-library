import { GhostIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-500/30 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <img
            src="/images/ghostbyte_logo_white.svg"
            alt="Ghostbyte logo white"
            height={24}
            className="h-6 mr-2"
          />
          <span className="text-xl font-bold text-dark">Ghostbyte Library</span>
        </div>
        <p>
          © {new Date().getFullYear()}{" "}
          <Link href="https://ghostbyte.dev" className="hover:underline">
            Ghostbyte
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
