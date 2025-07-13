'use client';

import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";
import Link from "next/link";
import Cart from "./Cart";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-100 px-4 sm:px-6 lg:px-12 py-3 shadow-md">
        <div className="container mx-auto flex flex-wrap items-center justify-between">

          <Link href="/" className="text-2xl sm:text-3xl font-bold text-[#EE4899] flex-shrink-0">
            Pasha-Store
          </Link>

          {/* Hamburger button (Mobile only) */}
          <button
            className="block sm:hidden text-gray-800 hover:text-[#EE4899] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Search Bar */}
          <form
            action="/store/category"
            method="GET"
            className={`
              flex-grow
              w-full
              sm:w-auto
              sm:flex
              justify-center
              mb-2
              sm:mb-0
              transition-all duration-300
              ${menuOpen ? "block" : "hidden"}
              sm:block
            `}
          >
            <div className="flex w-full max-w-md sm:max-w-xs md:max-w-md">
              <input
                type="text"
                placeholder="Search"
                name="type"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-3xl rounded-r-[3%] focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-3 cursor-pointer bg-[#EE4899] text-white rounded-r-[50%] hover:bg-[#e82282]"
              >
                <IoSearchOutline />
              </button>
            </div>
          </form>

          {/* Menu items (Home, Store, Cart) */}
          <div
            className={`
              w-full
              sm:w-auto
              flex
              flex-col
              sm:flex-row
              items-start
              sm:items-center
              space-y-2
              sm:space-y-0
              sm:space-x-6
              text-gray-800
              ${menuOpen ? "block" : "hidden"}
              sm:flex
            `}
          >
            <Link
              href="/"
              className="text-base sm:text-lg hover:text-[#EE4899] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/store"
              className="text-base sm:text-lg hover:text-[#EE4899] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Store
            </Link>

            {/* Cart icon */}
            <CgShoppingCart
              className="text-2xl cursor-pointer hover:text-[#EE4899]"
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
            />
          </div>
        </div>
      </nav>


      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}