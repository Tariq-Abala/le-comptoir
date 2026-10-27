"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Sparkles,
  Phone,
  Mail,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  Heart,
} from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurant";

interface ReservationSectionProps {
  standalone?: boolean;
}

export default function ReservationSection({ standalone = false }: ReservationSectionProps) {
  const [service, setService] = useState<"dejeuner" | "diner">("diner");
  const [date, setDate] = useState("2026-11-04");
  const [time, setTime] = useState("20:30");
  const [guests, setGuests] = useState("2");
  const [area, setArea] = useState("Salle Principale aux Arches (Banquettes Terracotta)");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingCode, setBookingCode] = useState("");
  const [formError, setFormError] = useState("");

  const lunchSlots = ["12:15", "12:45", "13:15", "13:45", "14:15"];
  const dinnerSlots = ["19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

  const handleServiceChange = (newService: "dejeuner" | "diner") => {
    setService(newService);
    setTime(newService === "dejeuner" ? "13:15" : "20:30");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!fullName.trim()) {
      setFormError("Veuillez renseigner votre nom complet.");
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setFormError("Veuillez indiquer un numéro de téléphone valide pour confirmation.");
      return;
    }

    const randomId = "LC-" + Math.floor(1000 + Math.random() * 9000);
    setBookingCode(randomId);
    setIsConfirmed(true);
  };

  const whatsappReservationText = encodeURIComponent(
    `Bonjour Le Comptoir Bistro Casablanca, je souhaite vérifier la disponibilité pour une table :\n` +
      `• Référence souhaitée : ${bookingCode || "Nouvelle demande"}\n` +
      `• Date : ${date} (${service === "dejeuner" ? "Déjeuner" : "Dîner"} à ${time})\n` +
      `• Nombre de convives : ${guests} personne(s)\n` +
      `• Espace : ${area}\n` +
      `• Nom : ${fullName || "Client"}\n` +
      (notes ? `• Remarques : ${notes}\n` : "") +
      `\nMerci de me confirmer la disponibilité.`
  );

  return (
    <section
      id="reservation"
      className={`py-16 lg:py-20 transition-colors ${
        standalone ? "bg-[#FAF9F5]" : "bg-[#F5F2EB]/60"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[11px] uppercase tracking-widest text-[#C06041] font-bold font-sans">
            Réservation Instantanée
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917]">
            Réservez Votre Table au Comptoir
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
            Pour un déjeuner d&apos;affaires feutré ou un dîner sous la terrasse végétale de Gauthier, sélectionnez votre créneau en quelques clics.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl border border-[#DFD7C7] p-6 sm:p-10 shadow-lg shadow-stone-200/40">
          {isConfirmed ? (
            /* Confirmation Voucher Screen */
            <div className="space-y-6 text-center animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C06041]">
                  Demande de Réservation Enregistrée
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] mt-1">
                  À très bientôt au Comptoir Bistro
                </h3>
                <p className="text-xs text-[#78716C] mt-1">
                  Référence de votre demande :{" "}
                  <strong className="font-mono text-[#C06041] text-sm">{bookingCode}</strong>
                </p>
              </div>

              {/* VIP Boarding Pass Card */}
              <div className="max-w-xl mx-auto rounded-2xl border-2 border-dashed border-[#DFD7C7] bg-[#FAF9F5] p-5 text-left text-xs space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#EAE5D9]">
                  <span className="font-serif font-bold text-sm text-[#1C1917]">
                    LE COMPTOIR BISTRO • CASABLANCA GAUTHIER
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    Statut : En Attente
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Convive Principal</span>
                    <span className="font-bold text-[#1C1917]">{fullName}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Nombre d&apos;invités</span>
                    <span className="font-bold text-[#1C1917]">{guests} personne{Number(guests) > 1 ? "s" : ""}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Date &amp; Horaire</span>
                    <span className="font-bold text-[#C06041]">{date} à {time}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Service</span>
                    <span className="font-bold text-[#1C1917]">
                      {service === "dejeuner" ? "Déjeuner Bistronomique" : "Dîner d'Auteur"}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-stone-400 block text-[10px] uppercase">Espace Souhaité</span>
                    <span className="font-medium text-[#1C1917]">{area}</span>
                  </div>
                  {notes && (
                    <div className="col-span-2 pt-1 border-t border-[#EAE5D9]">
                      <span className="text-stone-400 block text-[10px] uppercase">Remarques particulières</span>
                      <span className="italic text-[#78716C]">{notes}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Transparent Demo Notice */}
              <div className="p-4 rounded-2xl bg-[#FCF9F2] border border-[#ECD9B6] text-xs text-[#57534E] text-left space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#A24B30]">
                  <Sparkles className="w-4 h-4 text-[#C06041] shrink-0" />
                  <span>Avis Transparent de Démonstration :</span>
                </div>
                <p className="leading-relaxed text-[11px]">
                  Ce site web est une réalisation de démonstration haut de gamme conçue pour le portfolio de l&apos;ingénieur développeur <strong>Tariq Abala</strong>. Cette soumission est une <strong>simulation interactive</strong> : aucune donnée n&apos;est transmise à un établissement physique réel et aucun créneau effectif n&apos;a été bloqué.
                </p>
                <p className="leading-relaxed text-[11px]">
                  Pour tester l&apos;intégration WhatsApp avec ce modèle de réservation ou contacter le développeur, utilisez le bouton direct ci-dessous :
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${whatsappReservationText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Tester le message direct sur WhatsApp</span>
                </a>

                <button
                  onClick={() => setIsConfirmed(false)}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl border border-[#DFD7C7] bg-white text-[#1C1917] hover:bg-stone-50 font-semibold text-xs"
                >
                  Faire une nouvelle réservation
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Reservation Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {formError && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Step 1: Service Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-2.5">
                  1. Service Souhaité *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleServiceChange("dejeuner")}
                    className={`p-3.5 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      service === "dejeuner"
                        ? "bg-[#C06041] border-[#C06041] text-white shadow-md shadow-[#C06041]/20"
                        : "bg-[#FAF9F5] border-[#DFD7C7] text-[#57534E] hover:bg-white"
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    <span>Déjeuner (12h00 - 15h30)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleServiceChange("diner")}
                    className={`p-3.5 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      service === "diner"
                        ? "bg-[#C06041] border-[#C06041] text-white shadow-md shadow-[#C06041]/20"
                        : "bg-[#FAF9F5] border-[#DFD7C7] text-[#57534E] hover:bg-white"
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Dîner (19h30 - 23h30)</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Date & Time Slots */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-2">
                    2. Date du Repas *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min="2026-10-27"
                      className="w-full px-3.5 py-3 rounded-2xl bg-[#FAF9F5] border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041] focus:bg-white transition-all font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-2">
                    3. Nombre de Convives *
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-2xl bg-[#FAF9F5] border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041] focus:bg-white transition-all"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} personne{num > 1 ? "s" : ""} {num >= 8 ? "(Table spéciale groupe)" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-semibold text-[#57534E] mb-2">
                  Horaire d&apos;arrivée sélectionné :
                </label>
                <div className="flex flex-wrap gap-2">
                  {(service === "dejeuner" ? lunchSlots : dinnerSlots).map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold border transition-all ${
                        time === slot
                          ? "bg-[#C06041] border-[#C06041] text-white shadow-sm"
                          : "bg-white border-[#DFD7C7] text-[#57534E] hover:border-[#C06041]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Seating Area */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-2">
                  4. Espace de Dégustation Préféré *
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-2xl bg-[#FAF9F5] border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041] focus:bg-white transition-all"
                >
                  <option value="Salle Principale aux Arches (Banquettes Terracotta)">
                    Salle Principale aux Arches (Atmosphère feutrée &amp; banquettes terracotta)
                  </option>
                  <option value="La Terrasse Gauthier (Jardin végétalisé ombragé & orangers)">
                    La Terrasse Gauthier (Jardin végétalisé ombragé &amp; orangers)
                  </option>
                  <option value="La Table d'Hôtes (Vue sur les fourneaux & chef Sarah)">
                    La Table d&apos;Hôtes (Vue sur les fourneaux &amp; chef Sarah)
                  </option>
                </select>
              </div>

              {/* Step 4: Contact Details */}
              <div className="pt-2 border-t border-[#EAE5D9] space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917] block">
                  5. Coordonnées de Réservation
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                      Nom &amp; Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Tariq Abala"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                      Numéro de Téléphone (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: 06 23 59 28 87"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041] focus:bg-white font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                    Adresse Email (Optionnel pour confirmation)
                  </label>
                  <input
                    type="email"
                    placeholder="votre.email@domaine.ma"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                    Remarques particulières, allergies ou célébration
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Déjeuner d'affaires, table calme, anniversaire..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-[#DFD7C7] text-xs text-[#1C1917] focus:outline-none focus:border-[#C06041] focus:bg-white"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#C06041] hover:bg-[#A24B30] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#C06041]/25 transition-all hover:scale-[1.01]"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirmer la Demande de Table ({guests} pers. • {date} à {time})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#78716C] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5A6B47]" />
                <span>Service Voiturier privé et gratuit dès votre arrivée Rue Jules Ferry</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
