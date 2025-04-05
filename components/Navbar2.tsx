"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const PCNav = () => {
  return (
    <nav className="hidden md:flex bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <img
            src="https://res.cloudinary.com/dea3r5dn7/image/upload/v1743798640/l9l0der0d6ydzuum7uey.png"
            alt="Logo"
            width={175}
          />
        </Link>

        {/* Navigation Links (3x Larger) */}
        <div className="flex items-center space-x-16 text-[18px]">
          <Link href="/" className="text-gray-800 hover:text-blue-700">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-700">
            Book a Consultancy
          </Link>
          <Link href="/shop" className="text-gray-800 hover:text-blue-700">
            Best-Selling Books
          </Link>
          <Link href="/article" className="text-gray-800 hover:text-blue-700">
          Articles
          </Link>
          <Link href="/contact" className="bg-[#000768] text-white px-6 py-3 rounded-full">
  Let's Talk
</Link>

        </div>
      </div>
    </nav>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden bg-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between p-12">
        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <img
              src="https://res.cloudinary.com/dea3r5dn7/image/upload/v1743798640/l9l0der0d6ydzuum7uey.png"
              alt="Logo"
              
              width={100}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div id="navidnew" className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-2xl">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>

          {/* Navigation Links */}
          <Link href="/" className="text-gray-800" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="text-gray-800" onClick={() => setIsOpen(false)}>
            Book a Consultancy
          </Link>
          <Link href="/shop" className="text-gray-800" onClick={() => setIsOpen(false)}>
            Best-Selling Books
          </Link>
          <Link href="/articles" className="text-gray-800" onClick={() => setIsOpen(false)}>
          Articles
          </Link>
          <Link
            href="/contact"
            className="bg-[#000768] text-white px-6 py-3 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

const NavBar = () => {
  return (
    <>
      <PCNav />
      <MobileNav />
    </>
  );
};

export default NavBar;
