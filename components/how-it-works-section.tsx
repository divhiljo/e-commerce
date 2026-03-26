'use client'

import { motion } from 'framer-motion'
import { Search, CreditCard, Truck } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Recherchez votre article',
    description:
      'Parcourez des milliers de produits depuis AliExpress, Shein et Amazon. Trouvez exactement ce que vous cherchez.',
  },
  {
    icon: CreditCard,
    title: 'Payez en FCFA',
    description:
      'Reglez votre commande facilement via MTN Mobile Money ou Orange Money. Aucune carte bancaire internationale requise.',
  },
  {
    icon: Truck,
    title: 'Livraison locale',
    description:
      'Nous gerons les douanes et l\'import. Recevez votre colis directement chez vous au Cameroun sous 7 a 18 jours.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance">
            Comment ca marche
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            En 3 etapes simples, recevez vos produits internationaux au Cameroun
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12, ease: 'easeOut' }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[var(--popover)] border border-border flex items-center justify-center shadow-sm">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
