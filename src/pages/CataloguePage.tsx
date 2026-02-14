import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function CataloguePage() {
  const [searchParams] = useSearchParams();
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');

  const query = searchParams.get('q') || '';
  const categoryParam = searchParams.get('cat') || '';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search query
    if (query) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Category from URL or filter
    const activeCategory = categoryParam || selectedCategory;
    if (activeCategory && activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    // Platform filter
    if (selectedPlatform !== 'all') {
      filtered = filtered.filter((p) => p.platform === selectedPlatform);
    }

    // Price range filter
    if (priceRange === 'low') {
      filtered = filtered.filter((p) => p.totalPriceFCFA < 50000);
    } else if (priceRange === 'medium') {
      filtered = filtered.filter(
        (p) => p.totalPriceFCFA >= 50000 && p.totalPriceFCFA < 200000
      );
    } else if (priceRange === 'high') {
      filtered = filtered.filter((p) => p.totalPriceFCFA >= 200000);
    }

    // Sorting
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.totalPriceFCFA - b.totalPriceFCFA);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.totalPriceFCFA - a.totalPriceFCFA);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [query, categoryParam, selectedCategory, selectedPlatform, priceRange, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex gap-16">
        {/* Filters Sidebar */}
        <aside className="w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="flex items-center gap-2 mb-12">
              <SlidersHorizontal className="w-5 h-5" />
              <h3>Filtres</h3>
            </div>

            {/* Platform filter */}
            <div className="mb-12">
              <h4 className="mb-6">Plateforme</h4>
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="platform"
                    checked={selectedPlatform === 'all'}
                    onChange={() => setSelectedPlatform('all')}
                    className="accent-[var(--primary-green)]"
                  />
                  Toutes
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="platform"
                    checked={selectedPlatform === 'Amazon'}
                    onChange={() => setSelectedPlatform('Amazon')}
                    className="accent-[var(--primary-green)]"
                  />
                  Amazon
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="platform"
                    checked={selectedPlatform === 'AliExpress'}
                    onChange={() => setSelectedPlatform('AliExpress')}
                    className="accent-[var(--primary-green)]"
                  />
                  AliExpress
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="platform"
                    checked={selectedPlatform === 'Shein'}
                    onChange={() => setSelectedPlatform('Shein')}
                    className="accent-[var(--primary-green)]"
                  />
                  Shein
                </label>
              </div>
            </div>

            {/* Category filter */}
            <div className="mb-12">
              <h4 className="mb-6">Catégorie</h4>
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'all' && !categoryParam}
                    onChange={() => setSelectedCategory('all')}
                    className="accent-[var(--primary-green)]"
                  />
                  Toutes
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'electronics' || categoryParam === 'electronics'}
                    onChange={() => setSelectedCategory('electronics')}
                    className="accent-[var(--primary-green)]"
                  />
                  Électronique
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'fashion' || categoryParam === 'fashion'}
                    onChange={() => setSelectedCategory('fashion')}
                    className="accent-[var(--primary-green)]"
                  />
                  Mode
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'beauty' || categoryParam === 'beauty'}
                    onChange={() => setSelectedCategory('beauty')}
                    className="accent-[var(--primary-green)]"
                  />
                  Beauté
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'sports' || categoryParam === 'sports'}
                    onChange={() => setSelectedCategory('sports')}
                    className="accent-[var(--primary-green)]"
                  />
                  Sports
                </label>
              </div>
            </div>

            {/* Price range */}
            <div className="mb-12">
              <h4 className="mb-6">Prix</h4>
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange === 'all'}
                    onChange={() => setPriceRange('all')}
                    className="accent-[var(--primary-green)]"
                  />
                  Tous les prix
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange === 'low'}
                    onChange={() => setPriceRange('low')}
                    className="accent-[var(--primary-green)]"
                  />
                  Moins de 50 000 FCFA
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange === 'medium'}
                    onChange={() => setPriceRange('medium')}
                    className="accent-[var(--primary-green)]"
                  />
                  50 000 - 200 000 FCFA
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange === 'high'}
                    onChange={() => setPriceRange('high')}
                    className="accent-[var(--primary-green)]"
                  />
                  Plus de 200 000 FCFA
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="mb-4">
                {query ? `Résultats pour "${query}"` : 'Catalogue'}
              </h2>
              <p className="text-sm text-[var(--neutral-gray)]">
                {filteredProducts.length} produits
              </p>
            </div>
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:border-[var(--primary-green)]"
              >
                <option value="popular">Plus populaires</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="rating">Meilleures notes</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32">
              <p className="text-[var(--neutral-gray)] mb-4">
                Aucun produit ne correspond à vos critères
              </p>
              <button
                onClick={() => {
                  setSelectedPlatform('all');
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="text-[var(--primary-green)] hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
