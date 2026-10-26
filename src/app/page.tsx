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
    <div className="min-h-screen bg-[#0C0A09] text-[#FDFBF7] selection:bg-[#D97706]/30 selection:text-white">
      {/* Top Notice */}
      <div className="bg-[#181412] border-b border-[#D97706]/20 py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[#A8A29E]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D97706]"></span>
            <span className="text-[#FDFBF7] font-medium">Bistro Gastronomique — Casablanca Quartier Gauthier</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Service Déjeuner 12h00 - 15h30 • Dîner 19h30 - 23h30</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="tel:+212522998877" className="flex items-center gap-1 hover:text-[#D97706] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#D97706]" />
              <span>+212 522 99 88 77</span>
            </a>
            <span className="text-stone-700">|</span>
            <span className="text-[#D97706] font-semibold">Service Voiturier Inclus</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#0C0A09]/95 border-b border-[#D97706]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D97706] to-[#B45309] flex items-center justify-center text-[#0C0A09] shadow-lg shadow-[#D97706]/20">
              <Utensils className="w-6 h-6 text-[#0C0A09]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-serif tracking-widest text-[#FDFBF7]">LE COMPTOIR</span>
                <span className="text-[10px] tracking-widest px-1.5 py-0.5 rounded bg-[#D97706]/20 text-[#D97706] font-mono">
                  BISTRO
                </span>
              </div>
              <p className="text-[11px] text-[#A8A29E] tracking-wider uppercase font-sans">
                Gastronomie de Terroir & Vins
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-[#A8A29E]">
            <a href="#menu" className="hover:text-[#D97706] transition-colors">La Carte & Menus</a>
            <a href="#chef" className="hover:text-[#D97706] transition-colors">Le Chef & Philosophie</a>
            <a href="#ambiance" className="hover:text-[#D97706] transition-colors">Les Espaces</a>
            <a href="#avis" className="hover:text-[#D97706] transition-colors">Critiques</a>
            <a href="#contact" className="hover:text-[#D97706] transition-colors">Accès & Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/212600000000?text=Bonjour%20Le%20Comptoir,%20je%20souhaite%20réserver%20une%20table"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-xs font-semibold hover:bg-emerald-900/60"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#reserver"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#D97706] to-[#B45309] text-[#0C0A09] text-xs font-bold shadow-md shadow-[#D97706]/20 hover:brightness-110 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Réserver une Table</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#D97706]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181412] border border-[#D97706]/30 text-xs font-mono text-[#D97706] mb-6">
              <Flame className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Cuisine Bistronomique d’Auteur</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-[#FDFBF7] leading-tight sm:leading-tight">
              L’Art de la Table, <br />
              <span className="italic font-normal bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#FBBF24] bg-clip-text text-transparent">
                Entre Terroir et Audace.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#A8A29E] leading-relaxed">
              Une escale culinaire au cœur de Casablanca. Des viandes sélectionnées maturées sur place,
              les arrivages quotidiens des pêcheurs de l’Atlantique, et les épices nobles des producteurs locaux.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#reserver"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#B45309] text-[#0C0A09] font-bold text-sm shadow-xl shadow-[#D97706]/25 hover:scale-[1.02] transition-transform"
              >
                <Calendar className="w-4 h-4" />
                <span>Réserver en Ligne</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#181412] border border-[#D97706]/30 text-[#FDFBF7] font-semibold text-sm hover:bg-[#231D1A] transition-all"
              >
                <Utensils className="w-4 h-4 text-[#D97706]" />
                <span>Consulter la Carte</span>
              </a>
            </div>

            {/* Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-[#D97706]/20">
              <div className="p-4 rounded-xl bg-[#181412] border border-stone-800">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#D97706]">100%</div>
                <div className="text-xs text-[#A8A29E] mt-1">Produits Frais & Fait Maison</div>
              </div>
              <div className="p-4 rounded-xl bg-[#181412] border border-stone-800">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#D97706]">4.9 / 5</div>
                <div className="text-xs text-[#A8A29E] mt-1">850+ Critiques Clients</div>
              </div>
              <div className="p-4 rounded-xl bg-[#181412] border border-stone-800">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#D97706]">3 Salles</div>
                <div className="text-xs text-[#A8A29E] mt-1">Terrasse, Salon Privé & Salle</div>
              </div>
              <div className="p-4 rounded-xl bg-[#181412] border border-stone-800">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#D97706]">2026</div>
                <div className="text-xs text-[#A8A29E] mt-1">Sélection Tables Remarquables</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-[#120F0D] border-y border-[#D97706]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D97706]/15 text-xs font-mono text-[#D97706] mb-3">
              <span>CARTE DES SAISONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FDFBF7]">
              Les Créations du Chef
            </h2>
            <p className="text-[#A8A29E] text-xs sm:text-sm mt-2">
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
                    ? "bg-[#D97706] text-[#0C0A09] font-bold shadow-md shadow-[#D97706]/20"
                    : "bg-[#1C1815] text-[#A8A29E] hover:text-[#FDFBF7] hover:bg-[#25201C] border border-stone-800"
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
                className="p-6 rounded-2xl bg-[#181412] border border-stone-800 hover:border-[#D97706]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-serif font-bold text-[#FDFBF7] group-hover:text-[#D97706] transition-colors">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D97706]/20 text-[#D97706] border border-[#D97706]/30">
                            {item.badge}
                          </span>
                        )}
                        {item.isVegetarian && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                            Végétarien
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-base sm:text-lg font-serif font-bold text-[#D97706] shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#A8A29E] leading-relaxed mt-2">{item.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-[#A8A29E]">
                  <span className="italic">{item.provenance}</span>
                  <span className="font-mono text-[10px] text-stone-500">{item.categoryName}</span>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D97706]/15 text-xs font-mono text-[#D97706] mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>RÉSERVATION IMMÉDIATE</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#FDFBF7]">
              Réserver Votre Table au Comptoir
            </h2>
            <p className="text-[#A8A29E] text-xs sm:text-sm mt-2">
              Confirmation instantanée par SMS. Pour les groupes de plus de 8 personnes, veuillez nous contacter directement.
            </p>
          </div>

          <div className="rounded-2xl bg-[#181412] border border-[#D97706]/30 p-6 sm:p-10 shadow-2xl">
            {bookingConfirmed ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#FDFBF7]">Réservation Confirmée !</h3>
                <div className="p-4 rounded-xl bg-[#231D1A] max-w-md mx-auto text-xs text-left space-y-2 border border-stone-800">
                  <div className="flex justify-between">
                    <span className="text-[#A8A29E]">Numéro de réservation :</span>
                    <span className="font-mono font-bold text-[#D97706]">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A8A29E]">Nom du convive :</span>
                    <span className="font-medium text-[#FDFBF7]">{guestName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A8A29E]">Couverts :</span>
                    <span className="font-medium text-[#FDFBF7]">{guestsCount} personnes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A8A29E]">Date & Heure :</span>
                    <span className="font-medium text-[#D97706]">{resDate} à {resTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A8A29E]">Espace choisi :</span>
                    <span className="font-medium text-[#FDFBF7]">{selectedAmbiance}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setBookingConfirmed(false);
                      setGuestName("");
                      setGuestPhone("");
                    }}
                    className="px-5 py-2.5 rounded-lg bg-[#25201C] text-[#FDFBF7] text-xs font-semibold hover:bg-stone-800"
                  >
                    Faire une autre réservation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleReservation} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-[#A8A29E] mb-2">Service</label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#231D1A] border border-stone-800 text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D97706]"
                    >
                      <option value="dejeuner">Déjeuner (12:00 — 15:30)</option>
                      <option value="diner">Dîner (19:30 — 23:30)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A8A29E] mb-2">Nombre de Couverts</label>
                    <select
                      value={guestsCount}
                      onChange={(e) => setGuestsCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#231D1A] border border-stone-800 text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D97706]"
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
                    <label className="block text-xs font-medium text-[#A8A29E] mb-2">Espace Souhaité</label>
                    <select
                      value={selectedAmbiance}
                      onChange={(e) => setSelectedAmbiance(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#231D1A] border border-stone-800 text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D97706]"
                    >
                      <option value="Salle Principale (Atmosphère feutrée)">Salle Principale feutrée</option>
                      <option value="Terrasse Végétalisée Couverte">Terrasse Végétalisée</option>
                      <option value="Salon Privé VIP (Calme absolu)">Salon Privé VIP</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A8A29E] mb-2">Date</label>
                    <input
                      type="date"
                      value={resDate}
                      onChange={(e) => setResDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#231D1A] border border-stone-800 text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D97706]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A8A29E] mb-2">Heure d’Arrivée</label>
                    <select
                      value={resTime}
                      onChange={(e) => setResTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#231D1A] border border-stone-800 text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D97706]"
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
                    <label className="block text-xs font-medium text-[#A8A29E] mb-2">Téléphone (SMS) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="06 61 00 00 00"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#231D1A] border border-stone-800 text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D97706]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-[#A8A29E] mb-2">Nom de la Réservation *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: M. Mehdi Kabbaj"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#231D1A] border border-stone-800 text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D97706]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A8A29E] mb-2">Demandes Particulières (Allergies, Anniversaire...)</label>
                    <input
                      type="text"
                      placeholder="Ex: Table près de la baie vitrée, anniversaire..."
                      value={guestNotes}
                      onChange={(e) => setGuestNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#231D1A] border border-stone-800 text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D97706]"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-[#A8A29E] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Table retenue pendant 20 minutes après l’horaire convenu.</span>
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-[#D97706] to-[#B45309] text-[#0C0A09] font-bold text-xs shadow-lg shadow-[#D97706]/25 hover:brightness-110 transition-all"
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
      <footer id="contact" className="bg-[#080706] border-t border-[#D97706]/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-900">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D97706] flex items-center justify-center text-[#0C0A09] font-bold">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-serif font-bold text-[#FDFBF7]">LE COMPTOIR BISTRO</span>
                <p className="text-[11px] text-[#A8A29E]">Casablanca Quartier Gauthier</p>
              </div>
            </div>

            <div className="text-xs text-[#A8A29E] text-center md:text-right">
              <p>Site de démonstration conçu & développé pour Tariq Abala Portfolio</p>
              <p className="mt-1 text-stone-500 font-mono text-[10px]">
                Stack : Next.js 16 • React 19 • Tailwind CSS • TypeScript
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <p>© 2026 Le Comptoir Bistro. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#menu" className="hover:text-stone-400">La Carte</a>
              <a href="#reserver" className="hover:text-stone-400">Réservations</a>
              <a href="tel:+212522998877" className="hover:text-stone-400">+212 522 99 88 77</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
