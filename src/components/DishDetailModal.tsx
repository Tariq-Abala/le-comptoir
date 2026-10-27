"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Plus,
  Minus,
  ShoppingBag,
  Sparkles,
  Leaf,
  ShieldCheck,
  Wine,
  MapPin,
  Check,
} from "lucide-react";
import { MenuItem } from "@/data/restaurant";

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onAddToCart: (dish: MenuItem, quantity: number) => void;
}

export default function DishDetailModal({
  dish,
  onClose,
  onAddToCart,
}: DishDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!dish) return null;

  const handleAdd = () => {
    onAddToCart(dish, quantity);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 900);
  };

  const getDietaryLabel = (code: string) => {
    switch (code) {
      case "VG":
        return { label: "Végétarien", color: "bg-emerald-50 text-emerald-800 border-emerald-200" };
      case "GF":
        return { label: "Sans Gluten", color: "bg-amber-50 text-amber-800 border-amber-200" };
      case "BIO":
        return { label: "Terroir Bio", color: "bg-lime-50 text-lime-800 border-lime-200" };
      case "CHEF":
        return { label: "Signature Chef", color: "bg-[#C06041]/10 text-[#C06041] border-[#C06041]/20" };
      default:
        return { label: code, color: "bg-stone-50 text-stone-700 border-stone-200" };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF9F5] rounded-3xl shadow-2xl border border-[#DFD7C7] overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-[#1C1917] hover:bg-white flex items-center justify-center shadow-md transition-transform hover:scale-110"
          aria-label="Fermer la vue détaillée"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Photograph */}
        <div className="md:w-1/2 relative min-h-[260px] md:min-h-[380px] bg-stone-100">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {dish.badge && (
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C06041] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
              {dish.badge}
            </span>
          )}
        </div>

        {/* Details Information */}
        <div className="md:w-1/2 p-6 sm:p-7 flex flex-col justify-between overflow-y-auto space-y-5">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#C06041] font-bold font-sans">
                  {dish.categoryName}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] leading-snug mt-0.5">
                  {dish.name}
                </h3>
              </div>
              <span className="text-lg font-serif font-bold text-[#C06041] whitespace-nowrap">
                {dish.price} MAD
              </span>
            </div>

            <p className="text-xs text-[#57534E] leading-relaxed">
              {dish.description}
            </p>

            {/* Dietary tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {dish.dietary.map((code) => {
                const info = getDietaryLabel(code);
                return (
                  <span
                    key={code}
                    className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${info.color}`}
                  >
                    {info.label}
                  </span>
                );
              })}
            </div>

            {/* Ingredients */}
            <div className="pt-2 border-t border-[#EAE5D9] space-y-1">
              <span className="text-[11px] font-bold text-[#1C1917] uppercase tracking-wider block">
                Ingrédients &amp; Composition :
              </span>
              <div className="flex flex-wrap gap-1">
                {dish.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] text-[#78716C] bg-white px-2 py-0.5 rounded-md border border-[#EAE5D9]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Provenance */}
            <div className="flex items-center gap-2 text-xs text-[#5A6B47] font-medium bg-[#5A6B47]/10 p-2.5 rounded-xl">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Sourcing : {dish.provenance}</span>
            </div>

            {/* Pairing note if exists */}
            {dish.pairing && (
              <div className="flex items-center gap-2 text-xs text-[#78716C] bg-[#FAF9F5] border border-[#DFD7C7] p-2 rounded-xl">
                <Wine className="w-3.5 h-3.5 text-[#C06041] shrink-0" />
                <span>Accord suggéré : {dish.pairing}</span>
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#EAE5D9] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1C1917]">
                Quantité souhaitée :
              </span>
              <div className="flex items-center gap-2 border border-[#DFD7C7] bg-white rounded-xl p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-lg hover:bg-stone-100 flex items-center justify-center text-stone-700"
                  aria-label="Diminuer la quantité"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-xs font-bold text-[#1C1917]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-lg hover:bg-stone-100 flex items-center justify-center text-stone-700"
                  aria-label="Augmenter la quantité"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              disabled={addedNotice}
              className={`w-full py-3 rounded-2xl text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all ${
                addedNotice
                  ? "bg-emerald-600 text-white"
                  : "bg-[#C06041] hover:bg-[#A24B30] text-white shadow-[#C06041]/25 hover:scale-[1.01]"
              }`}
            >
              {addedNotice ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Ajouté au Panier !</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Ajouter • {(dish.price * quantity).toLocaleString()} MAD</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
