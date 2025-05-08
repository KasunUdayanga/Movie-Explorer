import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle.js';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Movie Explorer
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/favorites" className="hover:text-gray-400">
            Favorites
          </Link>
          <DarkModeToggle/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;