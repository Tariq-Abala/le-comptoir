export interface MenuItem {
  id: string;
  name: string;
  category: "starters" | "mains" | "burgers" | "desserts" | "drinks";
  categoryName: string;
  price: number;
  description: string;
  ingredients: string[];
  image: string;
  badge?: string;
  dietary: Array<"VG" | "GF" | "BIO" | "CHEF">;
  pairing?: string;
  provenance: string;
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "ambiance" | "food" | "terrace" | "team";
  categoryName: string;
  image: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "reservation" | "cuisine" | "pratique";
}

export const RESTAURANT_INFO = {
  name: "Le Comptoir Bistro",
  baseline: "Bistronomie d'Auteur & Terroir Réinventé",
  address: "28, Rue Jules Ferry, Quartier Gauthier",
  city: "20070 Casablanca, Maroc",
  phone: "+212 5 22 27 88 90",
  phoneRaw: "+212522278890",
  whatsapp: "+212 6 23 59 28 87",
  whatsappRaw: "212623592887",
  email: "contact@lecomptoirbistro.ma",
  hours: [
    { days: "Mardi au Vendredi", lunch: "12h00 - 15h30", dinner: "19h30 - 23h30" },
    { days: "Samedi & Dimanche", lunch: "12h30 - 16h00", dinner: "19h30 - 00h00" },
    { days: "Lundi", lunch: "Fermeture hebdomadaire", dinner: "Fermeture hebdomadaire" },
  ],
  services: [
    "Service Voiturier Privé Gratuit",
    "Terrasse Végétalisée Chauffée & Écrin Intérieur Climatisé",
    "Options 100% Végétariennes & Sans Gluten",
    "Viandes Certifiées 100% Halal d'Éleveurs Locaux",
    "Connexion Wi-Fi Haute Vitesse & Privatisation Événements",
  ],
};

