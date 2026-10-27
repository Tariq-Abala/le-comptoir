"use client";

import React, { useState } from "react";
import {
  Utensils,
  Clock,
  MapPin,
  Phone,
  Calendar,
  Sparkles,
  Users,
  Award,
  ChevronRight,
  Heart,
  CheckCircle2,
  Flame,
  Coffee,
  Wine,
  MessageCircle,
  Star,
  Sun,
  Moon,
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: "entrees" | "plats" | "viandes" | "mer" | "desserts" | "boissons";
  categoryName: string;
  price: string;
  description: string;
  badge?: string;
  provenance: string;
  isVegetarian?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "m-1",
    name: "Burratina Crémeuse & Tomates d'Essaouira",
    category: "entrees",
    categoryName: "Entrées",
    price: "125 MAD",
    description: "Burrata artisanale, réduction balsamique aux figues rôties de Taounate, pignons de pin torréfiés et pesto basilic frais.",
    badge: "Coup de Cœur",
    provenance: "Tomates anciennes d'Essaouira",
    isVegetarian: true,
  },
  {
    id: "m-2",
    name: "Carpaccio de Loup de Mer au Citron Caviar",
    category: "entrees",
    categoryName: "Entrées",
    price: "145 MAD",
    description: "Fines lamelles de bar de ligne, huile d'olive vierge d'Ouezzane, émulsion yuzu et éclats de fleur de sel de Guérande.",
    provenance: "Criée de Mehdia du matin",
  },
  {
    id: "m-3",
    name: "Souris d'Agneau Confite au Miel & Safran",
    category: "plats",
    categoryName: "Plats Signatures",
    price: "240 MAD",
    description: "Cuisson basse température 14 heures, jus corsé au safran pur de Taliouine, mousseline de patates douces fumées et amandes effilées.",
    badge: "Plat Signature",
    provenance: "Agneau fermier du Moyen Atlas",
  },
  {
    id: "m-4",
    name: "Pavé de Saumon Sauvage & Risotto Crémeux",
    category: "mer",
    categoryName: "Pêche & Marée",
    price: "215 MAD",
    description: "Saumon rôti unilatéral à la peau croustillante, risotto aux asperges vertes, parmesan 24 mois et émulsion aneth-citron vert.",
    provenance: "Arrivage journalier atlantique",
  },
  {
    id: "m-5",
    name: "Filet de Bœuf Black Angus Façon Rossini",
    category: "viandes",
    categoryName: "Viandes Nobles",
    price: "290 MAD",
    description: "Cœur de filet tendre, escalope de foie gras poêlée minute, sauce truffe noire d'Italie et écrasé de pommes de terre de montagne.",
    badge: "Exception",
    provenance: "Viande d'origine certifiée",
  },
  {
    id: "m-6",
    name: "Pastilla Croustillante au Lait d'Amande & Fleur d'Oranger",
    category: "desserts",
    categoryName: "Desserts",
    price: "85 MAD",
    description: "Feuilles de ouarka aériennes caramélisées, crème légère infusée à l'eau de fleur d'oranger de Fès et pistaches d'Iran concassées.",
    badge: "Tradition Réinventée",
    provenance: "Fleur d'oranger artisanale de Fès",
    isVegetarian: true,
  },
  {
    id: "m-7",
    name: "Fondant Chocolat Valrhona 70% & Cœur Coulant Praliné",
    category: "desserts",
    categoryName: "Desserts",
    price: "95 MAD",
    description: "Chocolat grand cru noir Guanaja, glace artisanale à la vanille de Madagascar bourbon et crumble noisettes torréfiées.",
    provenance: "Chocolat Valrhona de France",
    isVegetarian: true,
  },
  {
    id: "m-8",
    name: "Mocktail Signature Jardin Majorelle",
    category: "boissons",
    categoryName: "Boissons & Cocktails",
    price: "65 MAD",
    description: "Jus de grenade fraîche pressée, menthe poivrée froissée, purée de passion sauvage, eau gazeuse et bitter floral maison.",
    provenance: "Fruits frais pressés minute",
    isVegetarian: true,
  },
];

