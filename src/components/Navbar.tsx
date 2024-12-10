import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <section className="bg-black text-white relative">
      {/* Navbar */}
      <nav className="bg-black border-gray-700">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <span className="text-center self-center text-2xl font-semibold text-yellow-500">
            Foodtuck
          </span>

          {/* Mobile Menu Button */}
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Navbar Links */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg font-medium">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-500">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-yellow-500" href="/menu"> Menu</Link>
              </li>
              <li>
                <Link href="/Blog" className="text-gray-400 hover:text-yellow-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/Pages" className="text-gray-400 hover:text-yellow-500">
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-gray-400 hover:text-yellow-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Shop" className="text-gray-400 hover:text-yellow-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="text-gray-400 hover:text-yellow-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-32 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-orange-400 font-medium text-lg">It’s Quick & Amusing!</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            The Art of Speed<br />
            <span className="text-orange-400">Food Quality</span>
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <a
            href="#menu"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-medium"
          >
            See Menu
          </a>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <div className="relative z-10">
            <img
              src="/Image.png" // Replace with your food image path
              alt="Delicious Food"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