export const MENU_ITEMS: MenuItem[] = [
  // Entrées / Starters
  {
    id: "burrata",
    name: "Burratina Crémeuse & Figues Rôties",
    category: "starters",
    categoryName: "Entrées Gourmandes",
    price: 125,
    description: "Burrata artisanale au cœur coulant, tomates cerises confites d'Essaouira, figues fraîches rôties au miel de thym, pignons de pin torréfiés et pesto basilic minute.",
    ingredients: ["Burrata fraîche", "Figues de Taounate", "Tomates anciennes", "Pesto maison", "Pignons torréfiés", "Crème de balsamique 12 ans"],
    image: "/images/burrata.jpg",
    badge: "Incontournable",
    dietary: ["VG", "BIO", "CHEF"],
    pairing: "Cooler Végétal Concombre & Basilic",
    provenance: "Figues du Rif & Tomates d'Essaouira",
    isPopular: true,
  },
  {
    id: "cauliflower",
    name: "Choux-Fleurs Rôtis aux Épices Douces",
    category: "starters",
    categoryName: "Entrées Gourmandes",
    price: 85,
    description: "Fleurettes dorées au four à braise, friction de cumin beldi, paprika fumé, persil plat ciselé, fleur de sel et aïoli onctueux à l'ail noir confit.",
    ingredients: ["Chou-fleur fermier", "Paprika fumé", "Cumin beldi", "Aïoli à l'ail doux", "Fleur de sel de Guérande"],
    image: "/images/cauliflower.jpg",
    badge: "Plat Signature",
    dietary: ["VG", "GF", "BIO"],
    pairing: "Infusion Glacée Hibiscus & Menthe",
    provenance: "Maraîchers bio de la région de Tit Mellil",
    isPopular: true,
  },
  {
    id: "avocado-tartine",
    name: "Tartine d'Avocat Bio & Pois Chiches Croustillants",
    category: "starters",
    categoryName: "Entrées Gourmandes",
    price: 95,
    description: "Tranche épaisse de pain de campagne au levain naturel grillée, écrasé d'avocat au citron vert, pois chiches rôtis croustillants au piment doux et jeunes pousses de roquette.",
    ingredients: ["Pain au levain 48h", "Avocat Hass mûr", "Pois chiches bio rôtis", "Tomates cerises", "Piment d'Espelette", "Zeste de combawa"],
    image: "/images/avocado-tartine.jpg",
    badge: "Coup de Cœur",
    dietary: ["VG", "BIO"],
    pairing: "Mocktail Majorelle",
    provenance: "Avocats de la vallée du Souss & Blé meunier marocain",
    isPopular: false,
  },
  {
    id: "sweet-potato",
    name: "Wedges de Patate Douce & Crème Ciboulette",
    category: "starters",
    categoryName: "Entrées Gourmandes",
    price: 65,
    description: "Quartiers de patates douces rôties croustillantes au paprika fumé et romarin sauvage, accompagnés d'un dip crémeux yaourt grec, ciboulette fraîche et citron confit.",
    ingredients: ["Patate douce marocaine", "Romarin sauvage", "Paprika doux", "Dip yaourt fermier", "Ciboulette ciselée"],
    image: "/images/sweet-potato.jpg",
    dietary: ["VG", "GF"],
    pairing: "Limonade Artisanale Menthe Fraîche",
    provenance: "Exploitation maraîchère de Benslimane",
    isPopular: false,
  },

  // Plats Principaux / Mains
  {
    id: "lamb-shank",
    name: "Souris d'Agneau Confite au Safran Pur",
    category: "mains",
    categoryName: "Plats Signatures",
    price: 240,
    description: "Cuisson douce de 14 heures à basse température, laquée d'un jus corsé réduit au safran pur de Taliouine, mousseline onctueuse de patates douces fumées et amandes effilées croquantes.",
    ingredients: ["Souris d'agneau fermier", "Safran pur de Taliouine AOP", "Patate douce fumée", "Amandes de l'Atlas", "Jus de viande réduit", "Thym sauvage"],
    image: "/images/lamb-shank.jpg",
    badge: "Spécialité du Chef",
    dietary: ["GF", "CHEF"],
    pairing: "Cocktail Épicé Poire & Cannelle sans alcool",
    provenance: "Agneau d'alpage du Moyen Atlas",
    isPopular: true,
  },
  {
    id: "salmon",
    name: "Pavé de Saumon Sauvage & Risotto aux Asperges",
    category: "mains",
    categoryName: "Plats Signatures",
    price: 215,
    description: "Saumon atlantique poêlé unilatéral à la peau craquante, risotto crémeux carnaroli aux pointes d'asperges vertes, émulsion au beurre citronné et herbes fraîches.",
    ingredients: ["Saumon sauvage", "Riz Carnaroli", "Asperges vertes de saison", "Parmesan Reggiano 24 mois", "Aneth fraîche", "Beurre AOP"],
    image: "/images/salmon.jpg",
    badge: "Pêche Fraîche",
    dietary: ["GF"],
    pairing: "Cooler Végétal Citron Vert & Baies",
    provenance: "Arrivage direct de la criée atlantique",
    isPopular: true,
  },
  {
    id: "beef-rossini",
    name: "Filet de Bœuf Black Angus Façon Rossini",
    category: "mains",
    categoryName: "Plats Signatures",
    price: 290,
    description: "Cœur de filet tendre saisi minute, escalope de foie gras poêlée, réduction de jus brun à la truffe noire d'Ombrie, écrasé de rattes au beurre salé.",
    ingredients: ["Filet Black Angus certifié", "Foie gras de canard", "Truffe noire", "Pommes de terre rattes", "Jus réduit truffé"],
    image: "/images/hero-table.jpg",
    badge: "Prestige",
    dietary: ["CHEF"],
    pairing: "Grape Spritz Floral",
    provenance: "Élevage sélectionné et traçabilité rigoureuse",
    isPopular: false,
  },

  // Burgers & Sandwiches Gourmets
  {
    id: "burger",
    name: "Le Comptoir Wagyu Burger & Truffe Noire",
    category: "burgers",
    categoryName: "Burgers & Sandwiches Gourmets",
    price: 185,
    description: "Pain brioché toasté minute au beurre de ferme, steak haché façon smash de Wagyu persillé, compotée d'échalotes fondantes, gruyère affiné 12 mois, roquette poivrée et aïoli à la truffe.",
    ingredients: ["Bœuf Wagyu haché", "Pain brioche boulanger", "Gruyère suisse AOP", "Oignons caramélisés", "Sauce truffe maison", "Frites croustillantes"],
    image: "/images/burger.jpg",
    badge: "Best-Seller",
    dietary: ["CHEF"],
    pairing: "Bière artisanale sans alcool ou Ginger Beer",
    provenance: "Boulangerie artisanale de Casablanca & Élevage d'exception",
    isPopular: true,
  },

  // Desserts
  {
    id: "lemon-cake",
    name: "Moelleux Citron & Huile d'Olive Vierge",
    category: "desserts",
    categoryName: "Douceurs d'Auteur",
    price: 85,
    description: "Gâteau artisanal délicatement parfumé aux citrons de Berkane et à l'huile d'olive première pression à froid d'Ouezzane, quenelle de mascarpone fouetté et pistaches d'Iran concassées.",
    ingredients: ["Citrons de Berkane", "Huile d'olive d'Ouezzane", "Mascarpone vanillé", "Pistaches fraîches", "Zestes confits"],
    image: "/images/lemon-cake.jpg",
    badge: "Douceur Solaire",
    dietary: ["VG", "BIO"],
    pairing: "Expresso Pur Arabica d'Éthiopie",
    provenance: "Agrumes de la Moulouya & Huile du Pré-Rif",
    isPopular: true,
  },
  {
    id: "pastilla-dessert",
    name: "Pastilla Aérienne Lait d'Amande & Oranger",
    category: "desserts",
    categoryName: "Douceurs d'Auteur",
    price: 85,
    description: "Feuilles de ouarka croustillantes caramélisées montées minute, mousseline légère infusée à l'eau de fleur d'oranger distillée à Fès et pluie d'amandes effilées grillées.",
    ingredients: ["Feuilles de ouarka artisanales", "Crème d'amande", "Eau de fleur d'oranger de Fès", "Amandes dorées", "Cannelle douce"],
    image: "/images/hero-table.jpg",
    badge: "Tradition Sublimée",
    dietary: ["VG"],
    pairing: "Thé Vert à la Menthe Fraîche & Absinthe",
    provenance: "Fleur d'oranger des vergers de Fès",
    isPopular: false,
  },

  // Boissons & Mocktails
  {
    id: "mocktail",
    name: "Cooler Végétal Concombre & Basilic",
    category: "drinks",
    categoryName: "Mixologie Artisanale",
    price: 65,
    description: "Jus de concombre frais pressé minute, feuilles de basilic pourpre froissées, jus de lime fraîchement extrait, sirop de sucre de canne bio et eau pétillante pure sur glace pilée.",
    ingredients: ["Concombre frais", "Basilic grand vert", "Citron vert pressé", "Sirop bio maison", "Eau gazeuse des montagnes"],
    image: "/images/mocktail.jpg",
    badge: "Frais & Tonique",
    dietary: ["VG", "GF", "BIO"],
    provenance: "Herbes fraîches du potager",
    isPopular: true,
  },
  {
    id: "majorelle-drink",
    name: "Signature Éclat Majorelle",
    category: "drinks",
    categoryName: "Mixologie Artisanale",
    price: 70,
    description: "Nectar de grenade fraîchement pressée, purée de fruit de la passion sauvage, infusion de menthe poivrée, pointe de gingembre frais et bitter floral sans alcool.",
    ingredients: ["Grenade fraîche", "Fruit de la passion", "Gingembre frais râpé", "Menthe poivrée", "Zeste d'orange"],
    image: "/images/mocktail.jpg",
    badge: "Signature",
    dietary: ["VG", "GF", "BIO"],
    provenance: "Fruits frais du marché central",
    isPopular: false,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "La Grande Table d'Hôtes Bistronomique",
    category: "ambiance",
    categoryName: "Ambiance Intérieure",
    image: "/images/hero-table.jpg",
    description: "Un art de la table épuré mettant en valeur la céramique marocaine contemporaine et le lin naturel.",
  },
  {
    id: "g-2",
    title: "La Salle aux Arches & Banquettes Terracotta",
    category: "ambiance",
    categoryName: "Ambiance Intérieure",
    image: "/images/interior-dining.jpg",
    description: "Baignée de lumière naturelle zénithale, notre salle invite au calme et à la conversation.",
  },
  {
    id: "g-3",
    title: "La Terrasse Végétalisée Gauthier",
    category: "terrace",
    categoryName: "La Terrasse",
    image: "/images/terrace.jpg",
    description: "Un havre de verdure au cœur de Casablanca, ombragé par les bougainvilliers et orangers.",
  },
  {
    id: "g-4",
    title: "Le Geste Culinaire en Cuisine Ouverte",
    category: "team",
    categoryName: "L'Équipe & Savoir-Faire",
    image: "/images/chef.jpg",
    description: "Chef Sarah et sa brigade dressent minute chaque assiette avec passion et précision chirurgicale.",
  },
  {
    id: "g-5",
    title: "La Burratina d'Essaouira aux Figues",
    category: "food",
    categoryName: "Plats d'Exception",
    image: "/images/burrata.jpg",
    description: "Fraîcheur des produits laitiers locaux et douceur des figues rôties au miel de thym.",
  },
  {
    id: "g-6",
    title: "Souris d'Agneau Confite au Safran Pur",
    category: "food",
    categoryName: "Plats d'Exception",
    image: "/images/lamb-shank.jpg",
    description: "14 heures de patience pour un fondant absolu parfumé au safran de Taliouine.",
  },
  {
    id: "g-7",
    title: "Le Burger Signature au Bœuf Wagyu",
    category: "food",
    categoryName: "Plats d'Exception",
    image: "/images/burger.jpg",
    description: "L'esprit bistrot new-yorkais revisité avec l'élégance de la truffe et du gruyère suisse.",
  },
  {
    id: "g-8",
    title: "Mixologie Botanique & Fraîcheur Végétale",
    category: "food",
    categoryName: "Plats d'Exception",
    image: "/images/mocktail.jpg",
    description: "Créations sans alcool conçues comme de grands accords gastronomiques.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "reservation",
    question: "Dois-je obligatoirement réserver à l'avance pour dîner au Comptoir ?",
    answer: "Nous vous recommandons vivement de réserver, particulièrement pour les déjeuners d'affaires en semaine et les dîners du jeudi au samedi. La terrasse végétale est très prisée lors des journées ensoleillées. Vous pouvez réserver instantanément en ligne sur notre site ou directement via notre ligne WhatsApp dédiée.",
  },
  {
    category: "reservation",
    question: "Que se passe-t-il lors de la confirmation d'une réservation ?",
    answer: "Sur ce site vitrine de démonstration, la réservation génère un bon d'accueil VIP instantané avec numéro de référence. Comme indiqué en toute transparence, cette simulation ne bloque pas automatiquement une table physique sans échange préalable : un bouton direct vous permet de synchroniser la demande sur WhatsApp avec notre équipe en un clic.",
  },
  {
    category: "cuisine",
    question: "Vos viandes et volailles sont-elles certifiées Halal ?",
    answer: "Oui, sans aucune exception. L'ensemble de nos viandes (agneau du Moyen Atlas, Black Angus sélectionné, canard et volailles fermières) provient d'éleveurs marocains et internationaux certifiés 100% Halal avec une traçabilité rigoureuse.",
  },
  {
    category: "cuisine",
    question: "Avez-vous des plats adaptés aux végétariens et aux intolérants au gluten ?",
    answer: "Absolument. Notre carte fait la part belle aux légumes de saison avec des plats végétariens créatifs (Burratina aux figues, choux-fleurs rôtis au cumin beldi, tartine d'avocat) et plusieurs plats sans gluten (saumon au risotto, souris d'agneau au safran, wedges de patates douces). Précisez simplement vos allergies à notre maître d'hôtel.",
  },
  {
    category: "pratique",
    question: "Disposez-vous d'un service voiturier à Casablanca ?",
    answer: "Oui, un service voiturier privé et sécurisé est gracieusement mis à votre disposition à l'angle de la Rue Jules Ferry et de la Rue d'Ifrane (Quartier Gauthier), dès votre arrivée pour le déjeuner et le dîner.",
  },
  {
    category: "pratique",
    question: "Puis-je privatiser le restaurant pour un déjeuner d'entreprise ou un anniversaire ?",
    answer: "Tout à fait. Nous proposons la privatisation partielle de notre terrasse végétale (jusqu'à 45 convives) ou la privatisation complète du restaurant (jusqu'à 90 convives assis). Des menus dégustation personnalisés peuvent être créés par notre Chef Sarah. Contactez-nous par email ou WhatsApp pour un devis sous 24h.",
  },
];