export default function LeComptoirPage() {
  // Theme state: FALSE = Light Mode (Default as requested by user), TRUE = Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [activeMenuTab, setActiveMenuTab] = useState<string>("all");
  const [selectedAmbiance, setSelectedAmbiance] = useState("Salle Principale (Atmosphère feutrée)");
  const [serviceType, setServiceType] = useState("diner");
  const [guestsCount, setGuestsCount] = useState("2");
  const [resDate, setResDate] = useState("2026-11-03");
  const [resTime, setResTime] = useState("20:30");
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestNotes, setGuestNotes] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const filteredMenu =
    activeMenuTab === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeMenuTab);

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;
    const ref = "LC-" + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(ref);
    setBookingConfirmed(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? "bg-[#0C0A09] text-[#FDFBF7] selection:bg-[#D97706]/30 selection:text-white" 
        : "bg-[#FDFBF7] text-[#1C1917] selection:bg-[#D97706]/20 selection:text-[#1C1917]"
    }`}>
      {/* Top Notice */}
      <div className={`py-2 px-4 text-xs border-b transition-colors ${
        isDarkMode
          ? "bg-[#181412] border-[#D97706]/20 text-[#A8A29E]"
          : "bg-[#F5EFE6] border-amber-200/60 text-[#5C5243]"
      }`}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D97706]"></span>
            <span className={`font-semibold ${isDarkMode ? "text-white" : "text-[#1C1917]"}`}>
              Bistro Gastronomique — Casablanca Quartier Gauthier
            </span>
            <span className="hidden sm:inline text-amber-600/40">|</span>
            <span className="hidden sm:inline">Service Déjeuner 12h00 - 15h30 • Dîner 19h30 - 23h30</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="tel:+212522998877" className="flex items-center gap-1 hover:text-[#D97706] transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 text-[#D97706]" />
              <span>+212 522 99 88 77</span>
            </a>
            <span className="text-stone-300">|</span>
            <span className="text-[#B45309] dark:text-[#D97706] font-bold">Service Voiturier Inclus</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
        isDarkMode 
          ? "bg-[#0C0A09]/95 border-[#D97706]/15" 
          : "bg-white/95 border-stone-200 shadow-xs"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D97706] to-[#B45309] flex items-center justify-center text-white shadow-md">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xl font-serif tracking-widest font-bold ${isDarkMode ? "text-[#FDFBF7]" : "text-[#1C1917]"}`}>
                  LE COMPTOIR
                </span>
                <span className="text-[10px] tracking-widest px-1.5 py-0.5 rounded bg-amber-100 text-[#B45309] dark:bg-[#D97706]/20 dark:text-[#D97706] font-mono font-bold">
                  BISTRO
                </span>
              </div>
              <p className={`text-[11px] uppercase tracking-wider font-sans ${isDarkMode ? "text-[#A8A29E]" : "text-[#78716C]"}`}>
                Gastronomie de Terroir & Vins
              </p>
            </div>
          </div>

          <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${isDarkMode ? "text-[#A8A29E]" : "text-[#57534E]"}`}>
            <a href="#menu" className="hover:text-[#D97706] transition-colors">La Carte & Menus</a>
            <a href="#chef" className="hover:text-[#D97706] transition-colors">Le Chef</a>
            <a href="#reserver" className="hover:text-[#D97706] transition-colors">Réservations</a>
            <a href="#contact" className="hover:text-[#D97706] transition-colors">Accès & Contact</a>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button (Light / Dark) */}
            <button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isDarkMode 
                  ? "bg-[#181412] text-amber-300 border-amber-500/30 hover:bg-[#201B17]" 
                  : "bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200"
              }`}
              title={isDarkMode ? "Passer en mode clair (Blanc)" : "Passer en mode sombre"}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Clair</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-stone-600" />
                  <span className="hidden sm:inline">Sombre</span>
                </>
              )}
            </button>

            <a
              href="https://wa.me/212600000000?text=Bonjour%20Le%20Comptoir,%20je%20souhaite%20réserver%20une%20table"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-400 dark:border-emerald-800/40 text-xs font-semibold hover:brightness-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#reserver"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#D97706] to-[#B45309] text-white text-xs font-bold shadow-md hover:brightness-110 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Réserver une Table</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 overflow-hidden">
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] rounded-full blur-[140px] pointer-events-none ${
          isDarkMode ? "bg-[#D97706]/10" : "bg-amber-300/15"
        }`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-medium mb-6 ${
              isDarkMode 
                ? "bg-[#181412] border-[#D97706]/30 text-[#D97706]" 
                : "bg-amber-50 border-amber-200 text-[#B45309]"
            }`}>
              <Flame className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Cuisine Bistronomique d’Auteur</span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-tight sm:leading-tight ${
              isDarkMode ? "text-[#FDFBF7]" : "text-[#1C1917]"
            }`}>
              L’Art de la Table, <br />
              <span className="italic font-normal bg-gradient-to-r from-[#B45309] via-[#D97706] to-[#F59E0B] bg-clip-text text-transparent">
                Entre Terroir et Audace.
              </span>
            </h1>

            <p className={`mt-6 text-base sm:text-lg leading-relaxed ${
              isDarkMode ? "text-[#A8A29E]" : "text-[#57534E]"
            }`}>
              Une escale culinaire au cœur de Casablanca. Des viandes sélectionnées maturées sur place,
              les arrivages quotidiens des pêcheurs de l’Atlantique, et les épices nobles des producteurs locaux.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#reserver"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#92400E] text-white font-bold text-sm shadow-md hover:scale-[1.02] transition-transform"
              >
                <Calendar className="w-4 h-4" />
                <span>Réserver en Ligne</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#menu"
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border font-semibold text-sm transition-all ${
                  isDarkMode 
                    ? "bg-[#181412] border-[#D97706]/30 text-[#FDFBF7] hover:bg-[#231D1A]" 
                    : "bg-white border-stone-300 text-stone-800 hover:bg-stone-50 shadow-xs"
                }`}
              >
                <Utensils className="w-4 h-4 text-[#D97706]" />
                <span>Consulter la Carte</span>
              </a>
            </div>

            {/* Metrics */}
            <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t ${
              isDarkMode ? "border-[#D97706]/20" : "border-stone-200"
            }`}>
              <div className={`p-4 rounded-xl border ${isDarkMode ? "bg-[#181412] border-stone-800" : "bg-white border-stone-200 shadow-xs"}`}>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#B45309]">100%</div>
                <div className={`text-xs mt-1 ${isDarkMode ? "text-[#A8A29E]" : "text-[#78716C]"}`}>Produits Frais & Fait Maison</div>
              </div>
              <div className={`p-4 rounded-xl border ${isDarkMode ? "bg-[#181412] border-stone-800" : "bg-white border-stone-200 shadow-xs"}`}>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#B45309]">4.9 / 5</div>
                <div className={`text-xs mt-1 ${isDarkMode ? "text-[#A8A29E]" : "text-[#78716C]"}`}>850+ Critiques Clients</div>
              </div>
              <div className={`p-4 rounded-xl border ${isDarkMode ? "bg-[#181412] border-stone-800" : "bg-white border-stone-200 shadow-xs"}`}>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#B45309]">3 Salles</div>
                <div className={`text-xs mt-1 ${isDarkMode ? "text-[#A8A29E]" : "text-[#78716C]"}`}>Terrasse, Salon Privé & Salle</div>
              </div>
              <div className={`p-4 rounded-xl border ${isDarkMode ? "bg-[#181412] border-stone-800" : "bg-white border-stone-200 shadow-xs"}`}>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#B45309]">2026</div>
                <div className={`text-xs mt-1 ${isDarkMode ? "text-[#A8A29E]" : "text-[#78716C]"}`}>Sélection Tables Remarquables</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className={`py-20 border-y transition-colors ${
        isDarkMode ? "bg-[#120F0D] border-[#D97706]/15" : "bg-[#F7F4EC] border-stone-200"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-bold mb-3 ${
              isDarkMode ? "bg-[#D97706]/15 text-[#D97706]" : "bg-amber-100 text-[#B45309]"
            }`}>
              <span>CARTE DES SAISONS</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-serif font-bold ${isDarkMode ? "text-[#FDFBF7]" : "text-[#1C1917]"}`}>
              Les Créations du Chef
            </h2>
            <p className={`text-xs sm:text-sm mt-2 ${isDarkMode ? "text-[#A8A29E]" : "text-[#57534E]"}`}>
              Chaque plat est élaboré minute à partir d’ingrédients rigoureusement sourcés auprès de producteurs locaux écoresponsables.
            </p>
          </div>

          {/* Menu Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: "all", label: "Toute la Carte" },
              { id: "entrees", label: "Entrées Gourmandes" },
              { id: "plats", label: "Plats Signatures" },
              { id: "viandes", label: "Viandes & Grill" },
              { id: "mer", label: "Marée & Pêche" },
              { id: "desserts", label: "Desserts & Douceurs" },
              { id: "boissons", label: "Cocktails & Mocktails" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMenuTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeMenuTab === tab.id
                    ? "bg-[#D97706] text-white font-bold shadow-sm"
                    : isDarkMode 
                      ? "bg-[#1C1815] text-[#A8A29E] hover:text-[#FDFBF7] hover:bg-[#25201C] border border-stone-800" 
                      : "bg-white text-stone-700 hover:text-stone-900 hover:bg-stone-100 border border-stone-200 shadow-xs"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMenu.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between group ${
                  isDarkMode 
                    ? "bg-[#181412] border-stone-800 hover:border-[#D97706]/50 shadow-md" 
                    : "bg-white border-stone-200 hover:border-[#D97706] shadow-sm hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`text-base sm:text-lg font-serif font-bold group-hover:text-[#D97706] transition-colors ${
                          isDarkMode ? "text-[#FDFBF7]" : "text-[#1C1917]"
                        }`}>
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 text-[#B45309] dark:bg-[#D97706]/20 dark:text-[#D97706] border border-amber-200 dark:border-[#D97706]/30 font-semibold">
                            {item.badge}
                          </span>
                        )}
                        {item.isVegetarian && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40 font-semibold">
                            Végétarien
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-base sm:text-lg font-serif font-bold text-[#B45309] shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <p className={`text-xs leading-relaxed mt-2 ${isDarkMode ? "text-[#A8A29E]" : "text-[#57534E]"}`}>{item.description}</p>
                </div>

                <div className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] ${
                  isDarkMode ? "border-stone-800/80 text-[#A8A29E]" : "border-stone-100 text-stone-500"
                }`}>
                  <span className="italic">{item.provenance}</span>
                  <span className="font-mono text-[10px] text-stone-400">{item.categoryName}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section id="reserver" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-bold mb-3 ${
              isDarkMode ? "bg-[#D97706]/15 text-[#D97706]" : "bg-amber-100 text-[#B45309]"
            }`}>
              <Calendar className="w-3.5 h-3.5" />
              <span>RÉSERVATION IMMÉDIATE</span>
            </div>
            <h2 className={`text-3xl font-serif font-bold ${isDarkMode ? "text-[#FDFBF7]" : "text-[#1C1917]"}`}>
              Réserver Votre Table au Comptoir
            </h2>
            <p className={`text-xs sm:text-sm mt-2 ${isDarkMode ? "text-[#A8A29E]" : "text-[#57534E]"}`}>
              Confirmation instantanée par SMS. Pour les groupes de plus de 8 personnes, veuillez nous contacter directement.
            </p>
          </div>

          <div className={`rounded-2xl border p-6 sm:p-10 shadow-xl ${
            isDarkMode ? "bg-[#181412] border-[#D97706]/30" : "bg-white border-stone-200"
          }`}>
            {bookingConfirmed ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-serif font-bold ${isDarkMode ? "text-[#FDFBF7]" : "text-[#1C1917]"}`}>Réservation Confirmée !</h3>
                <div className={`p-4 rounded-xl max-w-md mx-auto text-xs text-left space-y-2 border ${
                  isDarkMode ? "bg-[#231D1A] border-stone-800" : "bg-stone-50 border-stone-200"
                }`}>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Numéro de réservation :</span>
                    <span className="font-mono font-bold text-[#B45309]">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Nom du convive :</span>
                    <span className="font-medium text-stone-900 dark:text-white">{guestName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Couverts :</span>
                    <span className="font-medium text-stone-900 dark:text-white">{guestsCount} personnes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Date & Heure :</span>
                    <span className="font-medium text-[#B45309]">{resDate} à {resTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Espace choisi :</span>
                    <span className="font-medium text-stone-900 dark:text-white">{selectedAmbiance}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setBookingConfirmed(false);
                      setGuestName("");
                      setGuestPhone("");
                    }}
                    className="px-5 py-2.5 rounded-lg bg-stone-100 dark:bg-[#25201C] text-stone-800 dark:text-[#FDFBF7] text-xs font-semibold hover:bg-stone-200"
                  >
                    Faire une autre réservation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleReservation} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? "text-[#A8A29E]" : "text-stone-700"}`}>Service</label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#D97706] ${
                        isDarkMode ? "bg-[#231D1A] border-stone-800 text-[#FDFBF7]" : "bg-stone-50 border-stone-200 text-stone-900"
                      }`}
                    >
                      <option value="dejeuner">Déjeuner (12:00 — 15:30)</option>
                      <option value="diner">Dîner (19:30 — 23:30)</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? "text-[#A8A29E]" : "text-stone-700"}`}>Nombre de Couverts</label>
                    <select
                      value={guestsCount}
                      onChange={(e) => setGuestsCount(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#D97706] ${
                        isDarkMode ? "bg-[#231D1A] border-stone-800 text-[#FDFBF7]" : "bg-stone-50 border-stone-200 text-stone-900"
                      }`}
                    >
                      <option value="1">1 Personne (Comptoir)</option>
                      <option value="2">2 Personnes</option>
                      <option value="3">3 Personnes</option>
                      <option value="4">4 Personnes</option>
                      <option value="5">5 Personnes</option>
                      <option value="6">6 Personnes</option>
                      <option value="8">8 Personnes</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? "text-[#A8A29E]" : "text-stone-700"}`}>Espace Souhaité</label>
                    <select
                      value={selectedAmbiance}
                      onChange={(e) => setSelectedAmbiance(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#D97706] ${
                        isDarkMode ? "bg-[#231D1A] border-stone-800 text-[#FDFBF7]" : "bg-stone-50 border-stone-200 text-stone-900"
                      }`}
                    >
                      <option value="Salle Principale (Atmosphère feutrée)">Salle Principale feutrée</option>
                      <option value="Terrasse Végétalisée Couverte">Terrasse Végétalisée</option>
                      <option value="Salon Privé VIP (Calme absolu)">Salon Privé VIP</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? "text-[#A8A29E]" : "text-stone-700"}`}>Date</label>
                    <input
                      type="date"
                      value={resDate}
                      onChange={(e) => setResDate(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#D97706] ${
                        isDarkMode ? "bg-[#231D1A] border-stone-800 text-[#FDFBF7]" : "bg-stone-50 border-stone-200 text-stone-900"
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? "text-[#A8A29E]" : "text-stone-700"}`}>Heure d’Arrivée</label>
                    <select
                      value={resTime}
                      onChange={(e) => setResTime(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#D97706] ${
                        isDarkMode ? "bg-[#231D1A] border-stone-800 text-[#FDFBF7]" : "bg-stone-50 border-stone-200 text-stone-900"
                      }`}
                    >
                      {serviceType === "dejeuner" ? (
                        <>
                          <option value="12:30">12:30</option>
                          <option value="13:00">13:00</option>
                          <option value="13:30">13:30</option>
                          <option value="14:00">14:00</option>
                        </>
                      ) : (
                        <>
                          <option value="19:30">19:30</option>
                          <option value="20:00">20:00</option>
                          <option value="20:30">20:30</option>
                          <option value="21:15">21:15</option>
                          <option value="22:00">22:00</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? "text-[#A8A29E]" : "text-stone-700"}`}>Téléphone (SMS) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="06 61 00 00 00"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#D97706] ${
                        isDarkMode ? "bg-[#231D1A] border-stone-800 text-[#FDFBF7]" : "bg-stone-50 border-stone-200 text-stone-900"
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? "text-[#A8A29E]" : "text-stone-700"}`}>Nom de la Réservation *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: M. Mehdi Kabbaj"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#D97706] ${
                        isDarkMode ? "bg-[#231D1A] border-stone-800 text-[#FDFBF7]" : "bg-stone-50 border-stone-200 text-stone-900"
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-2 ${isDarkMode ? "text-[#A8A29E]" : "text-stone-700"}`}>Demandes Particulières</label>
                    <input
                      type="text"
                      placeholder="Ex: Table près de la baie vitrée, anniversaire..."
                      value={guestNotes}
                      onChange={(e) => setGuestNotes(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#D97706] ${
                        isDarkMode ? "bg-[#231D1A] border-stone-800 text-[#FDFBF7]" : "bg-stone-50 border-stone-200 text-stone-900"
                      }`}
                    />
                  </div>
                </div>

                <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
                  isDarkMode ? "border-stone-800" : "border-stone-200"
                }`}>
                  <p className={`text-[11px] flex items-center gap-1.5 ${isDarkMode ? "text-[#A8A29E]" : "text-stone-500"}`}>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Table retenue pendant 20 minutes après l’horaire convenu.</span>
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-bold text-xs shadow-md hover:brightness-110 transition-all"
                  >
                    Confirmer la Réservation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className={`py-12 border-t transition-colors ${
        isDarkMode ? "bg-[#080706] border-[#D97706]/20" : "bg-[#F5EFE6] border-amber-200/50"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
            isDarkMode ? "border-stone-900" : "border-amber-200/60"
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D97706] flex items-center justify-center text-white font-bold">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className={`text-lg font-serif font-bold ${isDarkMode ? "text-[#FDFBF7]" : "text-[#1C1917]"}`}>LE COMPTOIR BISTRO</span>
                <p className={`text-[11px] ${isDarkMode ? "text-[#A8A29E]" : "text-[#78716C]"}`}>Casablanca Quartier Gauthier</p>
              </div>
            </div>

            <div className={`text-xs text-center md:text-right space-y-1 ${isDarkMode ? "text-[#A8A29E]" : "text-[#57534E]"}`}>
              <p className="font-semibold text-stone-900 dark:text-white">
                Développé par{" "}
                <a
                  href="https://tariqabala.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 dark:text-amber-400 hover:underline font-bold"
                >
                  Tariq Abala
                </a>
              </p>
              <p className="text-[11px] font-medium text-stone-700 dark:text-stone-300">
                Web Development &amp; Digital Solutions
              </p>
              <p className="text-[10px] text-stone-400 font-mono">
                Professional Websites • Business Applications • Custom Admin Panels
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-stone-700 dark:text-stone-300">© 2026 TARIQ ABALA. Tous droits réservés.</span>
              <span className="text-stone-400">•</span>
              <span>Le Comptoir Bistro Casablanca</span>
            </div>
            <div className="flex gap-6">
              <a href="#menu" className="hover:text-stone-900 dark:hover:text-stone-300">La Carte</a>
              <a href="#reserver" className="hover:text-stone-900 dark:hover:text-stone-300">Réservations</a>
              <a href="tel:+212522998877" className="hover:text-stone-900 dark:hover:text-stone-300">+212 522 99 88 77</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
