import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0C0A09",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Le Comptoir | Bistro & Gastronomie d'Auteur",
  description:
    "Le Comptoir — Bistro gastronomique à Casablanca. Cuisine raffinée de saison, produits nobles du terroir et ambiance feutrée.",
  keywords: ["restaurant", "bistro", "gastronomie", "Casablanca", "Gauthier", "Le Comptoir", "réservation table"],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth dark">
      <body className="min-h-screen bg-[#0C0A09] text-[#FDFBF7] antialiased">
        {children}
      </body>
    </html>
  );
}
