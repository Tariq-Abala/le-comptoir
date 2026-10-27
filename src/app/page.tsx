"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Utensils,
  Clock,
  MapPin,
  Phone,
  Calendar,
  Sparkles,
  Award,
  ChevronRight,
  ArrowRight,
  Plus,
  Heart,
  CheckCircle2,
  ShieldCheck,
  Wine,
  Leaf,
  MessageCircle,
  Eye,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DishDetailModal from "@/components/DishDetailModal";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import ReservationSection from "@/components/ReservationSection";
import {
  MENU_ITEMS,
  MenuItem,
  RESTAURANT_INFO,
} from "@/data/restaurant";

export default function HomePage() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("starters");

  // Cart operations
  const handleAddToCart = (dish: MenuItem, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { dish, quantity }];
    });
  };

  const handleUpdateQuantity = (dishId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.dish.id === dishId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (dishId: string) => {
    setCartItems((prev) => prev.filter((item) => item.dish.id !== dishId));
  };

  const handleClearCart = () => setCartItems([]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const featuredDishes = MENU_ITEMS.filter((item) => item.isPopular);
  const tabDishes = MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1917] flex flex-col font-sans">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* HERO SECTION (Inspired by the editorial Plate aesthetic) */}
        <section className="pt-8 pb-16 lg:pt-14 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block text-[11px] uppercase tracking-widest text-[#C06041] font-bold px-3 py-1 rounded-full bg-[#C06041]/10 border border-[#C06041]/20">
              A Cozy Corner for Modern Taste • Casablanca Gauthier
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1C1917] tracking-tight leading-[1.12]">
              L&apos;Art du Goût dans Chaque Assiette
            </h1>

            <p className="text-xs sm:text-sm text-[#78716C] max-w-xl mx-auto leading-relaxed">
              Des créations fraîches et sincères confectionnées avec les plus beaux terroirs du Maroc.
              Une bistronomie vivante et généreuse à partager dans un cadre lumineux.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/reservation"
                className="px-6 py-3 rounded-2xl bg-[#C06041] hover:bg-[#A24B30] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-[#C06041]/25 transition-all hover:scale-[1.02]"
              >
                Réserver une Table
              </Link>
              <Link
                href="/menu"
                className="px-6 py-3 rounded-2xl border border-[#DFD7C7] bg-white text-[#1C1917] hover:bg-[#FAF9F5] hover:border-[#C06041] font-semibold text-xs sm:text-sm transition-all"
              >
                Consulter la Carte
              </Link>
            </div>
          </div>

          {/* Large Hero Photography Container (like reference image) */}
          <div className="mt-10 sm:mt-14 relative w-full h-[320px] sm:h-[460px] lg:h-[540px] rounded-3xl overflow-hidden shadow-xl border border-[#EAE5D9]">
            <Image
              src="/images/hero-table.jpg"
              alt="Table bistronomique garnie au Comptoir Bistro Casablanca"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            {/* Soft overlay gradient at bottom */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#EAE5D9]">
                  Arrivage Quotidien • Produits Bio &amp; Pêche Côtière
                </span>
                <p className="font-serif font-bold text-lg sm:text-xl">
                  Le Comptoir Bistro Casablanca
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30 text-white font-medium">
                  28, Rue Jules Ferry • Quartier Gauthier
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3 PILLARS VALUES STRIP */}
        <section className="py-12 border-y border-[#EAE5D9] bg-[#F5F2EB]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-white border border-[#EAE5D9] shadow-2xs space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#5A6B47]/10 text-[#5A6B47] flex items-center justify-center font-bold">
                  <Leaf className="w-5 h-5 text-[#5A6B47]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#1C1917]">
                  Terroirs &amp; Producteurs Locaux
                </h3>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Figues de Taounate, safran pur de Taliouine AOP, agneau d&apos;alpage de l&apos;Atlas et arrivage quotidien de la criée atlantique.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#EAE5D9] shadow-2xs space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#C06041]/10 text-[#C06041] flex items-center justify-center font-bold">
                  <Utensils className="w-5 h-5 text-[#C06041]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#1C1917]">
                  Cuisine Ouverte &amp; Geste Précis
                </h3>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Cuissons douces de 14 heures à basse température, jus réduits à l&apos;ancienne et assaisonnements vifs au poivre sauvage et combawa.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#EAE5D9] shadow-2xs space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#C06041]/10 text-[#C06041] flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-[#C06041]" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#1C1917]">
                  L&apos;Écrin Lumineux de Gauthier
                </h3>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Murs à la chaux ivoire, banquettes terracotta confortables et terrasse végétale ombragée pour vos déjeuners et dîners d&apos;affaires.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL MENU SHOWCASE (Exact split structure from reference image) */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#C06041] font-bold font-sans">
                Sélection du Chef
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] mt-1">
                La Carte des Saisons
              </h2>
              <p className="text-xs sm:text-sm text-[#78716C] mt-1.5 max-w-md">
                Chaque recette est pensée pour sublimer les récoltes du moment avec élégance et gourmandise.
              </p>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-[#EAE5D9]/60 border border-[#DFD7C7]">
              {[
                { id: "starters", label: "Entrées" },
                { id: "mains", label: "Plats Signatures" },
                { id: "burgers", label: "Burgers" },
                { id: "desserts", label: "Desserts" },
                { id: "drinks", label: "Mocktails" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-white text-[#1C1917] font-semibold shadow-xs"
                      : "text-[#78716C] hover:text-[#1C1917]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Split Layout: Left Menu List, Right Featured Image Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Menu Items List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white rounded-3xl border border-[#DFD7C7] p-6 sm:p-8 shadow-xs divide-y divide-[#EAE5D9]">
                <div className="pb-4 mb-2 flex items-center justify-between">
                  <h3 className="font-serif font-bold text-xl text-[#1C1917] capitalize">
                    {activeTab === "starters" && "Entrées & Assiettes à Partager"}
                    {activeTab === "mains" && "Plats Signatures & Grillades"}
                    {activeTab === "burgers" && "Burgers & Sandwiches Gourmets"}
                    {activeTab === "desserts" && "Douceurs & Desserts d'Auteur"}
                    {activeTab === "drinks" && "Mixologie Botanique & Boissons"}
                  </h3>
                  <Link
                    href="/menu"
                    className="text-xs text-[#C06041] hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>Voir tout le menu</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {tabDishes.map((dish) => (
                  <div
                    key={dish.id}
                    className="py-4 first:pt-2 last:pb-0 flex items-start justify-between gap-4 group cursor-pointer"
                    onClick={() => setSelectedDish(dish)}
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-serif font-bold text-base text-[#1C1917] group-hover:text-[#C06041] transition-colors">
                          {dish.name}
                        </h4>
                        {dish.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#C06041]/10 text-[#C06041] border border-[#C06041]/20">
                            {dish.badge}
                          </span>
                        )}
                        {dish.dietary.map((d) => (
                          <span
                            key={d}
                            className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-stone-100 text-stone-600"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-[#78716C] leading-relaxed line-clamp-2">
                        {dish.description}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="font-serif font-bold text-sm text-[#1C1917]">
                        {dish.price} MAD
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(dish, 1);
                        }}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF9F5] border border-[#DFD7C7] hover:border-[#C06041] hover:text-[#C06041] text-[#1C1917] text-[11px] font-semibold flex items-center gap-1 transition-all"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Ajouter</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Photo Cards (Like reference image) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Card 1 */}
              <div
                onClick={() => setSelectedDish(MENU_ITEMS[0])}
                className="bg-white rounded-3xl border border-[#DFD7C7] overflow-hidden shadow-xs group cursor-pointer hover:shadow-md transition-all"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src="/images/burrata.jpg"
                    alt="Burratina d'Essaouira aux figues rôties"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#C06041] text-[10px] font-bold uppercase">
                    Coup de cœur
                  </span>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#1C1917]">
                      Burratina &amp; Figues Rôties
                    </h4>
                    <p className="text-xs text-[#78716C]">Tomates confites &amp; pesto minute</p>
                  </div>
                  <span className="font-serif font-bold text-sm text-[#C06041]">
                    125 MAD
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div
                onClick={() => setSelectedDish(MENU_ITEMS[1])}
                className="bg-white rounded-3xl border border-[#DFD7C7] overflow-hidden shadow-xs group cursor-pointer hover:shadow-md transition-all"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src="/images/cauliflower.jpg"
                    alt="Choux-Fleurs Rôtis aux Épices Douces"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#5A6B47] text-[10px] font-bold uppercase">
                    100% Végétarien &amp; Bio
                  </span>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#1C1917]">
                      Choux-Fleurs Rôtis aux Épices
                    </h4>
                    <p className="text-xs text-[#78716C]">Cumin beldi &amp; aïoli doux</p>
                  </div>
                  <span className="font-serif font-bold text-sm text-[#C06041]">
                    85 MAD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESTAURANT SPACES SHOWCASE (Salle, Terrasse, Chef) */}
        <section className="py-16 bg-[#F5F2EB]/50 border-y border-[#EAE5D9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[11px] uppercase tracking-widest text-[#C06041] font-bold font-sans">
                Atmosphères &amp; Espaces
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917]">
                Un Cadre Conçu pour la Convivialité
              </h2>
              <p className="text-xs sm:text-sm text-[#78716C]">
                Découvrez nos différents espaces à l&apos;architecture organique et aux matières naturelles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Space 1: Dining Room */}
              <div className="bg-white rounded-3xl border border-[#DFD7C7] overflow-hidden shadow-xs group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/images/interior-dining.jpg"
                    alt="Salle principale aux arches et banquettes terracotta"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#C06041] font-bold">
                    Intérieur Feutré
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#1C1917]">
                    La Salle aux Arches Terracotta
                  </h3>
                  <p className="text-xs text-[#78716C] leading-relaxed">
                    Banquettes velours terracotta, murs à la chaux claire et suspensions dorées pour des déjeuners sereins et des dîners confidentiels.
                  </p>
                </div>
              </div>

              {/* Space 2: Terrace */}
              <div className="bg-white rounded-3xl border border-[#DFD7C7] overflow-hidden shadow-xs group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/images/terrace.jpg"
                    alt="Terrasse végétalisée ombragée de Gauthier"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#5A6B47] font-bold">
                    Plein Air &amp; Nature
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#1C1917]">
                    La Terrasse Végétale Gauthier
                  </h3>
                  <p className="text-xs text-[#78716C] leading-relaxed">
                    Tables en marbre blanc ombragées par les bougainvilliers en fleurs et orangers. Chauffée l&apos;hiver et brumisée l&apos;été.
                  </p>
                </div>
              </div>

              {/* Space 3: Open Kitchen & Chef */}
              <div className="bg-white rounded-3xl border border-[#DFD7C7] overflow-hidden shadow-xs group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/images/chef.jpg"
                    alt="Chef Sarah dressant une assiette gastronomique"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#C06041] font-bold">
                    Savoir-Faire Artisanal
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#1C1917]">
                    L&apos;Équipe &amp; la Cuisine Ouverte
                  </h3>
                  <p className="text-xs text-[#78716C] leading-relaxed">
                    Une brigade passionnée qui transforme chaque produit brut en émotion gustative, sous vos yeux depuis la table d&apos;hôtes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE TABLE RESERVATION SECTION */}
        <ReservationSection />

        {/* LOCATION, OPENING HOURS & ACCESS INFO */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#DFD7C7] p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-[11px] uppercase tracking-widest text-[#C06041] font-bold font-sans">
                Accès &amp; Commodités
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917]">
                Nous Trouver à Casablanca
              </h2>
              <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
                Niché dans le quartier vibrant et paisible de Gauthier, Le Comptoir Bistro vous accueille du mardi au dimanche midi et soir.
              </p>

              <div className="space-y-3 text-xs text-[#57534E]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C06041] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C1917] block">Adresse du Bistro :</strong>
                    <span>{RESTAURANT_INFO.address}, {RESTAURANT_INFO.city}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C06041] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C1917] block">Services de Dégustation :</strong>
                    <span>Mardi - Dimanche : Déjeuner (12h-15h30) &amp; Dîner (19h30-23h30)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#5A6B47] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C1917] block">Service Voiturier Dédié :</strong>
                    <span>Prise en charge gracieuse de votre véhicule dès votre arrivée.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="px-5 py-2.5 rounded-xl border border-[#DFD7C7] bg-[#FAF9F5] hover:bg-stone-100 text-[#1C1917] text-xs font-semibold flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C06041]" />
                  <span>Appeler le Bistro</span>
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(
                    "Bonjour Le Comptoir, je souhaite obtenir l'itinéraire ou des informations."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Contacter sur WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Visual map & atmosphere card */}
            <div className="relative h-80 rounded-2xl overflow-hidden border border-[#DFD7C7] bg-stone-100 shadow-inner">
              <Image
                src="/images/terrace.jpg"
                alt="Ambiance extérieure du restaurant Le Comptoir"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300">
                  Ouvert Aujourd&apos;hui
                </span>
                <p className="font-serif font-bold text-lg">Quartier Gauthier • Casablanca</p>
                <p className="text-xs text-white/80">Angle Rue Jules Ferry &amp; Rue d&apos;Ifrane</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Dish Detail Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={(dish, qty) => handleAddToCart(dish, qty)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
