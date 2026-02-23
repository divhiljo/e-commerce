import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { products, categories } from '../lib/data';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';

export default function Catalogue() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>('all');

  const filteredProducts = products.filter((product) => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    if (selectedPlatforms.length > 0 && !selectedPlatforms.includes(product.platform)) {
      return false;
    }
    if (priceRange === 'low' && product.price > 50000) return false;
    if (priceRange === 'mid' && (product.price < 50000 || product.price > 150000)) return false;
    if (priceRange === 'high' && product.price < 150000) return false;
    return true;
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <div className="min-h-screen bg-ivoire">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-normal tracking-tight mb-4 text-text-dark">
            Notre Catalogue
          </h1>
          <p className="text-text-light text-lg font-sans">
            {filteredProducts.length} produits disponibles
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="w-full rounded-xl bg-white border-savane-100 hover:bg-ivoire hover:border-accent"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filtres
          </Button>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside
            className={`
              ${showFilters ? 'block' : 'hidden'} lg:block
              fixed lg:sticky top-0 left-0 right-0 bottom-0 lg:top-24 z-40
              bg-ivoire lg:bg-transparent p-6 lg:p-0
              overflow-y-auto lg:overflow-visible
              lg:w-64 lg:h-fit
            `}
          >
            <div className="lg:bg-white/60 lg:border lg:border-savane-100 lg:p-6 lg:rounded-[24px] space-y-8">
              {/* Mobile Close Button */}
              <div className="lg:hidden flex justify-between items-center mb-6">
                <h3 className="font-semibold font-sans text-text-dark">Filtres</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowFilters(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Categories */}
              <div className="space-y-4">
                <h3 className="font-semibold font-sans text-text-dark">Catégories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={selectedCategories.includes(category.name)}
                        onCheckedChange={() => toggleCategory(category.name)}
                      />
                      <Label
                        htmlFor={`category-${category.id}`}
                        className="text-sm cursor-pointer font-sans text-text-mid"
                      >
                        {category.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platforms */}
              <div className="space-y-4">
                <h3 className="font-semibold font-sans text-text-dark">Plateforme</h3>
                <div className="space-y-3">
                  {['aliexpress', 'shein', 'amazon'].map((platform) => (
                    <div key={platform} className="flex items-center space-x-2">
                      <Checkbox
                        id={`platform-${platform}`}
                        checked={selectedPlatforms.includes(platform)}
                        onCheckedChange={() => togglePlatform(platform)}
                      />
                      <Label
                        htmlFor={`platform-${platform}`}
                        className="text-sm cursor-pointer capitalize font-sans text-text-mid"
                      >
                        {platform}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-4">
                <h3 className="font-semibold font-sans text-text-dark">Prix</h3>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="rounded-xl bg-white border-savane-100">
                    <SelectValue placeholder="Tous les prix" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les prix</SelectItem>
                    <SelectItem value="low">Moins de 50 000 FCFA</SelectItem>
                    <SelectItem value="mid">50 000 - 150 000 FCFA</SelectItem>
                    <SelectItem value="high">Plus de 150 000 FCFA</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Clear Filters */}
              {(selectedCategories.length > 0 ||
                selectedPlatforms.length > 0 ||
                priceRange !== 'all') && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedPlatforms([]);
                    setPriceRange('all');
                  }}
                  className="w-full text-primary hover:text-accent"
                >
                  Réinitialiser
                </Button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={`/produit/${product.id}`} className="group block">
                    <div className="relative rounded-[18px] overflow-hidden aspect-square mb-4 bg-card-bg border border-savane-100 group-hover:border-savane-200 group-hover:shadow-[0_20px_60px_rgba(146,64,14,0.15)] group-hover:-translate-y-2 group-hover:scale-[1.01] transition-all duration-[350ms] cubic-bezier(0.34,1.56,0.64,1)">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm shadow-sm font-sans text-text-mid">
                        {product.deliveryDays}j
                      </div>
                      <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs uppercase font-semibold font-sans tracking-wider">
                        {product.platform}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-primary uppercase tracking-wider font-bold font-sans">
                        {product.category}
                      </p>
                      <h3 className="font-semibold text-text-dark group-hover:text-primary transition line-clamp-2 font-sans">
                        {product.name}
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-serif font-black text-text-dark">
                          {product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-text-light font-sans">FCFA</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-text-light font-sans">
                        <div className="flex items-center">
                          <span className="text-accent">★</span>
                          <span className="ml-1">{product.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{product.reviews} avis</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-text-light text-lg font-sans">
                  Aucun produit ne correspond à vos critères.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedPlatforms([]);
                    setPriceRange('all');
                  }}
                  className="mt-4 bg-white border-savane-100 hover:bg-ivoire hover:border-accent"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
