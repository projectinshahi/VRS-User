"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Webinar", href: "/webinar" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Client Review", href: "/review" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg md:text-xl font-semibold tracking-wide text-white hover:text-yellow-400 transition"
        >
          vrs realinvest
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || (link.href === "/" && pathname === "/");

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm tracking-wide transition ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-yellow-400 transition"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col px-6 py-6 space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow-400 transition text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
