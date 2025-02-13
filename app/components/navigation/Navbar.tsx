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
          ? "bg-gradient-to-r from-amber-900/80 via-black/80 to-amber-900/80 backdrop-blur-md border-b border-amber-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-display font-bold text-white">
              Sikkim Rising Star
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/events" className="nav-link">
                Events
              </Link>
            </div>
            <Link
              href="/register"
              className="button px-6 py-2 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition-all duration-300"
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
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
              <Link
                href="/"
                className="text-2xl text-gray-300 hover:text-amber-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-2xl text-gray-300 hover:text-amber-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/events"
                className="text-2xl text-gray-300 hover:text-amber-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/register"
                className="button text-xl px-8 py-3 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition-all duration-300"
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