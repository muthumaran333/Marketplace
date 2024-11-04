// src/components/Navbar.js
import React from 'react';

const Navbar = ({ handleToggleForm }) => {
  return (
    <div>
      <nav className="bg-blue-600 p-4 shadow-md flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">MarketPlace</h1>
        <button
          onClick={handleToggleForm}
          className="bg-white text-blue-600 font-medium px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-150 ease-in-out"
        >
          Add New Product
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
