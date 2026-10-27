import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FAF9F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Le Comptoir Bistro | Casablanca Gauthier",
  description:
    "Bistro d'auteur à Casablanca Quartier Gauthier. Cuisine de saison, produits nobles du terroir marocain, terrasse végétale et réservation de table en direct.",
  keywords: ["restaurant", "bistro", "gastronomie", "Casablanca", "Gauthier", "Le Comptoir", "réservation table"],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-[#FAF9F5] text-[#1C1917] antialiased">
        {children}
      </body>
    </html>
  );
}
