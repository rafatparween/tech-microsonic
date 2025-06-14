// import Image from "next/image";
// import { FaSearch, FaShoppingCart } from "react-icons/fa";

// export default function PageNavbar() {
//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
//       {/* Left - Logo & Nav */}
//       <div className="flex items-center space-x-10">
//         <Image src="/hplogo.png" alt="HP Logo" width={60} height={60} />
//         <div className="flex space-x-6 text-gray-700 font-medium text-lg">
//           <a href="#" className="hover:text-black">Explore</a>
//           <a href="#" className="hover:text-black">Shop</a>
//           <a href="#" className="hover:text-black">Support</a>
//         </div>
//       </div>

//       {/* Center - Search */}
//       <div className="flex items-center w-[400px] border border-gray-300 rounded px-4 py-1">
//         <input
//           type="text"
//           placeholder="Search HP Support"
//           className="w-full outline-none text-gray-700"
//         />
//         <FaSearch className="text-gray-500" />
//       </div>

//       {/* Right - Cart and Sign in */}
//       <div className="flex items-center space-x-4">
//         <FaShoppingCart className="text-gray-700 text-xl" />
//         <button className="bg-black text-white px-4 py-1 font-medium">
//           Sign in
//         </button>
//       </div>
//     </nav>
//   );
// }


"use client"
import Image from "next/image";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export default function PageNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* Desktop View - EXACTLY as you had it */}
      <nav className="hidden md:flex items-center justify-between px-6 py-4 bg-white shadow">
        <div className="flex items-center space-x-10">
          <Image src="/hplogo.png" alt="HP Logo" width={60} height={60} />
          <div className="flex space-x-6 text-gray-700 font-medium text-lg">
            <a href="#" className="hover:text-black">Explore</a>
            <a href="#" className="hover:text-black">Shop</a>
            <a href="#" className="hover:text-black">Support</a>
          </div>
        </div>

        <div className="flex items-center w-[400px] border border-gray-300 rounded px-4 py-1">
          <input
            type="text"
            placeholder="Search HP Support"
            className="w-full outline-none text-gray-700"
          />
          <FaSearch className="text-gray-500" />
        </div>

        <div className="flex items-center space-x-4">
          <FaShoppingCart className="text-gray-700 text-xl" />
          <button className="bg-black text-white px-4 py-1 font-medium">
            Sign in
          </button>
        </div>
      </nav>

      {/* Mobile View */}
      <nav className="md:hidden flex items-center justify-between px-4 py-3 bg-white shadow relative">
        {/* Left: Menu Button + Logo */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 text-xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Image 
            src="/hplogo.png" 
            alt="HP Logo" 
            width={48} 
            height={48}
          />
        </div>

        {/* Right: Search Icon + Cart + Sign In */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="text-gray-700"
          >
            <FaSearch className="text-lg" />
          </button>
          <FaShoppingCart className="text-gray-700 text-lg" />
          <button className="bg-black text-white px-3 py-1 text-sm font-medium">
            Sign in
          </button>
        </div>

        {/* Mobile Menu Slide-out */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-64 bg-white shadow-lg z-50 border-t">
            <div className="flex flex-col py-2">
              <a href="#" className="px-4 py-3 text-gray-700 hover:bg-gray-100">Explore</a>
              <a href="#" className="px-4 py-3 text-gray-700 hover:bg-gray-100">Shop</a>
              <a href="#" className="px-4 py-3 text-gray-700 hover:bg-gray-100">Support</a>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Search Bar - appears below navbar */}
      {showSearch && (
        <div className="md:hidden px-4 py-2 bg-white border-t border-b">
          <div className="flex items-center w-full border border-gray-300 rounded px-3 py-1">
            <input
              type="text"
              placeholder="Search HP Support"
              className="w-full outline-none text-gray-700 text-sm"
              autoFocus
            />
            <FaSearch className="text-gray-500 ml-2" />
          </div>
        </div>
      )}
    </>
  );
}