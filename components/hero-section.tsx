'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Plateforme logistique intelligente
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Commandez sur{' '}
              <span className="text-primary">AliExpress</span>,{' '}
              <span className="text-primary">Shein</span>,{' '}
              <span className="text-primary">Amazon</span>
            </h1>
            <p className="mt-4 font-serif text-xl md:text-2xl text-accent font-semibold">
              Payez en FCFA
            </p>
            <p className="mt-4 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              Recevez vos produits internationaux directement chez vous au Cameroun.
              Paiement Mobile Money, livraison locale assuree.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto lg:mx-0">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un produit, une marque..."
                  className="w-full h-14 pl-12 pr-32 rounded-full border border-border bg-[var(--popover)] text-foreground placeholder:text-text-light text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                />
                <Link
                  href={`/catalogue${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ''}`}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-savane-800 transition-colors duration-300"
                >
                  Rechercher
                </Link>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Livraison au Cameroun</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Paiement Mobile Money</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Suivi en temps reel</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-lg lg:max-w-none"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/hero-lifestyle.jpg"
                alt="Femme deballant ses commandes internationales au Cameroun"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-savane-800/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
