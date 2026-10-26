# Le Comptoir — Bistro & Gastronomie d'Auteur

Site web vitrine et système de réservation de tables pour un bistro gastronomique à Casablanca (Quartier Gauthier).

## Présentation du Projet
Le Comptoir est une application web élégante inspirée de l'art de vivre bistronomique. Elle permet aux clients de consulter la carte des saisons avec filtres par catégorie (entrées, plats signatures, viandes, marée, desserts, mocktails), de découvrir l'histoire du chef et des producteurs du terroir, et d'effectuer une réservation de table en direct avec choix d'ambiance (salle feutrée, terrasse végétalisée, salon VIP).

### Fonctionnalités Clés
- **Esthétique Chaleureuse & Boisée** : Fond anthracite profond (`#0C0A09`), reflets ambrés cuivrés (`#D97706`), typographie avec empattements soignée.
- **Carte des Saisons Interactive** : Navigation fluide par types de mets avec tags de provenance (Safran de Taliouine, Agneau de l'Atlas, etc.), labels végétariens et prix en Dirhams marocains.
- **Système de Réservation de Table** : Sélection du service (déjeuner / dîner), du nombre de convives, de la date, du créneau et de l'espace de dégustation avec génération de numéro de réservation unique (`LC-XXXX`).
- **Accessibilité Mobile & Contact Rapide** : Appels téléphoniques en 1 clic, réservation WhatsApp directe et informations sur le service voiturier.

## Technologies Utilisées
- **Framework** : [Next.js](https://nextjs.org/) (App Router)
- **UI & Rendu** : [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styles** : [Tailwind CSS](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)

---

## Installation & Démarrage Local

### Prérequis
- Node.js version 18.18+ ou 20+
- npm version 9+

### 1. Installation des Dépendances
```bash
npm install
```

### 2. Démarrer le Serveur Local
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 3. Compiler pour la Production
```bash
npm run build
```

### 4. Lancer la Version Compilée
```bash
npm run start
```

---

## Déploiement Indépendant

### Option A : Dépôt GitHub Séparé (Recommandé)

1. Initialisez un nouveau dépôt Git dans ce dossier :
   ```bash
   cd le-comptoir
   git init
   git add .
   git commit -m "feat: initial commit of Le Comptoir project"
   ```
2. Créez un nouveau dépôt public ou privé sur GitHub nommé `le-comptoir` :
   ```bash
   git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/le-comptoir.git
   git branch -M main
   git push -u origin main
   ```
3. Connectez-vous sur [Vercel](https://vercel.com/) :
   - Cliquez sur **Add New...** > **Project**
   - Importez le dépôt `le-comptoir`
   - Le framework Next.js est automatiquement détecté
   - Cliquez sur **Deploy**

### Option B : Déploiement Monorepo (depuis le dossier racine)
Si vous conservez tous les projets dans un seul dépôt :
- Sur Vercel, définissez **Root Directory** sur `le-comptoir`.
- Les scripts de build et d'installation fonctionneront automatiquement.

---

## Variables d'Environnement
Ce projet ne requiert aucune variable d'environnement obligatoire pour fonctionner.

Variables optionnelles :
- `NEXT_PUBLIC_RESTAURANT_PHONE` (Optionnel) : Numéro d'appel téléphonique.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` (Optionnel) : Numéro pour les réservations WhatsApp.

---

## Auteur
Projet conçu et développé dans le cadre du portfolio de solutions web par **Tariq Abala**.
