"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Utensils,
  Calendar,
  ShoppingBag,
  Menu as MenuIcon,
  X,
  Phone,
  Clock,
  MapPin,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurant";

interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

export default function Navbar({ cartCount = 0, onOpenCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "La Carte & Menu", href: "/menu" },
    { label: "Réservation", href: "/reservation" },
    { label: "Notre Histoire", href: "/histoire" },
    { label: "Galerie Photos", href: "/galerie" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact & Accès", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top micro announcement bar */}
      <div className="bg-[#1C1917] text-[#EAE5D9] text-[11px] py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3 h-3 text-[#C06041]" />
              <span>{RESTAURANT_INFO.address}, Casablanca</span>
            </span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3 h-3 text-[#C06041]" />
              <span>Mar - Dim : 12h00 - 15h30 &amp; 19h30 - 23h30</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#C06041]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
            <span className="text-stone-600">•</span>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Bonjour Le Comptoir Bistro, je souhaite me renseigner pour une table ou une commande."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EAE5D9] hover:text-[#C06041] transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav
        className={`w-full border-b transition-all duration-200 ${
          isScrolled
            ? "bg-[#FAF9F5]/95 backdrop-blur-md border-[#EAE5D9] shadow-sm py-3"
            : "bg-[#FAF9F5] border-[#EAE5D9]/70 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-[#C06041] text-white flex items-center justify-center shadow-md shadow-[#C06041]/20 transition-transform group-hover:scale-105">
              <Utensils className="w-5 h-5 text-white stroke-[2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] leading-none">
                LE COMPTOIR
              </span>
              <span className="text-[10px] uppercase font-sans tracking-widest text-[#C06041] font-semibold mt-1">
                Bistro &amp; Terroir
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-medium text-[#44403C]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors relative py-1 ${
                    isActive
                      ? "text-[#C06041] font-semibold"
                      : "hover:text-[#C06041]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C06041] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            {/* Takeaway Cart / Tray button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl border border-[#DFD7C7] bg-white text-[#1C1917] hover:border-[#C06041] hover:text-[#C06041] transition-all flex items-center gap-2 text-xs font-medium shadow-2xs"
              aria-label="Voir le panier de commande"
            >
              <ShoppingBag className="w-4 h-4 text-[#C06041]" />
              <span className="hidden sm:inline">Commande WhatsApp</span>
              {cartCount > 0 && (
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-[#C06041] text-white animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Reservation CTA */}
            <Link
              href="/reservation"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C06041] hover:bg-[#A24B30] text-white text-xs font-semibold shadow-md shadow-[#C06041]/25 transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Réserver une Table</span>
            </Link>

            {/* Mobile burger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-[#DFD7C7] bg-white text-[#1C1917] lg:hidden hover:bg-stone-50"
              aria-label="Menu de navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#1C1917]" />
              ) : (
                <MenuIcon className="w-5 h-5 text-[#1C1917]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] sm:top-[90px] z-50 bg-black/40 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-sm bg-[#FAF9F5] h-full shadow-2xl p-6 flex flex-col justify-between border-l border-[#DFD7C7] animate-in slide-in-from-right duration-200">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#EAE5D9]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#C06041] text-white flex items-center justify-center font-bold">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <span className="font-serif font-bold text-lg text-[#1C1917]">
                    LE COMPTOIR
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-stone-500 hover:text-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-xl text-sm transition-colors ${
                        isActive
                          ? "bg-[#C06041]/10 text-[#C06041] font-bold"
                          : "text-[#44403C] hover:bg-stone-100"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-stone-400" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#EAE5D9]">
              <Link
                href="/reservation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-[#C06041] text-white text-center font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Réserver une Table</span>
              </Link>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full py-2.5 rounded-xl border border-[#DFD7C7] bg-white text-[#1C1917] text-center font-medium text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C06041]" />
                <span>Appeler {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
