"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  X,
  ChevronRight,
  Utensils,
  Maximize2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import { GALLERY_ITEMS, GalleryItem } from "@/data/restaurant";

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredGallery =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const categories = [
    { id: "all", label: "Toutes les Photos" },
    { id: "food", label: "Plats & Assiettes" },
    { id: "ambiance", label: "Salle & Arches" },
    { id: "terrace", label: "La Terrasse Végétale" },
    { id: "team", label: "Cuisine & Brigade" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1917] flex flex-col font-sans">
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C06041] font-bold font-sans">
            Instantanés &amp; Atmosphères
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1917]">
            La Galerie du Comptoir
          </h1>
          <p className="text-xs sm:text-sm text-[#78716C]">
            Plongez dans l&apos;univers chaleureux de notre restaurant à Casablanca Gauthier à travers nos plus beaux clichés.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#C06041] text-white shadow-md shadow-[#C06041]/20"
                  : "bg-white text-[#57534E] hover:bg-stone-50 border border-[#DFD7C7]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreviewItem(item)}
              className="group bg-white rounded-3xl border border-[#DFD7C7] overflow-hidden shadow-xs cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="relative h-64 w-full overflow-hidden bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#1C1917] flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#C06041] font-bold block">
                  {item.categoryName}
                </span>
                <h3 className="font-serif font-bold text-sm text-[#1C1917] truncate">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#78716C] line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white rounded-3xl border border-[#DFD7C7] p-8 max-w-xl mx-auto space-y-3 shadow-2xs">
          <Utensils className="w-8 h-8 text-[#C06041] mx-auto" />
          <h3 className="font-serif font-bold text-xl text-[#1C1917]">
            Vivez l&apos;Expérience en Vrai
          </h3>
          <p className="text-xs text-[#78716C]">
            Réservez votre table en quelques clics ou contactez notre équipe pour vos événements.
          </p>
          <Link
            href="/reservation"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#C06041] text-white text-xs font-semibold shadow-md hover:bg-[#A24B30] transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Réserver une Table</span>
          </Link>
        </div>
      </main>

      {/* Lightbox Modal */}
      {previewItem && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setPreviewItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FAF9F5] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 text-black flex items-center justify-center shadow-md hover:bg-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative h-96 sm:h-[480px] w-full">
              <Image
                src={previewItem.image}
                alt={previewItem.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 bg-white space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C06041] font-bold">
                {previewItem.categoryName}
              </span>
              <h3 className="font-serif font-bold text-xl text-[#1C1917]">
                {previewItem.title}
              </h3>
              <p className="text-xs text-[#78716C]">
                {previewItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

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
