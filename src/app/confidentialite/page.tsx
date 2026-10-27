import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConfidentialitePage() {
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
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#5A6B47]">
              CONFORMITÉ LOI MAROCAINE 09-08 &amp; CNDP
            </span>
            <h1 className="text-3xl font-serif font-bold text-[#1C1917] mt-2">
              Politique de Confidentialité
            </h1>
            <p className="text-xs text-[#78716C] mt-1">
              Protection et traitement responsable de vos données personnelles
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1C1917] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#5A6B47]" />
              <span>1. Engagement de Protection des Données</span>
            </h2>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Le Comptoir Bistro s&apos;engage à protéger la vie privée de ses clients et des visiteurs de son site web, conformément aux dispositions de la <strong>Loi n° 09-08</strong> relative à la protection des personnes physiques à l&apos;égard du traitement des données à caractère personnel promulguée par le Dahir n° 1-09-15 du 22 safar 1430 (18 février 2009).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1C1917]">
              2. Données Collectées &amp; Finalités
            </h2>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Les données recueillies dans le cadre des formulaires de réservation (Nom, Prénom, Numéro de Téléphone, Email, Préférences de table et allergies éventuelles) ont pour unique finalité l&apos;organisation de votre service et l&apos;envoi de votre bon de confirmation. Aucune donnée n&apos;est commercialisée ou transmise à des tiers annonceurs.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1C1917]">
              3. Absence de Traceurs Publicitaires Intrusifs
            </h2>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Ce site web ne dépose aucun cookie de ciblage publicitaire ni aucun traceur tiers de profilage commercial. La transmission de commande par WhatsApp s&apos;effectue directement via le protocole sécurisé chiffré de bout en bout de l&apos;application officielle WhatsApp.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-[#1C1917]">
              4. Vos Droits d&apos;Accès &amp; de Rectification
            </h2>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Conformément à la Loi 09-08, vous disposez d&apos;un droit d&apos;accès, de rectification et d&apos;opposition concernant vos données personnelles en nous écrivant par email à <strong>contact@lecomptoirbistro.ma</strong>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
