import { Link } from 'react-router';
import { Package, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--background-light)] border-t border-[var(--border-gray)] mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-6 h-6 text-[var(--primary-green)]" />
              <span className="font-semibold">ShopGlobal.cm</span>
            </div>
            <p className="text-sm text-[var(--neutral-gray)] mb-4">
              Commandez à l'international, payez en FCFA. Import, douanes et livraison gérés pour vous.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Service Client */}
          <div>
            <h4 className="mb-4">Service Client</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link to="/suivi" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                  Suivre ma commande
                </Link>
              </li>
              <li>
                <Link to="/retours" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                  Retours & Remboursements
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h4 className="mb-4">À propos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/comment-ca-marche" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link to="/tarification" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                  Frais et Tarification
                </Link>
              </li>
              <li>
                <Link to="/comment-ca-marche" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                  Délais de livraison
                </Link>
              </li>
              <li>
                <Link to="/tarification" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                  Modes de paiement
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="mb-4">Informations légales</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/mentions-legales" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                  Conditions générales
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/retours" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                  Politique de remboursement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border-gray)] pt-6 text-sm text-[var(--neutral-gray)] text-center">
          © 2026 ShopGlobal.cm - Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
