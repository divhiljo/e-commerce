import { Link } from 'react-router';
import { Star } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/produit/${product.id}`}
      className="bg-white border border-[var(--border-gray)] rounded hover:shadow-md transition-shadow"
    >
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-xs text-[var(--neutral-gray)] mb-1">
          {product.platform}
        </div>
        <h3 className="text-sm mb-2 line-clamp-2 h-10">
          {product.title}
        </h3>
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-[var(--neutral-gray)]">
            ({product.reviews})
          </span>
        </div>
        <div className="mb-2">
          <div className="text-lg font-semibold">
            {product.totalPriceFCFA.toLocaleString('fr-FR')} FCFA
          </div>
          <div className="text-xs text-[var(--neutral-gray)]">
            Prix tout compris
          </div>
        </div>
        <div className="text-xs text-[var(--neutral-gray)]">
          Livraison: {product.estimatedDays}
        </div>
      </div>
    </Link>
  );
}
