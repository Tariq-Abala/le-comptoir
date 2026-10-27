# Le Comptoir — Bistro & Terroir d'Auteur

Application web complète, moderne et responsive pour un restaurant bistronomique haut de gamme à Casablanca (Quartier Gauthier).

Repository GitHub : [https://github.com/Tariq-Abala/le-comptoir](https://github.com/Tariq-Abala/le-comptoir)

---

## 🍽️ Présentation & Direction Artistique

Le Comptoir adopte une identité visuelle chaleureuse, lumineuse et accueillante inspirée des plus beaux bistrots contemporains méditerranéens et parisiens :
- **Palette Lumineuse & Solaire** : Fonds ivoire chaud (`#FAF9F5`), crème et blanc pur, avec des touches subtiles de terracotta (`#C06041`) et de vert sauge / olive (`#5A6B47`). Aucun thème noir ou sombre prédominant.
- **Typographie Éditoriale & Raffinée** : Titres en serif noble associés à un sans-serif moderne, aéré et parfaitement lisible.
- **Photographies Culinaires Réelles & Locales** : 13 photographies haute résolution hébergées localement dans `public/images/` pour un rendu instantané et sans dépendance externe.
- **Expérience Utilisateur Complète & Responsive** : Navigation fluide, panier à emporter / WhatsApp synchronisé, modal détaillée de plat, formulaire de réservation validé et mentions légales complètes.

---

## ✨ Fonctionnalités Clés & Pages Développées

1. **Page d'Accueil (`/`)** :
   - Hero section avec grande photographie de table garnie, proposition de valeur et double CTA.
   - 3 piliers d'engagement : Terroirs locaux, cuisine ouverte et confort de la salle.
   - Présentation éditoriale de la carte avec onglets de catégories et cartes visuelles.
   - Découverte des atmosphères (Salle feutrée aux arches, Terrasse végétale ombragée, Cuisine ouverte).
   - Formulaire interactif de réservation et informations pratiques d'accès.

2. **La Carte & Menu (`/menu`)** :
   - Filtrage instantané par catégorie : Toute la carte, Entrées gourmandes, Plats signatures, Burgers & sandwiches, Douceurs, Mocktails botaniques.
   - Barre de recherche en temps réel par mot-clé (truffe, burrata, saumon, agneau...).
   - Filtres de régimes alimentaires : Végétarien (VG), Sans Gluten (GF), Terroir Bio, Signature du Chef.
   - Prix transparents affichés en Dirhams marocains (MAD TTC).

3. **Vue Détaillée des Plats (`DishDetailModal`)** :
   - Photographie grand format, composition détaillée des ingrédients, origine du terroir (Taounate, Taliouine, Essaouira, Moyen Atlas), accords boissons suggérés, sélecteur de quantité et ajout direct au panier.

4. **Panier à Emporter & Commande WhatsApp (`CartDrawer`)** :
   - Tiroir latéral de commande calculant le sous-total et le total net TTC.
   - Précision du nom du client, de l'heure de retrait et des remarques culinaires.
   - Bouton de transmission instantané ouvrant WhatsApp avec un message préformaté comprenant la liste des plats, quantités et total.

5. **Réservation de Table (`/reservation`)** :
   - Sélection du service (Déjeuner / Dîner), date, horaire, nombre de convives (1 à 12 personnes) et espace de dégustation.
   - Validation stricte des coordonnées.
   - Génération d'un bon d'accueil VIP avec référence unique (`LC-XXXX`) et avis transparent de démonstration conforme aux bonnes pratiques de portfolio.

6. **Notre Histoire & Producteurs (`/histoire`)** :
   - Parcours de la brigade, démarche d'approvisionnement en circuits courts et architecture minérale du restaurant.

7. **Galerie Photos (`/galerie`)** :
   - Grille de clichés haute définition avec filtres thématiques et lightbox zoom plein écran.

8. **Contact & Accès (`/contact`)** :
   - Coordonnées directes, horaires d'ouverture, service voiturier gratuit, formulaire de contact et lien WhatsApp.

9. **Foire Aux Questions (`/faq`)** :
   - Accordéon interactif couvrant les réservations, la certification Halal, les intolérances alimentaires et le stationnement.

10. **Cadre Légal & Confidentialité (`/mentions-legales` & `/confidentialite`)** :
    - Données d'immatriculation d'entreprise éditables et conformité avec la Loi marocaine 09-08 (CNDP).

---

## 🛠️ Stack Technique

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI & Rendu** : [React 19](https://react.dev/) & [TypeScript 5](https://www.typescriptlang.org/)
- **Styles** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Assets** : Photographies haute résolution optimisées stockées dans `public/images/`

---

## 🚀 Installation & Lancement Local

```bash
# 1. Dépendances
npm install

# 2. Serveur de développement local
npm run dev

# 3. Compilation de production
npm run build

# 4. Lancement de la version compilée
npm run start
```

---

## 📄 Auteur & Copyright
Développé par [**Tariq Abala**](https://tariqabala.com) — Web Development & Digital Solutions.  
*Professional Websites • Business Applications • Custom Admin Panels*

© 2026 TARIQ ABALA. Tous droits réservés.
