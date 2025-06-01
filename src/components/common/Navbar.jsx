import { ShoppingBag, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-stone text-warmbrown px-4 sm:px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl sm:text-3xl text-olive font-bold">
          OlivePure
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-base items-center">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-olive"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 px-2 text-sm">
          <a href="/" className="block hover:underline">Home</a>
          <a href="/about" className="block hover:underline">About</a>
          <a href="/contact" className="block hover:underline">Contact</a>
        </div>
      )}
    </header>
  );
}
