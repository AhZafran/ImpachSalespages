"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Tawaran", href: "#tawaran" },
  { label: "Kenapa Kami", href: "#kenapa-kami" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/logo/impachlogo.png"
              alt="IMPACH Academy"
              width={200}
              height={60}
              className="h-14 sm:h-16 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#073050] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <a
            href="https://wa.link/olf8w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>WhatsApp Kami</span>
          </a>
        </div>
      </div>
    </header>
  );
}
