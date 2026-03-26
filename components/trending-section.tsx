'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { trendingProducts, formatPrice } from '@/lib/data'
import { useCart } from '@/lib/cart-context'
import type { Product } from '@/lib/types'

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCart()

  const badgeStyles: Record<string, string> = {
    Nouveau: 'bg-primary text-primary-foreground',
    Populaire: 'bg-red text-[#FFFFFF]',
    Soldes: 'bg-accent text-accent-foreground',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
        {/* Image */}
        <Link href={`/produit/${product.id}`} className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {product.badge && (
            <span
              className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${badgeStyles[product.badge]}`}
            >
              {product.badge}
            </span>
          )}
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[var(--popover)]/90 backdrop-blur-sm text-xs font-medium text-foreground">
            {product.source}
          </span>
        </Link>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          <Link href={`/produit/${product.id}`}>
            <h3 className="text-sm font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
            <span className="text-xs font-medium text-foreground">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>

          {/* Price */}
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

          {/* Delivery */}
          <p className="mt-1.5 text-xs text-muted-foreground">
            Livraison: {product.deliveryDays}
          </p>

          {/* Add to Cart */}
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

export function TrendingSection() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance">
              Produits tendance
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Les articles les plus populaires du moment
            </p>
          </div>
          <Link
            href="/catalogue"
            className="hidden sm:inline-flex text-sm font-medium text-primary hover:text-savane-800 transition-colors duration-300"
          >
            Voir tout
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {trendingProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/catalogue"
            className="inline-flex px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-savane-800 transition-colors duration-300"
          >
            Voir tout le catalogue
          </Link>
        </div>
      </div>
    </section>
  )
}
