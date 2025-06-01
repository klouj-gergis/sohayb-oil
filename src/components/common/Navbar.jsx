import { ShoppingBag, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full px-10 py-4 flex justify-between bg-stone">
      <a href="/">
        <h1 className="text-3xl text-olive font-bold hover:cursor-pointer">OlivePure</h1>
      </a>
      <ul className="flex items-center gap-4 text-warmbrown">
        <a href="/"><li className="hover:underline hover:cursor-pointer">Home</li></a>
        <a href="/about"><li className="hover:underline hover:cursor-pointer">About</li></a>
        <a href="/contact"><li className="hover:underline hover:cursor-pointer">Contact</li></a>
      </ul>
      <div className="icons flex gap-5 items-center text-olive">
        <ShoppingBag className="hover:cursor-pointer" />
        <Search className="hover:cursor-pointer" />
      </div>
    </div>
  );
}
