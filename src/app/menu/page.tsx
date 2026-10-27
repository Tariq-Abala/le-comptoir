"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Utensils,
  Search,
  Filter,
  Plus,
  Sparkles,
  Leaf,
  Wine,
  ShieldCheck,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DishDetailModal from "@/components/DishDetailModal";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import { MENU_ITEMS, MenuItem } from "@/data/restaurant";

export default function MenuPage() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [dietaryFilter, setDietaryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Cart actions
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

  // Filtered dishes
  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((dish) => {
      // Category filter
      if (selectedCategory !== "all" && dish.category !== selectedCategory) {
        return false;
      }
      // Dietary filter
      if (dietaryFilter !== "all" && !dish.dietary.includes(dietaryFilter as any)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        const matchesIngredients = dish.ingredients.some((ing) =>
          ing.toLowerCase().includes(query)
        );
        const matchesProvenance = dish.provenance.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesIngredients && !matchesProvenance) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  const categories = [
    { id: "all", label: "Toute la Carte" },
    { id: "starters", label: "Entrées Gourmandes" },
    { id: "mains", label: "Plats Signatures" },
    { id: "burgers", label: "Burgers & Sandwiches" },
    { id: "desserts", label: "Douceurs d'Auteur" },
    { id: "drinks", label: "Mocktails & Boissons" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1917] flex flex-col font-sans">
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-[11px] uppercase tracking-widest text-[#C06041] font-bold font-sans">
            La Carte des Saisons • 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1917]">
            Une Cuisine de Terroir &amp; de Passion
          </h1>
          <p className="text-xs sm:text-sm text-[#78716C] max-w-xl mx-auto leading-relaxed">
            Tous nos plats sont cuisinés minute à partir de produits frais non transformés.
            Filtrez par catégorie ou préférences alimentaires pour composer votre repas.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-3xl border border-[#DFD7C7] p-5 sm:p-6 mb-10 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher (truffe, burrata, agneau, saumon...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041]"
              />
            </div>

            {/* Dietary pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              <span className="text-[11px] font-semibold text-[#78716C] mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" />
                <span>Régime :</span>
              </span>
              {[
                { id: "all", label: "Tous" },
                { id: "VG", label: "Végétarien (VG)" },
                { id: "GF", label: "Sans Gluten (GF)" },
                { id: "BIO", label: "Bio / Terroir" },
                { id: "CHEF", label: "Signature" },
              ].map((diet) => (
                <button
                  key={diet.id}
                  onClick={() => setDietaryFilter(diet.id)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                    dietaryFilter === diet.id
                      ? "bg-[#C06041] text-white font-semibold"
                      : "bg-[#FAF9F5] text-[#57534E] hover:bg-stone-100 border border-[#DFD7C7]"
                  }`}
                >
                  {diet.label}
                </button>
              ))}
            </div>
          </div>

          {/* Categories bar */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#EAE5D9]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#1C1917] text-white shadow-xs"
                    : "bg-[#FAF9F5] text-[#57534E] hover:text-black hover:bg-stone-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dish Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#DFD7C7] p-8 space-y-3">
            <Utensils className="w-10 h-10 text-stone-300 mx-auto" />
            <h3 className="font-serif font-bold text-lg text-[#1C1917]">
              Aucun plat ne correspond à vos filtres
            </h3>
            <p className="text-xs text-[#78716C]">
              Essayez de réinitialiser la recherche textuelle ou le filtre de régime alimentaire.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setDietaryFilter("all");
                setSelectedCategory("all");
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-[#C06041] text-white text-xs font-semibold"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className="bg-white rounded-3xl border border-[#DFD7C7] overflow-hidden shadow-xs group cursor-pointer hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {dish.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C06041] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {dish.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-sm font-serif font-bold text-xs text-[#1C1917] shadow-sm">
                    {dish.price} MAD
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#C06041]">
                        {dish.categoryName}
                      </span>
                      <div className="flex gap-1">
                        {dish.dietary.map((d) => (
                          <span
                            key={d}
                            className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-stone-100 text-stone-600"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-[#1C1917] group-hover:text-[#C06041] transition-colors leading-snug">
                      {dish.name}
                    </h3>

                    <p className="text-xs text-[#78716C] leading-relaxed line-clamp-2">
                      {dish.description}
                    </p>
                  </div>

                  {/* Footer card */}
                  <div className="pt-3 border-t border-[#EAE5D9] flex items-center justify-between">
                    <span className="text-[11px] text-[#5A6B47] font-medium truncate max-w-[170px]">
                      {dish.provenance}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(dish, 1);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-[#FAF9F5] border border-[#DFD7C7] hover:border-[#C06041] hover:text-[#C06041] text-[#1C1917] text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs"
                    >
                      <Plus className="w-3.5 h-3.5 text-[#C06041]" />
                      <span>Ajouter</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

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
