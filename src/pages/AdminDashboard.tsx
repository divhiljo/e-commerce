import { useState } from 'react';
import { Package, DollarSign, TrendingUp, Users, ShoppingCart, Truck, AlertCircle, BarChart3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Commandes totales', value: '1,247', icon: ShoppingCart, change: '+12.5%', color: 'text-blue-600' },
    { label: 'Revenus (FCFA)', value: '486M', icon: DollarSign, change: '+8.2%', color: 'text-green-600' },
    { label: 'Taux de conversion', value: '3.24%', icon: TrendingUp, change: '+0.4%', color: 'text-purple-600' },
    { label: 'Clients actifs', value: '892', icon: Users, change: '+15.3%', color: 'text-orange-600' },
  ];

  const recentOrders = [
    {
      id: 'CM-2026-001234',
      customer: 'Jean K.',
      amount: 176810,
      status: 'En transit',
      date: '2026-02-03',
    },
    {
      id: 'CM-2026-001233',
      customer: 'Marie T.',
      amount: 835310,
      status: 'Dédouanement',
      date: '2026-02-04',
    },
    {
      id: 'CM-2026-001232',
      customer: 'Paul N.',
      amount: 108500,
      status: 'Livré',
      date: '2026-02-03',
    },
    {
      id: 'CM-2026-001231',
      customer: 'Sophie M.',
      amount: 50920,
      status: 'En transit',
      date: '2026-02-03',
    },
  ];

  const products = [
    { id: 1, name: 'iPhone 15 Pro', platform: 'Amazon', price: 850000, stock: 5, status: 'Actif' },
    { id: 2, name: 'MacBook Air M3', platform: 'Amazon', price: 1200000, stock: 2, status: 'Actif' },
    { id: 3, name: 'Nike Air Max', platform: 'AliExpress', price: 75000, stock: 15, status: 'Actif' },
  ];

  const users = [
    { id: 1, name: 'Jean K.', email: 'jean@example.com', role: 'Client', status: 'Actif', joinDate: '2026-01-15' },
    { id: 2, name: 'Marie T.', email: 'marie@example.com', role: 'Client', status: 'Actif', joinDate: '2026-01-20' },
    { id: 3, name: 'Paul N.', email: 'paul@example.com', role: 'Fournisseur', status: 'Actif', joinDate: '2026-01-10' },
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
        <h1 className="text-2xl font-semibold mb-4">Tableau de bord administrateur</h1>
        <p className="text-[var(--neutral-gray)]">Gérez votre plateforme e-commerce internationale</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="products">Produits</TabsTrigger>
          <TabsTrigger value="orders">Commandes</TabsTrigger>
          <TabsTrigger value="users">Utilisateurs</TabsTrigger>
          <TabsTrigger value="analytics">Analyses</TabsTrigger>
          <TabsTrigger value="settings">Paramètres</TabsTrigger>
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
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
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
                      Client
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
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-12 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.id}
                      </td>
                      <td className="px-12 py-6 whitespace-nowrap text-sm text-[var(--neutral-gray)]">
                        {order.customer}
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
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-12">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Gestion des produits</h2>
            <button className="px-4 py-2 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)]">
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
                    Plateforme
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Prix
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Stock
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
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-[var(--neutral-gray)]">
                      {product.platform}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-gray-900">
                      {product.price.toLocaleString()} FCFA
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-gray-900">
                      {product.stock}
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
          <h2 className="text-lg font-semibold">Gestion des commandes</h2>
          <div className="bg-white p-12 rounded-lg border border-[var(--border-gray)]">
            <p className="text-[var(--neutral-gray)]">Interface de gestion des commandes à implémenter</p>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-12">
          <h2 className="text-lg font-semibold">Gestion des utilisateurs</h2>
          <div className="bg-white rounded-lg border border-[var(--border-gray)] overflow-hidden">
            <table className="w-full">
              <thead className="bg-[var(--background-light)]">
                <tr>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Utilisateur
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Rôle
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Date d'inscription
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[var(--border-gray)]">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-12 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-[var(--neutral-gray)]">
                      {user.email}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-gray-900">
                      {user.role}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-[var(--neutral-gray)]">
                      {user.joinDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-12">
          <h2 className="text-lg font-semibold">Analyses et performances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-lg border border-[var(--border-gray)]">
              <h3 className="text-lg font-medium mb-8">Revenus mensuels</h3>
              <BarChart3 className="w-12 h-12 text-[var(--primary-green)] mx-auto mb-8" />
              <p className="text-center text-2xl font-semibold">48.6M FCFA</p>
              <p className="text-center text-sm text-[var(--neutral-gray)]">+8.2% vs mois dernier</p>
            </div>
            <div className="bg-white p-12 rounded-lg border border-[var(--border-gray)]">
              <h3 className="text-lg font-medium mb-8">Performance produits</h3>
              <TrendingUp className="w-12 h-12 text-[var(--primary-green)] mx-auto mb-8" />
              <p className="text-center text-2xl font-semibold">85%</p>
              <p className="text-center text-sm text-[var(--neutral-gray)]">Taux de satisfaction</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-12">
          <h2 className="text-lg font-semibold">Paramètres système</h2>
          <div className="bg-white p-12 rounded-lg border border-[var(--border-gray)]">
            <p className="text-[var(--neutral-gray)]">Paramètres système à implémenter</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
