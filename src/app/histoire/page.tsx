"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Utensils,
  Leaf,
  Award,
  Sparkles,
  MapPin,
  Calendar,
  Heart,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer, { CartItem } from "@/components/CartDrawer";

export default function HistoirePage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1917] flex flex-col font-sans">
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-[11px] uppercase tracking-widest text-[#C06041] font-bold font-sans">
                Notre Histoire &amp; Philosophie
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1917] leading-tight">
                Une Bistronomie Éprise du Terroir Marocain
              </h1>
              <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
                Né de la volonté de célébrer la richesse des sols marocains à travers les codes contemporains de la bistronomie, Le Comptoir Bistro réunit l&apos;amour du beau produit, la générosité des tables d&apos;hôtes et la précision d&apos;une brigade passionnée.
              </p>
              <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
                Ici, point de fioritures superflues : chaque ingrédient raconte une région, chaque jus est réduit patiemment et chaque cuisson respecte la texture originelle de la matière.
              </p>

              <div className="pt-2 flex items-center gap-6">
                <div>
                  <span className="font-serif font-bold text-2xl text-[#C06041]">2021</span>
                  <p className="text-[11px] text-[#78716C]">Création à Gauthier</p>
                </div>
                <div className="h-8 w-px bg-[#DFD7C7]" />
                <div>
                  <span className="font-serif font-bold text-2xl text-[#C06041]">100%</span>
                  <p className="text-[11px] text-[#78716C]">Viandes Halal &amp; Bio</p>
                </div>
                <div className="h-8 w-px bg-[#DFD7C7]" />
                <div>
                  <span className="font-serif font-bold text-2xl text-[#C06041]">14h</span>
                  <p className="text-[11px] text-[#78716C]">Cuisson basse température</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 sm:h-[460px] rounded-3xl overflow-hidden border border-[#DFD7C7] shadow-lg">
              <Image
                src="/images/chef.jpg"
                alt="Chef Sarah dans les cuisines du Comptoir Bistro"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Terroirs & Producteurs */}
        <section className="py-16 bg-[#F5F2EB]/60 border-y border-[#EAE5D9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[11px] uppercase tracking-widest text-[#5A6B47] font-bold font-sans">
                Cartographie des Saisons
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917]">
                Nos Producteurs Partenaires au Maroc
              </h2>
              <p className="text-xs sm:text-sm text-[#78716C]">
                Nous privilégions les circuits courts et les coopératives engagées dans l&apos;agriculture raisonnée.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#DFD7C7] space-y-2.5 shadow-2xs">
                <span className="text-[10px] font-mono font-bold uppercase text-[#C06041]">
                  Taliouine AOP
                </span>
                <h3 className="font-serif font-bold text-base text-[#1C1917]">
                  Le Safran Pur
                </h3>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Récolté à la main aux premières lueurs de l&apos;aube dans l&apos;Anti-Atlas, notre safran sublime le jus de cuisson de notre souris d&apos;agneau confite.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#DFD7C7] space-y-2.5 shadow-2xs">
                <span className="text-[10px] font-mono font-bold uppercase text-[#5A6B47]">
                  Essaouira &amp; Souss
                </span>
                <h3 className="font-serif font-bold text-base text-[#1C1917]">
                  Maraîchage Ancien
                </h3>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Tomates anciennes oubliées gorgées de soleil, avocats Hass fondants et herbes aromatiques cueillies le matin même.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#DFD7C7] space-y-2.5 shadow-2xs">
                <span className="text-[10px] font-mono font-bold uppercase text-[#C06041]">
                  Moyen Atlas
                </span>
                <h3 className="font-serif font-bold text-base text-[#1C1917]">
                  Élevage d&apos;Alpage
                </h3>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Agneaux nourris au thym et romarin sauvage des hauts plateaux, garantissant une chair d&apos;une tendreté et d&apos;une finesse incomparables.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#DFD7C7] space-y-2.5 shadow-2xs">
                <span className="text-[10px] font-mono font-bold uppercase text-[#5A6B47]">
                  Criée Atlantique
                </span>
                <h3 className="font-serif font-bold text-base text-[#1C1917]">
                  Pêche Côtière Durable
                </h3>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Bar de ligne, loup de mer et marée journalière sélectionnés auprès des marins-pêcheurs artisans selon les quotas saisonniers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* L'Architecture & Les Arches */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#DFD7C7] shadow-md order-2 lg:order-1">
              <Image
                src="/images/interior-dining.jpg"
                alt="Architecture intérieure du Comptoir Bistro"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 order-1 lg:order-2">
              <span className="text-[11px] uppercase tracking-widest text-[#C06041] font-bold font-sans">
                Design &amp; Matières Brutes
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917]">
                Un Écrin Minéral &amp; Végétal
              </h2>
              <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
                Conçu comme une maison d&apos;amis contemporaine, Le Comptoir associe le crépi à la chaux blanche, le velours de laine terracotta, le chêne massif clair et des luminaires en laiton chaud travaillés à la main.
              </p>
              <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
                Une lumière zénithale douce inonde les tables en journée, tandis que le soir venu, les bougies et abat-jours créent une intimité propice aux grandes tablées comme aux dîners discrets.
              </p>
              <div className="pt-2">
                <Link
                  href="/reservation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#C06041] text-white text-xs font-semibold shadow-md hover:bg-[#A24B30] transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Réserver une table dans nos espaces</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
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
