import { useState } from 'react';
import { Package, ShoppingCart, TrendingUp, DollarSign, MessageSquare, Plus } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function SupplierDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Produits actifs', value: '24', icon: Package, change: '+3 ce mois' },
    { label: 'Commandes', value: '156', icon: ShoppingCart, change: '+12.5%' },
    { label: 'Revenus', value: '2.4M FCFA', icon: DollarSign, change: '+8.2%' },
    { label: 'Taux de conversion', value: '78%', icon: TrendingUp, change: '+5.1%' },
  ];

  const products = [
    { id: 1, name: 'iPhone 15 Pro', price: 850000, stock: 5, sales: 23, status: 'Actif' },
    { id: 2, name: 'MacBook Air M3', price: 1200000, stock: 2, sales: 8, status: 'Actif' },
    { id: 3, name: 'Nike Air Max', price: 75000, stock: 15, sales: 45, status: 'Actif' },
  ];

  const orders = [
    { id: 'CM-2026-001234', product: 'iPhone 15 Pro', quantity: 1, amount: 850000, status: 'En transit', date: '2026-02-05' },
    { id: 'CM-2026-001233', product: 'Nike Air Max', quantity: 2, amount: 150000, status: 'Dédouanement', date: '2026-02-04' },
    { id: 'CM-2026-001232', product: 'MacBook Air M3', quantity: 1, amount: 1200000, status: 'Livré', date: '2026-02-03' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Livré':
      case 'Actif':
        return 'text-[var(--primary-green)] bg-green-50';
      case 'En transit':
        return 'text-blue-700 bg-blue-50';
      case 'Dédouanement':
        return 'text-yellow-700 bg-yellow-50';
      default:
        return 'text-gray-700 bg-gray-50';
    }
  };

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl font-semibold mb-4">Tableau de bord fournisseur</h1>
        <p className="text-[var(--neutral-gray)]">Gérez vos produits et suivez vos ventes</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="products">Mes produits</TabsTrigger>
          <TabsTrigger value="orders">Commandes</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-12">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-12 rounded-lg border border-[var(--border-gray)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--neutral-gray)]">{stat.label}</p>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-[var(--primary-green)]" />
                </div>
                <p className="text-sm text-[var(--primary-green)] mt-2">{stat.change}</p>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg border border-[var(--border-gray)]">
            <div className="p-12 border-b border-[var(--border-gray)]">
              <h2 className="text-lg font-semibold">Commandes récentes</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[var(--background-light)]">
                  <tr>
                    <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                      Commande
                    </th>
                    <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                      Produit
                    </th>
                    <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                      Quantité
                    </th>
                    <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                      Montant
                    </th>
                    <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                      Statut
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[var(--border-gray)]">
                  {orders.slice(0, 3).map((order) => (
                    <tr key={order.id}>
                      <td className="px-12 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.id}
                      </td>
                      <td className="px-12 py-6 whitespace-nowrap text-sm text-[var(--neutral-gray)]">
                        {order.product}
                      </td>
                      <td className="px-12 py-6 whitespace-nowrap text-sm text-gray-900">
                        {order.quantity}
                      </td>
                      <td className="px-12 py-6 whitespace-nowrap text-sm text-gray-900">
                        {order.amount.toLocaleString()} FCFA
                      </td>
                      <td className="px-12 py-6 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-12">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Mes produits</h2>
            <button className="px-4 py-2 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)] flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Ajouter un produit
            </button>
          </div>

          <div className="bg-white rounded-lg border border-[var(--border-gray)] overflow-hidden">
            <table className="w-full">
              <thead className="bg-[var(--background-light)]">
                <tr>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Produit
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Prix
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Ventes
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[var(--border-gray)]">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-12 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-gray-900">
                      {product.price.toLocaleString()} FCFA
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-gray-900">
                      {product.stock}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-gray-900">
                      {product.sales}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(product.status)}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm font-medium">
                      <button className="text-[var(--primary-green)] hover:text-[var(--primary-green-dark)] mr-4">
                        Modifier
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="orders" className="space-y-12">
          <h2 className="text-lg font-semibold">Commandes de mes produits</h2>
          <div className="bg-white rounded-lg border border-[var(--border-gray)] overflow-hidden">
            <table className="w-full">
              <thead className="bg-[var(--background-light)]">
                <tr>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Commande
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Produit
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Quantité
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Montant
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[var(--border-gray)]">
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-12 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-[var(--neutral-gray)]">
                      {order.product}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-gray-900">
                      {order.quantity}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-gray-900">
                      {order.amount.toLocaleString()} FCFA
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-[var(--neutral-gray)]">
                      {order.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-12">
          <h2 className="text-lg font-semibold">Performance de ventes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-lg border border-[var(--border-gray)]">
              <h3 className="text-lg font-medium mb-8">Revenus ce mois</h3>
              <DollarSign className="w-12 h-12 text-[var(--primary-green)] mx-auto mb-8" />
              <p className="text-center text-2xl font-semibold">2.4M FCFA</p>
              <p className="text-center text-sm text-[var(--neutral-gray)]">+8.2% vs mois dernier</p>
            </div>
            <div className="bg-white p-12 rounded-lg border border-[var(--border-gray)]">
              <h3 className="text-lg font-medium mb-8">Produits les plus vendus</h3>
              <TrendingUp className="w-12 h-12 text-[var(--primary-green)] mx-auto mb-8" />
              <p className="text-center text-2xl font-semibold">Nike Air Max</p>
              <p className="text-center text-sm text-[var(--neutral-gray)]">45 unités vendues</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="messages" className="space-y-12">
          <h2 className="text-lg font-semibold">Messagerie avec l'administration</h2>
          <div className="bg-white p-12 rounded-lg border border-[var(--border-gray)]">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-[var(--primary-green)]" />
              <span className="font-medium">Conversation avec l'admin</span>
            </div>
            <div className="space-y-3 mb-4">
              <div className="bg-[var(--background-light)] p-3 rounded">
                <p className="text-sm">Admin: Votre produit iPhone 15 Pro a été approuvé.</p>
                <p className="text-xs text-[var(--neutral-gray)] mt-1">2026-02-05 14:30</p>
              </div>
              <div className="bg-[var(--primary-green)] text-white p-3 rounded ml-12">
                <p className="text-sm">Merci pour l'approbation !</p>
                <p className="text-xs opacity-75 mt-1">2026-02-05 14:35</p>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Tapez votre message..."
                className="flex-1 px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
              />
              <button className="px-4 py-2 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)]">
                Envoyer
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
