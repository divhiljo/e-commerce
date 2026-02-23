import { Link } from 'react-router';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(255,248,231,0.88)] backdrop-blur-[18px] border-b border-[rgba(253,230,138,0.5)]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center relative">
              <ShoppingCart className="w-6 h-6 text-white" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
            </div>
            <span className="text-xl font-bold font-serif text-primary tracking-tight">dropshipCam</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-mid" />
            <Input
              type="search"
              placeholder="Rechercher un produit..."
              className="w-full pl-12 pr-4 py-3 bg-white border-[1.5px] border-savane-200 rounded-xl focus-visible:border-accent focus-visible:ring-[3px] focus-visible:ring-[rgba(217,119,6,0.15)] transition-all duration-200"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex bg-white border border-savane-100 text-text-mid hover:bg-ivoire hover:border-accent hover:text-primary transition-all duration-200"
            >
              <User className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative bg-white border border-savane-100 text-text-mid hover:bg-ivoire hover:border-accent hover:text-primary transition-all duration-200"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-xs rounded-full flex items-center justify-center text-white">
                3
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden bg-white border border-savane-100 text-text-mid"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-mid" />
          <Input
            type="search"
            placeholder="Rechercher..."
            className="w-full pl-12 pr-4 py-3 bg-white border-[1.5px] border-savane-200 rounded-xl focus-visible:border-accent"
          />
        </div>
      </div>
    </header>
  );
}