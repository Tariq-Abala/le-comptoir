import React from "react";
import Link from "next/link";
import {
  Utensils,
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  ShieldCheck,
  Award,
  Sparkles,
} from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurant";

export default function Footer() {
  return (
    <footer className="bg-[#F5F2EB] border-t border-[#EAE5D9] pt-16 pb-12 text-sm text-[#57534E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#DFD7C7]">
          {/* Col 1: Identity & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#C06041] flex items-center justify-center text-white font-bold shadow-md shadow-[#C06041]/20">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-[#1C1917] tracking-tight">
                  LE COMPTOIR
                </span>
                <p className="text-[10px] uppercase tracking-widest text-[#C06041] font-semibold">
                  Bistronomie &amp; Terroir
                </p>
              </div>
            </div>

            <p className="text-xs text-[#78716C] leading-relaxed">
              Bistro d&apos;auteur niché au cœur du Quartier Gauthier à Casablanca.
              Nous célébrons la noblesse des produits de la terre marocaine et la finesse culinaire contemporaine dans un cadre chaleureux et lumineux.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-[#5A6B47] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#5A6B47]" />
              <span>Viandes 100% Halal &amp; Maraîchage Local Bio</span>
            </div>
          </div>

          {/* Col 2: Horaires & Service */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-base text-[#1C1917] tracking-wide flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C06041]" />
              <span>Horaires de Dégustation</span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between pb-1.5 border-b border-[#EAE5D9]">
                <span className="font-medium text-[#1C1917]">Mardi - Vendredi</span>
                <span className="text-[#78716C]">12h00 - 15h30 | 19h30 - 23h30</span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-[#EAE5D9]">
                <span className="font-medium text-[#1C1917]">Samedi - Dimanche</span>
                <span className="text-[#78716C]">12h30 - 16h00 | 19h30 - 00h00</span>
              </li>
              <li className="flex justify-between pb-1.5 text-stone-400">
                <span>Lundi</span>
                <span>Fermeture hebdomadaire</span>
              </li>
            </ul>
            <p className="text-[11px] text-[#A24B30] font-medium pt-1">
              • Service voiturier gratuit disponible midi et soir
            </p>
          </div>

          {/* Col 3: Adresse & Réservations */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-base text-[#1C1917] tracking-wide flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C06041]" />
              <span>Notre Adresse à Casablanca</span>
            </h3>
            <p className="text-xs text-[#78716C] leading-relaxed">
              {RESTAURANT_INFO.address}
              <br />
              {RESTAURANT_INFO.city}
            </p>
            <div className="space-y-2 text-xs pt-1">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#C06041] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C06041]" />
                <span className="font-medium">{RESTAURANT_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Bonjour Le Comptoir, je souhaite réserver une table."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp : {RESTAURANT_INFO.whatsapp}</span>
              </a>
            </div>
          </div>

          {/* Col 4: Navigation Rapide & Législatif */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-base text-[#1C1917] tracking-wide">
              Navigation &amp; Découverte
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/menu" className="hover:text-[#C06041] transition-colors">
                  La Carte des Saisons &amp; Prix
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="hover:text-[#C06041] transition-colors">
                  Réserver une Table en Ligne
                </Link>
              </li>
              <li>
                <Link href="/histoire" className="hover:text-[#C06041] transition-colors">
                  Notre Histoire &amp; Éleveurs Partenaires
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-[#C06041] transition-colors">
                  Galerie Photos Ambiance &amp; Plats
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#C06041] transition-colors">
                  Foire Aux Questions (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-[#C06041] transition-colors">
                  Mentions Légales &amp; Avis Démonstration
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-[#C06041] transition-colors">
                  Protection des Données (Loi 09-08)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Developer Signature Block */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#78716C]">
          <div className="space-y-1">
            <p className="font-semibold text-[#1C1917] flex items-center gap-1.5">
              <span>Développé par</span>
              <a
                href="https://tariqabala.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C06041] hover:text-[#A24B30] font-bold underline decoration-[#C06041]/40 hover:decoration-[#A24B30] transition-colors"
              >
                Tariq Abala
              </a>
            </p>
            <p className="text-[11px] font-medium text-[#44403C]">
              Web Development &amp; Digital Solutions
            </p>
            <p className="text-[10px] text-[#A8A29E] font-mono">
              Professional Websites • Business Applications • Custom Admin Panels
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-[11px]">
            <div className="flex flex-wrap items-center gap-2 text-[#44403C]">
              <span className="font-semibold">© 2026 TARIQ ABALA. Tous droits réservés.</span>
              <span className="text-[#DFD7C7]">•</span>
              <span>Le Comptoir Bistro Casablanca</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[#78716C]">
              <Link href="/mentions-legales" className="hover:text-[#1C1917] transition-colors">
                Mentions Légales
              </Link>
              <span>•</span>
              <Link href="/confidentialite" className="hover:text-[#1C1917] transition-colors">
                Confidentialité
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-[#1C1917] transition-colors">
                Plan d&apos;accès &amp; Voiturier
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
