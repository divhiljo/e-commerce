import { Link } from 'react-router';
import { Search, Globe, CreditCard, Truck, Shield } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const popularProducts = products.slice(4, 8);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--background-light)] border-b border-[var(--border-gray)]">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="mb-4">
              Commander à l'international, payer en FCFA
            </h1>
            <p className="text-lg text-[var(--neutral-gray)] mb-8">
              Achetez sur Amazon, AliExpress, Shein et bien plus. Nous gérons l'import, 
              les douanes et la livraison partout au Cameroun.
            </p>
            <div className="flex gap-4">
              <Link
                to="/catalogue"
                className="px-6 py-3 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)]"
              >
                Explorer le catalogue
              </Link>
              <Link
                to="/comment-ca-marche"
                className="px-6 py-3 border border-[var(--border-gray)] rounded hover:bg-gray-50"
              >
                Comment ça marche
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-center mb-12">Comment ça fonctionne</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--background-light)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-[var(--primary-green)]" />
            </div>
            <h3 className="mb-2">1. Recherchez</h3>
            <p className="text-sm text-[var(--neutral-gray)]">
              Trouvez votre produit sur Amazon, AliExpress ou Shein
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--background-light)] rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-[var(--primary-green)]" />
            </div>
            <h3 className="mb-2">2. Payez en FCFA</h3>
            <p className="text-sm text-[var(--neutral-gray)]">
              Mobile Money, virement ou paiement à la livraison
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--background-light)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-[var(--primary-green)]" />
            </div>
            <h3 className="mb-2">3. On s'occupe de tout</h3>
            <p className="text-sm text-[var(--neutral-gray)]">
              Import, douanes et gestion administrative
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--background-light)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-[var(--primary-green)]" />
            </div>
            <h3 className="mb-2">4. Recevez chez vous</h3>
            <p className="text-sm text-[var(--neutral-gray)]">
              Livraison sécurisée partout au Cameroun
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[var(--background-light)] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2>Produits en vedette</h2>
            <Link to="/catalogue" className="text-[var(--primary-green)] hover:underline">
              Voir tout
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex items-center justify-between mb-12">
          <h2>Produits populaires</h2>
          <Link to="/catalogue" className="text-[var(--primary-green)] hover:underline">
            Voir tout
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-[var(--background-light)] border-t border-[var(--border-gray)] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="w-12 h-12 text-[var(--primary-green)] mx-auto mb-4" />
              <h3 className="mb-2">Paiement sécurisé</h3>
              <p className="text-sm text-[var(--neutral-gray)]">
                Transactions protégées et conformes aux normes locales
              </p>
            </div>
            <div>
              <Truck className="w-12 h-12 text-[var(--primary-green)] mx-auto mb-4" />
              <h3 className="mb-2">Livraison garantie</h3>
              <p className="text-sm text-[var(--neutral-gray)]">
                Suivi en temps réel jusqu'à votre porte
              </p>
            </div>
            <div>
              <Globe className="w-12 h-12 text-[var(--primary-green)] mx-auto mb-4" />
              <h3 className="mb-2">Support local</h3>
              <p className="text-sm text-[var(--neutral-gray)]">
                Équipe camerounaise disponible 7j/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-center mb-12">Ce que disent nos clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border border-[var(--border-gray)]">
            <div className="flex items-center mb-4">
              <div className="flex text-[var(--primary-green)]">
                ★★★★★
              </div>
              <span className="ml-2 text-sm text-[var(--neutral-gray)]">Marie D., Yaoundé</span>
            </div>
            <p className="text-sm">
              "Service exceptionnel ! J'ai commandé un téléphone sur Amazon et il a été livré à domicile en 10 jours. Le prix en FCFA était très avantageux."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-[var(--border-gray)]">
            <div className="flex items-center mb-4">
              <div className="flex text-[var(--primary-green)]">
                ★★★★★
              </div>
              <span className="ml-2 text-sm text-[var(--neutral-gray)]">Jean K., Douala</span>
            </div>
            <p className="text-sm">
              "Enfin une solution pour acheter à l'international sans complications. Le suivi en temps réel m'a tenu informé à chaque étape."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-[var(--border-gray)]">
            <div className="flex items-center mb-4">
              <div className="flex text-[var(--primary-green)]">
                ★★★★★
              </div>
              <span className="ml-2 text-sm text-[var(--neutral-gray)]">Sophie M., Bafoussam</span>
            </div>
            <p className="text-sm">
              "Parfait pour les cadeaux d'anniversaire. Livraison rapide et paiement sécurisé en Mobile Money. Je recommande !"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
