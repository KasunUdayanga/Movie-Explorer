import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-gray-100  shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold  hover:text-blue-400 transition">
          Movie Explorer
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-lg hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="text-lg hover:text-blue-400 transition"
          >
            Favorites
          </Link>
      

        </div>
      </div>
    </nav>
  );
};

export default Navbar;