// Types
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  platform: 'aliexpress' | 'shein' | 'amazon';
  deliveryDays: number;
  rating: number;
  reviews: number;
  colors?: string[];
  sizes?: string[];
  description: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface OrderStat {
  label: string;
  value: number;
  change: number;
}

// Mock data
export const categories: Category[] = [
  {
    id: '1',
    name: 'Électronique',
    image: 'https://images.unsplash.com/photo-1759975652551-cf4cdcf52973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMGdhZGdldHMlMjBtaW5pbWFsfGVufDF8fHx8MTc3MTMzODcwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    count: 245
  },
  {
    id: '2',
    name: 'Mode',
    image: 'https://images.unsplash.com/photo-1621341103818-01dada8c6ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBtaW5pbWFsJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MTMxNTUyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    count: 523
  },
  {
    id: '3',
    name: 'Beauté',
    image: 'https://images.unsplash.com/photo-1687700997210-1501e2682f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBwcm9kdWN0cyUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMzM4NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    count: 189
  },
  {
    id: '4',
    name: 'Maison',
    image: 'https://images.unsplash.com/photo-1742714684748-5a5a8a21115a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBhY2Nlc3NvcmllcyUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMzM4NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    count: 312
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Écouteurs Sans Fil Pro',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1612858250380-3206795f8a76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcxMjgyMjUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Électronique',
    platform: 'aliexpress',
    deliveryDays: 14,
    rating: 4.5,
    reviews: 124,
    colors: ['Noir', 'Blanc', 'Rose'],
    description: 'Écouteurs sans fil haute qualité avec réduction de bruit active. Autonomie de 24h avec boîtier de charge. Son cristallin et design ergonomique.'
  },
  {
    id: '2',
    name: 'Smartphone Elite',
    price: 285000,
    image: 'https://images.unsplash.com/photo-1726900303522-fb9d4e60dfa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZGV2aWNlJTIwbWluaW1hbCUyMGNsZWFufGVufDF8fHx8MTc3MTMzODcwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Électronique',
    platform: 'amazon',
    deliveryDays: 21,
    rating: 4.8,
    reviews: 356,
    colors: ['Noir', 'Argent', 'Bleu'],
    description: 'Smartphone dernière génération avec écran OLED 6.5", processeur ultra-rapide et appareil photo 48MP.'
  },
  {
    id: '3',
    name: 'Robe Élégante d\'été',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1720005398225-4ea01c9d2b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbnMlMjBmYXNoaW9uJTIwZHJlc3MlMjBlbGVnYW50fGVufDF8fHx8MTc3MTMzODcwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mode',
    platform: 'shein',
    deliveryDays: 12,
    rating: 4.6,
    reviews: 89,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Rose', 'Bleu', 'Blanc'],
    description: 'Robe légère et élégante parfaite pour l\'été. Tissu respirant et coupe flatteuse.'
  },
  {
    id: '4',
    name: 'Set Cosmétiques Bio',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1687700997210-1501e2682f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBwcm9kdWN0cyUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMzM4NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Beauté',
    platform: 'amazon',
    deliveryDays: 18,
    rating: 4.7,
    reviews: 203,
    description: 'Collection de produits cosmétiques bio et naturels. Sans parabènes ni sulfates.'
  },
  {
    id: '5',
    name: 'Décoration Murale Moderne',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1742714684748-5a5a8a21115a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBhY2Nlc3NvcmllcyUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMzM4NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Maison',
    platform: 'aliexpress',
    deliveryDays: 16,
    rating: 4.4,
    reviews: 67,
    description: 'Décoration murale minimaliste et élégante. Transforme votre espace de vie.'
  },
  {
    id: '6',
    name: 'Montre Connectée Sport',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1759975652551-cf4cdcf52973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMGdhZGdldHMlMjBtaW5pbWFsfGVufDF8fHx8MTc3MTMzODcwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Électronique',
    platform: 'amazon',
    deliveryDays: 19,
    rating: 4.6,
    reviews: 178,
    colors: ['Noir', 'Gris', 'Vert'],
    description: 'Montre connectée avec suivi d\'activité, GPS et moniteur cardiaque.'
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Marie K.',
    rating: 5,
    date: '2026-02-10',
    comment: 'Excellent produit, livraison rapide et conforme à la description. Je recommande!'
  },
  {
    id: '2',
    author: 'Jean-Paul D.',
    rating: 4,
    date: '2026-02-05',
    comment: 'Très satisfait de mon achat. Qualité au rendez-vous.'
  },
  {
    id: '3',
    author: 'Sandrine M.',
    rating: 5,
    date: '2026-01-28',
    comment: 'Service impeccable, paiement en FCFA très pratique. Merci!'
  }
];

export const orderStats: OrderStat[] = [
  { label: 'Commandes totales', value: 1247, change: 12.5 },
  { label: 'En cours', value: 89, change: -3.2 },
  { label: 'Livrées', value: 1098, change: 15.8 },
  { label: 'Revenus (FCFA)', value: 42500000, change: 18.3 }
];

export const chartData = [
  { month: 'Jan', commandes: 65, revenus: 2800000 },
  { month: 'Fév', commandes: 89, revenus: 3200000 },
  { month: 'Mar', commandes: 102, revenus: 4100000 },
  { month: 'Avr', commandes: 145, revenus: 5200000 },
  { month: 'Mai', commandes: 178, revenus: 6300000 },
  { month: 'Juin', commandes: 201, revenus: 7500000 }
];

export const platformData = [
  { name: 'AliExpress', value: 45, color: '#1B5E20' },
  { name: 'Shein', value: 30, color: '#2E7D32' },
  { name: 'Amazon', value: 25, color: '#66BB6A' }
];
