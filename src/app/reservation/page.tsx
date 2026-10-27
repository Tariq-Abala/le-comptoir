"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Users,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationSection from "@/components/ReservationSection";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import { RESTAURANT_INFO } from "@/data/restaurant";

export default function ReservationPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1917] flex flex-col font-sans">
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* Banner */}
        <section className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-900">
          <Image
            src="/images/interior-dining.jpg"
            alt="Intérieur du restaurant Le Comptoir Casablanca"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-transparent to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="text-center space-y-2 max-w-xl">
              <span className="text-xs uppercase font-mono tracking-widest text-[#EAE5D9] px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
                Réservation de Table en Ligne
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white drop-shadow-md">
                Votre Moment au Comptoir
              </h1>
              <p className="text-xs sm:text-sm text-stone-200">
                Casablanca Quartier Gauthier • Déjeuner d&apos;affaires &amp; Dîner d&apos;auteur
              </p>
            </div>
          </div>
        </section>

        {/* Full Interactive Reservation Form */}
        <div className="-mt-8 relative z-10">
          <ReservationSection standalone={true} />
        </div>

        {/* Booking Guidelines & Policy */}
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#DFD7C7] p-6 sm:p-8 space-y-6 shadow-2xs">
            <h3 className="font-serif font-bold text-xl text-[#1C1917] pb-3 border-b border-[#EAE5D9]">
              Conditions d&apos;Accueil &amp; Bon à Savoir
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#57534E]">
              <div className="space-y-1.5">
                <strong className="text-[#1C1917] block font-serif text-sm">
                  1. Tolérance d&apos;Arrivée :
                </strong>
                <p className="leading-relaxed">
                  Votre table vous est réservée pendant 20 minutes après l&apos;horaire choisi. Au-delà et sans notification téléphonique préalable de votre part, la table pourra être réattribuée.
                </p>
              </div>

              <div className="space-y-1.5">
                <strong className="text-[#1C1917] block font-serif text-sm">
                  2. Choix de la Terrasse :
                </strong>
                <p className="leading-relaxed">
                  Les réservations en terrasse végétale sont soumises aux aléas météorologiques. En cas de pluie ou de vent fort, nous vous réinstallons avec plaisir dans notre salle intérieure.
                </p>
              </div>

              <div className="space-y-1.5">
                <strong className="text-[#1C1917] block font-serif text-sm">
                  3. Grandes Tables (&gt; 8 personnes) :
                </strong>
                <p className="leading-relaxed">
                  Pour les groupes de plus de 8 convives, notre maître d&apos;hôtel prendra contact avec vous afin de vous proposer un menu dégustation personnalisé adapté aux envies de vos invités.
                </p>
              </div>

              <div className="space-y-1.5">
                <strong className="text-[#1C1917] block font-serif text-sm">
                  4. Service Voiturier Gratuit :
                </strong>
                <p className="leading-relaxed">
                  Notre équipe de voituriers prend en charge votre véhicule directement devant le restaurant au 28, Rue Jules Ferry à Casablanca.
                </p>
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
