import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-100 py-5">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className=" font-bold">Movie Explorer</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;