'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Shirt,
  Smartphone,
  Lamp,
  Sparkles,
  Dumbbell,
  Watch,
  Baby,
  Laptop,
} from 'lucide-react'
import { categories } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shirt,
  Smartphone,
  Lamp,
  Sparkles,
  Dumbbell,
  Watch,
  Baby,
  Laptop,
}

export function CategoriesSection() {
  return (
    <section className="py-16 lg:py-20 bg-[var(--popover)]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance">
            Explorez nos categories
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Trouvez exactement ce que vous cherchez parmi des milliers de produits
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 lg:gap-4">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon]
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
              >
                <Link
                  href={`/catalogue?category=${category.id}`}
                  className="group flex flex-col items-center gap-3 p-5 lg:p-6 rounded-2xl border border-border bg-[var(--popover)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 active:bg-primary active:text-primary-foreground"
                >
                  {Icon && (
                    <Icon className="w-7 h-7 text-accent group-hover:text-primary group-active:text-primary-foreground transition-colors duration-300" />
                  )}
                  <span className="text-sm font-medium text-foreground group-active:text-primary-foreground transition-colors">
                    {category.name}
                  </span>
                  <span className="text-xs text-muted-foreground group-active:text-primary-foreground/70 transition-colors">
                    {category.count.toLocaleString('fr-FR')} produits
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
