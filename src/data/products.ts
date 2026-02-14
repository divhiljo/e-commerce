export interface Product {
  id: string;
  title: string;
  platform: 'Amazon' | 'AliExpress' | 'Shein';
  category: string;
  image: string;
  priceUSD: number;
  priceFCFA: number;
  importFees: number;
  deliveryFees: number;
  totalPriceFCFA: number;
  estimatedDays: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  variations?: {
    type: 'color' | 'size';
    options: string[];
  }[];
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Apple AirPods Pro (2ème génération)',
    platform: 'Amazon',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400',
    priceUSD: 249,
    priceFCFA: 149400,
    importFees: 22410,
    deliveryFees: 5000,
    totalPriceFCFA: 176810,
    estimatedDays: '12-18 jours',
    rating: 4.7,
    reviews: 1243,
    inStock: true,
  },
  {
    id: '2',
    title: 'Samsung Galaxy Watch 6 Classic',
    platform: 'Amazon',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400',
    priceUSD: 399,
    priceFCFA: 239400,
    importFees: 35910,
    deliveryFees: 5000,
    totalPriceFCFA: 280310,
    estimatedDays: '12-18 jours',
    rating: 4.5,
    reviews: 867,
    inStock: true,
    variations: [
      { type: 'color', options: ['Noir', 'Argent', 'Or'] },
      { type: 'size', options: ['41mm', '45mm'] },
    ],
  },
  {
    id: '3',
    title: 'Robe d\'été florale en coton',
    platform: 'Shein',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
    priceUSD: 28,
    priceFCFA: 16800,
    importFees: 2520,
    deliveryFees: 3500,
    totalPriceFCFA: 22820,
    estimatedDays: '15-25 jours',
    rating: 4.3,
    reviews: 542,
    inStock: true,
    variations: [
      { type: 'color', options: ['Bleu', 'Rose', 'Blanc'] },
      { type: 'size', options: ['S', 'M', 'L', 'XL'] },
    ],
  },
  {
    id: '4',
    title: 'Ensemble maquillage professionnel 32 pièces',
    platform: 'AliExpress',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400',
    priceUSD: 45,
    priceFCFA: 27000,
    importFees: 4050,
    deliveryFees: 4000,
    totalPriceFCFA: 35050,
    estimatedDays: '18-30 jours',
    rating: 4.6,
    reviews: 2341,
    inStock: true,
  },
  {
    id: '5',
    title: 'MacBook Air M2 13 pouces',
    platform: 'Amazon',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    priceUSD: 1199,
    priceFCFA: 719400,
    importFees: 107910,
    deliveryFees: 8000,
    totalPriceFCFA: 835310,
    estimatedDays: '12-18 jours',
    rating: 4.8,
    reviews: 3421,
    inStock: true,
    variations: [
      { type: 'color', options: ['Gris sidéral', 'Argent', 'Or', 'Minuit'] },
    ],
  },
  {
    id: '6',
    title: 'Baskets Nike Air Max 270',
    platform: 'Amazon',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    priceUSD: 150,
    priceFCFA: 90000,
    importFees: 13500,
    deliveryFees: 5000,
    totalPriceFCFA: 108500,
    estimatedDays: '12-18 jours',
    rating: 4.6,
    reviews: 1876,
    inStock: true,
    variations: [
      { type: 'color', options: ['Noir/Blanc', 'Bleu', 'Rouge'] },
      { type: 'size', options: ['39', '40', '41', '42', '43', '44', '45'] },
    ],
  },
  {
    id: '7',
    title: 'Enceinte Bluetooth JBL Charge 5',
    platform: 'Amazon',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
    priceUSD: 179,
    priceFCFA: 107400,
    importFees: 16110,
    deliveryFees: 5000,
    totalPriceFCFA: 128510,
    estimatedDays: '12-18 jours',
    rating: 4.7,
    reviews: 2145,
    inStock: true,
  },
  {
    id: '8',
    title: 'Sac à main cuir véritable',
    platform: 'AliExpress',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
    priceUSD: 68,
    priceFCFA: 40800,
    importFees: 6120,
    deliveryFees: 4000,
    totalPriceFCFA: 50920,
    estimatedDays: '18-30 jours',
    rating: 4.4,
    reviews: 892,
    inStock: true,
    variations: [
      { type: 'color', options: ['Noir', 'Marron', 'Beige', 'Rouge'] },
    ],
  },
];
