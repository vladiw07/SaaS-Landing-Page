import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-[104rem] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold">Taskly</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="text-gray-700 hover:text-black">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-black">Pricing</a>
          <a href="#faq" className="text-gray-700 hover:text-black pr-20">FAQ</a>
          <button className="mt-2 bg-black text-white px-5 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900">
  Get early access
</button>
        </div>

        {/* Hamburger icon (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#features" className="block py-2 text-gray-700 hover:text-black">Features</a>
          <a href="#pricing" className="block py-2 text-gray-700 hover:text-black">Pricing</a>
          <a href="#faq" className="block py-2 text-gray-700 hover:text-black">FAQ</a>
          <button className="mt-2 bg-black text-white px-5 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800">
  Get early access
</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
