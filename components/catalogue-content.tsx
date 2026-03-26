'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { catalogueProducts, categories, formatPrice } from '@/lib/data'
import { useCart } from '@/lib/cart-context'
import type { Product } from '@/lib/types'

const sources = ['Tous', 'AliExpress', 'Shein', 'Amazon'] as const
const sortOptions = [
  { value: 'popular', label: 'Plus populaire' },
  { value: 'price-asc', label: 'Prix croissant' },
  { value: 'price-desc', label: 'Prix decroissant' },
  { value: 'newest', label: 'Plus recent' },
]

function CatalogueProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCart()

  const badgeStyles: Record<string, string> = {
    Nouveau: 'bg-primary text-primary-foreground',
    Populaire: 'bg-red text-[#FFFFFF]',
    Soldes: 'bg-accent text-accent-foreground',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      layout
      className="group"
    >
      <div className="relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
        <Link href={`/produit/${product.id}`} className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {product.badge && (
            <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${badgeStyles[product.badge]}`}>
              {product.badge}
            </span>
          )}
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[var(--popover)]/90 backdrop-blur-sm text-xs font-medium text-foreground">
            {product.source}
          </span>
        </Link>

        <div className="flex flex-col flex-1 p-4">
          <Link href={`/produit/${product.id}`}>
            <h3 className="text-sm font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {product.name}
            </h3>
          </Link>

          <div className="flex items-center gap-1.5 mt-2">
            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
            <span className="text-xs font-medium text-foreground">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-serif text-lg font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <p className="mt-1.5 text-xs text-muted-foreground">
            {product.deliveryDays}
          </p>

          <button
            onClick={() => addItem(product)}
            className="mt-4 w-full py-2.5 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export function CatalogueContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || ''
  const initialQuery = searchParams.get('q') || ''

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedSource, setSelectedSource] = useState<string>('Tous')
  const [sortBy, setSortBy] = useState('popular')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let products = [...catalogueProducts]

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      products = products.filter(
        (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      )
    }

    if (selectedCategory) {
      products = products.filter((p) => p.category === selectedCategory)
    }

    if (selectedSource !== 'Tous') {
      products = products.filter((p) => p.source === selectedSource)
    }

    switch (sortBy) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        products.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        products.sort((a, b) => (a.badge === 'Nouveau' ? -1 : 1))
        break
      default:
        products.sort((a, b) => b.reviews - a.reviews)
    }

    return products
  }, [searchQuery, selectedCategory, selectedSource, sortBy])

  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8 lg:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Catalogue</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {filteredProducts.length} produits disponibles
        </p>
      </div>

      {/* Search + Controls */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un produit..."
              className="w-full h-12 pl-11 pr-4 rounded-xl border border-border bg-[var(--popover)] text-foreground text-sm placeholder:text-text-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-12 pl-4 pr-10 rounded-xl border border-border bg-[var(--popover)] text-foreground text-sm appearance-none focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>

          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center justify-center gap-2 h-12 px-4 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filtres
          </button>
        </div>

        {/* Filters */}
        <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
          <div className="flex flex-col gap-4 p-4 rounded-2xl bg-card border border-border lg:p-0 lg:bg-transparent lg:border-0">
            {/* Source */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 lg:hidden">
                Source
              </h3>
              <div className="flex flex-wrap gap-2">
                {sources.map((source) => (
                  <button
                    key={source}
                    onClick={() => setSelectedSource(source)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedSource === source
                        ? 'bg-primary text-primary-foreground'
                        : 'border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
                    }`}
                  >
                    {source}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 lg:hidden">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    !selectedCategory
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
                  }`}
                >
                  Toutes
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === cat.id
                        ? 'bg-primary text-primary-foreground'
                        : 'border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active filters */}
            {(selectedCategory || selectedSource !== 'Tous' || searchQuery) && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedCategory('')
                    setSelectedSource('Tous')
                    setSearchQuery('')
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-destructive/10 text-destructive text-xs font-medium hover:bg-destructive/20 transition-colors"
                >
                  <X className="w-3 h-3" />
                  Effacer les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <AnimatePresence mode="wait">
        {filteredProducts.length > 0 ? (
          <motion.div
            key="grid"
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5"
          >
            {filteredProducts.map((product, index) => (
              <CatalogueProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 gap-4 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
              <Search className="w-7 h-7 text-muted-foreground" />
            </div>
            <p className="text-lg font-medium text-foreground">Aucun produit trouve</p>
            <p className="text-sm text-muted-foreground">
              Essayez de modifier vos filtres ou votre recherche
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
