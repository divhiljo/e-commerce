import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Star, ShoppingCart, Package, Truck, Shield, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

export function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariations, setSelectedVariations] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h2>Produit non trouvé</h2>
        <Link to="/catalogue" className="text-[var(--primary-green)] hover:underline mt-8 inline-block">
          Retour au catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-[var(--neutral-gray)] mb-16">
        <Link to="/" className="hover:text-[var(--primary-green)]">Accueil</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/catalogue" className="hover:text-[var(--primary-green)]">Catalogue</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
        {/* Product Image */}
        <div>
          <div className="aspect-square bg-gray-100 rounded overflow-hidden mb-8">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-sm text-[var(--neutral-gray)]">
            Source: {product.platform}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-[var(--background-light)] text-sm rounded">
              {product.platform}
            </span>
          </div>

          <h1 className="mb-8">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-[var(--neutral-gray)]">
              {product.rating} ({product.reviews} avis)
            </span>
          </div>

          {/* Price Breakdown */}
          <div className="bg-[var(--background-light)] p-12 rounded mb-12">
            <div className="flex justify-between mb-3">
              <span className="text-[var(--neutral-gray)]">Prix produit</span>
              <span>{product.priceFCFA.toLocaleString('fr-FR')} FCFA</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="text-[var(--neutral-gray)]">Frais d'import & douanes</span>
              <span>{product.importFees.toLocaleString('fr-FR')} FCFA</span>
            </div>
            <div className="flex justify-between mb-4 pb-4 border-b border-[var(--border-gray)]">
              <span className="text-[var(--neutral-gray)]">Frais de livraison</span>
              <span>{product.deliveryFees.toLocaleString('fr-FR')} FCFA</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Prix total</span>
              <span className="text-2xl font-semibold text-[var(--primary-green)]">
                {product.totalPriceFCFA.toLocaleString('fr-FR')} FCFA
              </span>
            </div>
          </div>

          {/* Variations */}
          {product.variations && product.variations.map((variation) => (
            <div key={variation.type} className="mb-12">
              <h4 className="mb-6 capitalize">{variation.type === 'color' ? 'Couleur' : 'Taille'}</h4>
              <div className="flex flex-wrap gap-4">
                {variation.options.map((option) => (
                  <button
                    key={option}
                    onClick={() =>
                      setSelectedVariations({ ...selectedVariations, [variation.type]: option })
                    }
                    className={`px-4 py-2 border rounded ${
                      selectedVariations[variation.type] === option
                        ? 'border-[var(--primary-green)] bg-green-50 text-[var(--primary-green)]'
                        : 'border-[var(--border-gray)] hover:border-gray-400'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Quantity */}
          <div className="mb-12">
            <h4 className="mb-6">Quantité</h4>
            <div className="flex items-center gap-8">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-[var(--border-gray)] rounded hover:bg-gray-50"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-[var(--border-gray)] rounded hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <Link
            to="/panier"
            className="w-full px-6 py-4 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)] flex items-center justify-center gap-2 mb-8"
          >
            <ShoppingCart className="w-5 h-5" />
            Ajouter au panier
          </Link>

          {/* Delivery Info */}
          <div className="space-y-8 pt-12 border-t border-[var(--border-gray)]">
            <div className="flex items-start gap-3">
              <Package className="w-5 h-5 text-[var(--primary-green)] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm mb-1">Délai de livraison</div>
                <div className="text-sm text-[var(--neutral-gray)]">{product.estimatedDays}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-[var(--primary-green)] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm mb-1">Livraison partout au Cameroun</div>
                <div className="text-sm text-[var(--neutral-gray)]">
                  Douala, Yaoundé et toutes les régions
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-[var(--primary-green)] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm mb-1">Garantie qualité</div>
                <div className="text-sm text-[var(--neutral-gray)]">
                  Produits authentiques, remboursement si non-conformité
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <section className="border-t border-[var(--border-gray)] pt-24">
        <h2 className="mb-16">Avis clients</h2>
        <div className="space-y-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[var(--background-light)] p-12 rounded">
              <div className="flex items-center gap-8 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${
                        j < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold">Client {i}</span>
                <span className="text-sm text-[var(--neutral-gray)]">
                  Il y a {i * 2} jours
                </span>
              </div>
              <p className="text-[var(--neutral-gray)]">
                Très bon produit, conforme à la description. La livraison a pris un peu plus de temps 
                que prévu mais le suivi était précis.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
