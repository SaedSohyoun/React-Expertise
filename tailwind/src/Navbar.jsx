import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 dark:bg-blue-700 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Mijn Website</h1>
        <ul className="flex space-x-6">
          <li>
            <a className="text-white hover:underline" href="#">Home</a>
          </li>
          <li>
            <a className="text-white hover:underline" href="#">Over</a>
          </li>
          <li>
            <a className="text-white hover:underline" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;