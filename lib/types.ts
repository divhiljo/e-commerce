export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  source: 'AliExpress' | 'Shein' | 'Amazon'
  category: string
  badge?: 'Nouveau' | 'Populaire' | 'Soldes'
  deliveryDays: string
  rating: number
  reviews: number
  description?: string
  sizes?: string[]
  colors?: { name: string; hex: string }[]
}

export interface Category {
  id: string
  name: string
  icon: string
  count: number
}

export interface CartItem {
  product: Product
  quantity: number
  selectedSize?: string
  selectedColor?: string
}
