"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ShieldCheck,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import { RESTAURANT_INFO } from "@/data/restaurant";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Informations générales");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !message) return;
    setIsSent(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1917] flex flex-col font-sans">
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-[11px] uppercase tracking-widest text-[#C06041] font-bold font-sans">
            Nous Contacter &amp; Accès
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1917]">
            Entrez en Contact avec Notre Équipe
          </h1>
          <p className="text-xs sm:text-sm text-[#78716C]">
            Pour une question sur la carte, une demande de privatisation ou une assistance pour votre réservation.
          </p>
        </div>

        {/* 2-Column Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Coordinates & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-[#DFD7C7] p-6 sm:p-8 space-y-6 shadow-xs">
              <h2 className="font-serif font-bold text-xl text-[#1C1917] pb-3 border-b border-[#EAE5D9]">
                Coordonnées Directes
              </h2>

              <div className="space-y-4 text-xs text-[#57534E]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#C06041]/10 text-[#C06041] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#1C1917] block">Adresse du Restaurant :</strong>
                    <span>{RESTAURANT_INFO.address}</span>
                    <br />
                    <span>{RESTAURANT_INFO.city}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#C06041]/10 text-[#C06041] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#1C1917] block">Standard Téléphonique :</strong>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                      className="hover:text-[#C06041] font-medium"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#1C1917] block">Ligne WhatsApp Directe :</strong>
                    <a
                      href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:underline font-medium"
                    >
                      {RESTAURANT_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#C06041]/10 text-[#C06041] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#1C1917] block">Courrier Électronique :</strong>
                    <a
                      href={`mailto:${RESTAURANT_INFO.email}`}
                      className="hover:text-[#C06041] font-medium"
                    >
                      {RESTAURANT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Voiturier */}
              <div className="p-4 rounded-2xl bg-[#5A6B47]/10 border border-[#5A6B47]/20 text-xs text-[#5A6B47] space-y-1">
                <div className="flex items-center gap-2 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Service Voiturier Privé Gratuit</span>
                </div>
                <p className="text-[11px] leading-relaxed text-stone-600">
                  Accueil et prise en charge de votre véhicule à l&apos;entrée Rue Jules Ferry du mardi au dimanche midi et soir.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-[#FAF9F5] rounded-3xl border border-[#DFD7C7] p-6 space-y-3">
              <h3 className="font-serif font-bold text-base text-[#1C1917]">
                Besoin d&apos;une réponse immédiate ?
              </h3>
              <p className="text-xs text-[#78716C] leading-relaxed">
                Notre maître d&apos;hôtel est connecté sur WhatsApp pour répondre à vos questions en temps réel pendant les heures de service.
              </p>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Bonjour Le Comptoir, je souhaite vous poser une question."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ouvrir la conversation WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#DFD7C7] p-6 sm:p-10 shadow-xs">
            {isSent ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#1C1917]">
                  Votre message a bien été transmis
                </h3>
                <p className="text-xs text-[#78716C] max-w-md mx-auto leading-relaxed">
                  Merci {fullName}. Notre équipe vous répondra dans les plus brefs délais sur votre adresse email ({email || "renseignée"}).
                </p>
                <div className="p-4 rounded-2xl bg-[#FCF9F2] border border-[#ECD9B6] text-xs text-[#57534E] text-left space-y-1.5 max-w-md mx-auto">
                  <div className="flex items-center gap-2 font-bold text-[#A24B30]">
                    <Sparkles className="w-4 h-4 text-[#C06041]" />
                    <span>Avis Démonstration Portfolio :</span>
                  </div>
                  <p className="text-[11px] text-[#78716C] leading-relaxed">
                    Cette soumission est une simulation interactive pour le portfolio de l&apos;ingénieur développeur Tariq Abala. Pour une interaction réelle, contactez via WhatsApp direct.
                  </p>
                </div>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-6 py-2.5 rounded-xl border border-[#DFD7C7] text-xs font-semibold hover:bg-stone-50"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1 pb-3 border-b border-[#EAE5D9]">
                  <h2 className="font-serif font-bold text-xl text-[#1C1917]">
                    Formulaire de Message
                  </h2>
                  <p className="text-xs text-[#78716C]">
                    Remplissez ce formulaire et notre équipe prendra contact avec vous.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                      Nom &amp; Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Yasmine Tazi"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                      Numéro de Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: 06 61 23 45 67"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041] focus:bg-white font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="yasmine@domaine.ma"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                      Objet de la Demande
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041] focus:bg-white"
                    >
                      <option value="Informations générales">Informations générales</option>
                      <option value="Privatisation ou Événement">Privatisation ou Événement d&apos;entreprise</option>
                      <option value="Demande d'allergie ou menu spécial">Allergies ou menu sur-mesure</option>
                      <option value="Partenariat ou Presse">Partenariat &amp; Presse</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                    Votre Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Précisez votre demande, date souhaitée, nombre d'invités ou question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-[#C06041] hover:bg-[#A24B30] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#C06041]/25 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmettre le Message</span>
                </button>
              </form>
            )}
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
