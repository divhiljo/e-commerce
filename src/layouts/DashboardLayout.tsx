import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import {
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  Settings,
  LogOut,
  Menu,
  X,
  BarChart3,
  Truck,
  FileText,
  CreditCard
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface DashboardLayoutProps {
  role: 'admin' | 'supplier' | 'delivery';
}

export function DashboardLayout({ role }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const adminNavigation: SidebarItem[] = [
    { name: 'Tableau de bord', href: '/admin', icon: BarChart3 },
    { name: 'Produits', href: '/admin/produits', icon: Package },
    { name: 'Commandes', href: '/admin/commandes', icon: ShoppingCart },
    { name: 'Utilisateurs', href: '/admin/utilisateurs', icon: Users },
    { name: 'Group Orders', href: '/admin/group-orders', icon: FileText },
    { name: 'Paiements', href: '/admin/paiements', icon: CreditCard },
    { name: 'Paramètres', href: '/admin/parametres', icon: Settings },
  ];

  const supplierNavigation: SidebarItem[] = [
    { name: 'Tableau de bord', href: '/fournisseur', icon: BarChart3 },
    { name: 'Mes produits', href: '/fournisseur/produits', icon: Package },
    { name: 'Commandes', href: '/fournisseur/commandes', icon: ShoppingCart },
    { name: 'Performance', href: '/fournisseur/performance', icon: TrendingUp },
    { name: 'Paramètres', href: '/fournisseur/parametres', icon: Settings },
  ];

  const deliveryNavigation: SidebarItem[] = [
    { name: 'Tableau de bord', href: '/livreur', icon: BarChart3 },
    { name: 'Livraisons', href: '/livreur/livraisons', icon: Truck },
    { name: 'Historique', href: '/livreur/historique', icon: FileText },
    { name: 'Paramètres', href: '/livreur/parametres', icon: Settings },
  ];

  const navigation = role === 'admin' ? adminNavigation :
                     role === 'supplier' ? supplierNavigation :
                     deliveryNavigation;

  return (
    <div className="min-h-screen bg-[var(--background-light)]">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="relative flex w-full max-w-xs flex-col bg-white">
            <SidebarContent navigation={navigation} location={location} onClose={() => setSidebarOpen(false)} role={role} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <SidebarContent navigation={navigation} location={location} role={role} />
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-10 bg-white border-b border-[var(--border-gray)]">
          <div className="flex h-16 items-center px-4">
            <button
              type="button"
              className="lg:hidden text-[var(--neutral-gray)] hover:text-gray-900"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-1" />
            <div className="flex items-center gap-4">
              <span className="text-sm text-[var(--neutral-gray)]">
                {role === 'admin' ? 'Administrateur' :
                 role === 'supplier' ? 'Fournisseur' : 'Livreur'}
              </span>
              <button className="text-[var(--neutral-gray)] hover:text-gray-900">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function SidebarContent({
  navigation,
  location,
  onClose,
  role
}: {
  navigation: SidebarItem[];
  location: any;
  onClose?: () => void;
  role: string;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-white border-r border-[var(--border-gray)]">
      {/* Logo */}
      <div className="flex h-16 items-center px-4 border-b border-[var(--border-gray)]">
        <Link to="/" className="flex items-center gap-2" onClick={onClose}>
          <div className="w-8 h-8 bg-[var(--primary-green)] rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">SG</span>
          </div>
          <span className="text-lg font-semibold">ShopGlobal</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[var(--primary-green)] text-white'
                  : 'text-[var(--neutral-gray)] hover:bg-[var(--background-light)] hover:text-gray-900'
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-[var(--border-gray)] p-4">
        <p className="text-xs text-[var(--neutral-gray)] text-center">
          © 2026 ShopGlobal.cm
        </p>
      </div>
    </div>
  );
}
