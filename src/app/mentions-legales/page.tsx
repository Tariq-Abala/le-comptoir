import React from "react";
import Link from "next/link";
import { ArrowLeft, Building, Shield, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1917] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-[#78716C] hover:text-[#1C1917] mb-8 font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Retour à l&apos;accueil</span>
        </Link>

        <div className="bg-white rounded-3xl border border-[#DFD7C7] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="border-b border-[#EAE5D9] pb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C06041]">
              INFORMATIONS JURIDIQUES &amp; ÉDITEUR DU SITE
            </span>
            <h1 className="text-3xl font-serif font-bold text-[#1C1917] mt-2">
              Mentions Légales
            </h1>
            <p className="text-xs text-[#78716C] mt-1">
              Dernière mise à jour : 27 Octobre 2026
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1C1917] flex items-center gap-2">
              <Building className="w-4 h-4 text-[#C06041]" />
              <span>1. Identification de l&apos;Établissement</span>
            </h2>
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#DFD7C7] text-xs text-[#57534E] space-y-1.5 leading-relaxed font-mono">
              <p><strong className="text-[#1C1917]">Raison Sociale :</strong> Le Comptoir Bistro Casablanca SARL</p>
              <p><strong className="text-[#1C1917]">Activité :</strong> Restauration bistronomique, traiteur et dégustation sur place</p>
              <p><strong className="text-[#1C1917]">Siège Social :</strong> 28, Rue Jules Ferry, Quartier Gauthier, 20070 Casablanca, Maroc</p>
              <p><strong className="text-[#1C1917]">Registre du Commerce (RC) :</strong> Casablanca n° 492018</p>
              <p><strong className="text-[#1C1917]">Identifiant Fiscal (IF) :</strong> 38192045</p>
              <p><strong className="text-[#1C1917]">Identifiant Commun de l&apos;Entreprise (ICE) :</strong> 002938172000041</p>
              <p><strong className="text-[#1C1917]">Téléphone :</strong> +212 5 22 27 88 90</p>
              <p><strong className="text-[#1C1917]">Email :</strong> contact@lecomptoirbistro.ma</p>
            </div>
          </div>

          {/* Section 2: Conception & Développement Numérique */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1C1917]">
              2. Conception &amp; Développement Numérique
            </h2>
            <div className="p-5 rounded-2xl bg-[#F5F2EB] border border-[#DFD7C7] text-xs text-[#44403C] space-y-2">
              <p className="font-semibold text-[#1C1917] flex items-center gap-1.5">
                <span>Développé par</span>
                <a
                  href="https://tariqabala.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C06041] hover:text-[#A24B30] font-bold underline"
                >
                  Tariq Abala
                </a>
              </p>
              <p className="text-xs font-semibold text-[#1C1917]">
                © 2026 TARIQ ABALA — Web Development &amp; Digital Solutions
              </p>
              <p className="text-[11px] text-[#78716C]">
                Professional Websites • Business Applications • Custom Admin Panels
              </p>
              <p className="text-[11px] text-[#78716C] pt-2 border-t border-[#DFD7C7] leading-relaxed">
                Ce site web a été conçu à titre de démonstration interactive pour le portfolio professionnel de l&apos;ingénieur développeur Tariq Abala. Architecture Next.js 16 (App Router), React 19, TypeScript et Tailwind CSS.
              </p>
            </div>
          </div>

          {/* Section 3: Hébergement */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1C1917]">
              3. Hébergement Cloud
            </h2>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Ce site web est hébergé sur l&apos;infrastructure sécurisée de <strong>Vercel Inc.</strong> — 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Infrastructure cloud mondiale certifiée ISO 27001 et SOC 2 avec chiffrement TLS 1.3 de bout en bout.
            </p>
          </div>

          {/* Section 4: Propriété Intellectuelle */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1C1917]">
              4. Propriété Intellectuelle
            </h2>
            <p className="text-xs text-[#57534E] leading-relaxed">
              L&apos;ensemble des contenus (textes, créations graphiques, typographie, sélection de photographies et arborescence) constitue une œuvre de l&apos;esprit protégée par les conventions internationales de propriété intellectuelle.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
