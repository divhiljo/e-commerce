import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-savane-800 text-[rgba(255,255,255,0.6)]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold text-accent">AfriShop</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Votre passerelle vers les produits internationaux. Commandez depuis AliExpress, Shein et Amazon, payez en FCFA.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-[rgba(255,255,255,0.9)] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm hover:text-accent transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-sm hover:text-accent transition-colors duration-300">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-sm hover:text-accent transition-colors duration-300">
                  Comment ca marche
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-[rgba(255,255,255,0.9)] uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="text-sm hover:text-accent transition-colors duration-300">
                  Centre d{"'"}aide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent transition-colors duration-300">
                  Suivi de commande
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent transition-colors duration-300">
                  Politique de retour
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h4 className="text-sm font-semibold text-[rgba(255,255,255,0.9)] uppercase tracking-wider mb-4">
              Paiement
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-sm">MTN Mobile Money</li>
              <li className="text-sm">Orange Money</li>
              <li className="text-sm">Virement bancaire</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            {'2026 AfriShop. Tous droits reserves.'}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs hover:text-accent transition-colors duration-300">
              Conditions generales
            </Link>
            <Link href="#" className="text-xs hover:text-accent transition-colors duration-300">
              Confidentialite
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
