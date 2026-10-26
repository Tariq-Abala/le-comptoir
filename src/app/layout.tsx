import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FDFBF7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Le Comptoir | Bistro & Gastronomie d'Auteur",
  description:
    "Le Comptoir — Bistro gastronomique à Casablanca Quartier Gauthier. Cuisine raffinée de saison, produits nobles du terroir marocain et réservation de table en direct.",
  keywords: ["restaurant", "bistro", "gastronomie", "Casablanca", "Gauthier", "Le Comptoir", "réservation table"],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-[#FDFBF7] text-[#1C1917] antialiased transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
