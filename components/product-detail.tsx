'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Truck, Shield, RotateCcw, ChevronLeft, Check } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/data'
import type { Product } from '@/lib/types'

const reviews = [
  {
    id: '1',
    name: 'Marie K.',
    rating: 5,
    date: 'Il y a 3 jours',
    comment: 'Excellent produit, exactement comme sur la photo. Livraison rapide!',
  },
  {
    id: '2',
    name: 'Jean-Pierre M.',
    rating: 4,
    date: 'Il y a 1 semaine',
    comment: 'Tres bon rapport qualite prix. Le suivi de commande est top.',
  },
  {
    id: '3',
    name: 'Aissatou N.',
    rating: 5,
    date: 'Il y a 2 semaines',
    comment: 'Je suis vraiment satisfaite. Paiement facile via Orange Money.',
  },
]

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0])
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name)
  const [addedToCart, setAddedToCart] = useState(false)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  function handleAddToCart() {
    addItem(product, selectedSize, selectedColor)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8 py-6 lg:py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
        <span>/</span>
        <Link href="/catalogue" className="hover:text-primary transition-colors">Catalogue</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* Back button (mobile) */}
      <Link
        href="/catalogue"
        className="lg:hidden inline-flex items-center gap-1.5 text-sm font-medium text-primary mb-4 hover:text-savane-800 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Retour
      </Link>

      {/* Product layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-card border border-border">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.badge && (
              <span
                className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-semibold ${
                  product.badge === 'Nouveau'
                    ? 'bg-primary text-primary-foreground'
                    : product.badge === 'Populaire'
                    ? 'bg-red text-[#FFFFFF]'
                    : 'bg-accent text-accent-foreground'
                }`}
              >
                {product.badge}
              </span>
            )}
          </div>
        </motion.div>

        {/* Right: Details */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex flex-col"
        >
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {product.source}
          </span>

          <h1 className="mt-2 font-serif text-2xl md:text-3xl font-bold text-foreground text-balance">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-accent text-accent'
                      : 'fill-muted text-muted'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">{product.rating}</span>
            <span className="text-sm text-muted-foreground">({product.reviews} avis)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mt-5">
            <span className="font-serif text-3xl font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-base text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-destructive/10 text-destructive text-xs font-semibold">
                  -{discount}%
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          {/* Sizes */}
          {product.sizes && product.sizes.length > 1 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-foreground mb-3">Taille</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[44px] h-10 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-primary text-primary-foreground'
                        : 'border border-border text-foreground hover:border-primary/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Colors */}
          {product.colors && product.colors.length > 1 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-foreground mb-3">
                Couleur: <span className="text-muted-foreground font-normal">{selectedColor}</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === color.name
                        ? 'border-primary scale-110'
                        : 'border-border hover:border-primary/40'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Couleur ${color.name}`}
                  >
                    {selectedColor === color.name && (
                      <Check className={`absolute inset-0 m-auto w-4 h-4 ${
                        color.hex === '#FFFFFF' || color.hex === '#FDE68A' || color.hex === '#FCD34D' || color.hex === '#FFFDF5'
                          ? 'text-foreground'
                          : 'text-[#FFFFFF]'
                      }`} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Delivery */}
          <div className="mt-6 p-4 rounded-xl bg-muted border border-border">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Livraison estimee</p>
                <p className="text-xs text-muted-foreground">{product.deliveryDays} - Cameroun</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleAddToCart}
            disabled={addedToCart}
            className={`mt-6 w-full py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-md ${
              addedToCart
                ? 'bg-green-600 text-[#FFFFFF]'
                : 'bg-primary text-primary-foreground hover:bg-savane-800'
            }`}
          >
            {addedToCart ? 'Ajoute au panier !' : 'Ajouter au panier'}
          </button>

          {/* Trust Badges */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-xs text-text-light">
              <Shield className="w-4 h-4" />
              <span>Paiement securise</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-light">
              <RotateCcw className="w-4 h-4" />
              <span>Retour sous 30 jours</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-light">
              <Truck className="w-4 h-4" />
              <span>Suivi en temps reel</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Reviews Section */}
      <section className="mt-16 lg:mt-20">
        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6">
          Avis clients
        </h2>
        <div className="flex flex-col gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-5 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {review.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < review.rating
                          ? 'fill-accent text-accent'
                          : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
