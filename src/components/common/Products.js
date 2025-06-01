import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-olive">Olive Brand</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-olive focus:outline-none">
            ☰
          </button>
        </div>
        <ul className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>        
          <li><Link to="hero" smooth duration={500} className="cursor-pointer hover:text-goldleaf">Home</Link></li>
          <li><Link to="about" smooth duration={500} className="cursor-pointer hover:text-goldleaf">About</Link></li>
          <li><Link to="products" smooth duration={500} className="cursor-pointer hover:text-goldleaf">Products</Link></li>
          <li><Link to="contact" smooth duration={500} className="cursor-pointer hover:text-goldleaf">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

