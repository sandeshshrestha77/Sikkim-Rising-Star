
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-amber-900/90 via-black/90 to-amber-900/90 backdrop-blur-lg shadow-lg shadow-amber-900/10 border-b border-amber-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-amber-500 transition-all duration-300">
              Sikkim Rising Star
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link href="/" className="nav-link hover:text-amber-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="nav-link hover:text-amber-400 transition-colors">
                About
              </Link>
              <Link href="/events" className="nav-link hover:text-amber-400 transition-colors">
                Events
              </Link>
            </div>
            <Link
              href="/register"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-amber-400" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-amber-400" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-gradient-to-b from-black/95 to-amber-950/95 backdrop-blur-lg border-t border-amber-500/20">
            <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
              <Link
                href="/"
                className="text-2xl text-amber-300 hover:text-amber-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-2xl text-amber-300 hover:text-amber-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/events"
                className="text-2xl text-amber-300 hover:text-amber-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/register"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
