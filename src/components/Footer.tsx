import { GhostIcon } from "lucide-react";

export default function Footer () {
    return (
        <footer className="border-t border-purple-900/30 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <div className="flex items-center justify-center mb-4">
            <GhostIcon className="h-6 w-6 text-white mr-2" />
            <span className="text-xl font-bold text-white">Ghostbyte</span>
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent ml-2">
              Library
            </span>
          </div>
          <p>© {new Date().getFullYear()} Ghostbyte. All rights reserved.</p>
        </div>
      </footer>
    )
}