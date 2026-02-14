import { Link, useNavigate } from 'react-router';
import { Search, ShoppingCart, User, Package } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalogue?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white border-b border-[var(--border-gray)] sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[var(--background-light)] border-b border-[var(--border-gray)]">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="text-[var(--neutral-gray)]">
              Livraison partout au Cameroun
            </div>
            <div className="flex items-center gap-6">
              <Link to="/suivi" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                Suivre ma commande
              </Link>
              <Link to="/admin" className="text-[var(--neutral-gray)] hover:text-[var(--primary-green)]">
                Aide
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <Package className="w-8 h-8 text-[var(--primary-green)]" />
              <span className="text-xl font-semibold">ShopGlobal.cm</span>
            </div>
          </Link>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un produit (Amazon, AliExpress, Shein...)"
                className="w-full px-4 py-2.5 pr-12 border border-[var(--border-gray)] rounded focus:outline-none focus:border-[var(--primary-green)] focus:ring-1 focus:ring-[var(--primary-green)]"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 bg-[var(--primary-green)] text-white rounded-r hover:bg-[var(--primary-green-dark)]"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/compte"
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded"
            >
              <User className="w-5 h-5" />
              <span className="text-sm">Compte</span>
            </Link>
            <Link
              to="/panier"
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded relative"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm">Panier</span>
              <span className="absolute -top-1 -right-1 bg-[var(--primary-green)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-[var(--border-gray)]">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-8 py-3 text-sm">
            <Link to="/catalogue?cat=electronics" className="hover:text-[var(--primary-green)]">
              Électronique
            </Link>
            <Link to="/catalogue?cat=fashion" className="hover:text-[var(--primary-green)]">
              Mode & Vêtements
            </Link>
            <Link to="/catalogue?cat=beauty" className="hover:text-[var(--primary-green)]">
              Beauté & Santé
            </Link>
            <Link to="/catalogue?cat=home" className="hover:text-[var(--primary-green)]">
              Maison & Jardin
            </Link>
            <Link to="/catalogue?cat=sports" className="hover:text-[var(--primary-green)]">
              Sports & Loisirs
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
