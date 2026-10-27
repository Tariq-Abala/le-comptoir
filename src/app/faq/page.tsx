"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Calendar,
  MessageCircle,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import { FAQ_ITEMS, RESTAURANT_INFO } from "@/data/restaurant";

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1917] flex flex-col font-sans">
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-[11px] uppercase tracking-widest text-[#C06041] font-bold font-sans">
            Foire Aux Questions
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1917]">
            Tout Ce Que Vous Devez Savoir
          </h1>
          <p className="text-xs sm:text-sm text-[#78716C]">
            Retrouvez ici les réponses aux interrogations les plus fréquentes concernant votre visite au Comptoir Bistro.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-[#DFD7C7] overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-stone-50/50 transition-colors"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#1C1917]">
                    {item.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#DFD7C7] flex items-center justify-center shrink-0 text-[#C06041]">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#78716C] leading-relaxed border-t border-[#EAE5D9]/70 pt-4 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Assistance Card */}
        <div className="mt-12 bg-white rounded-3xl border border-[#DFD7C7] p-8 text-center space-y-4 shadow-xs">
          <HelpCircle className="w-8 h-8 text-[#C06041] mx-auto" />
          <h3 className="font-serif font-bold text-xl text-[#1C1917]">
            Vous avez une autre question spécifique ?
          </h3>
          <p className="text-xs text-[#78716C] max-w-md mx-auto">
            Notre équipe en salle se tient à votre entière disposition pour tout renseignement particulier.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/reservation"
              className="px-6 py-2.5 rounded-xl bg-[#C06041] hover:bg-[#A24B30] text-white text-xs font-semibold shadow-md"
            >
              Réserver une Table
            </Link>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Poser sur WhatsApp</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
        onClearCart={() => setCartItems([])}
      />
    </div>
  );
}
