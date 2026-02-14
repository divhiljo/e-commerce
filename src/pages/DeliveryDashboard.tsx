import { useState } from 'react';
import { Truck, MapPin, CheckCircle, Clock, Package, Navigation } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function DeliveryDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Livraisons du jour', value: '12', icon: Truck, change: '8 restantes' },
    { label: 'Livraisons terminées', value: '4', icon: CheckCircle, change: '33%' },
    { label: 'Distance parcourue', value: '45 km', icon: Navigation, change: 'Aujourd\'hui' },
    { label: 'Revenus', value: '24,000 FCFA', icon: Package, change: '+15%' },
  ];

  const deliveries = [
    {
      id: 'LIV-2026-001234',
      customer: 'Jean K.',
      address: 'Rue de la Paix, Yaoundé',
      zone: 'Centre-ville',
      amount: 176810,
      status: 'À livrer',
      estimatedTime: '14:30',
      phone: '+237 6XX XXX XXX'
    },
    {
      id: 'LIV-2026-001235',
      customer: 'Marie T.',
      address: 'Avenue Kennedy, Douala',
      zone: 'Plateau',
      amount: 835310,
      status: 'En cours',
      estimatedTime: '15:00',
      phone: '+237 6XX XXX XXX'
    },
    {
      id: 'LIV-2026-001236',
      customer: 'Paul N.',
      address: 'Boulevard de la Liberté, Bafoussam',
      zone: 'Centre',
      amount: 108500,
      status: 'Livré',
      estimatedTime: '13:15',
      phone: '+237 6XX XXX XXX'
    },
  ];

  const zones = [
    { name: 'Centre-ville Yaoundé', deliveries: 5, completed: 2 },
    { name: 'Plateau Douala', deliveries: 4, completed: 1 },
    { name: 'Centre Bafoussam', deliveries: 3, completed: 3 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Livré':
        return 'text-[var(--primary-green)] bg-green-50';
      case 'En cours':
        return 'text-blue-700 bg-blue-50';
      case 'À livrer':
        return 'text-yellow-700 bg-yellow-50';
      default:
        return 'text-gray-700 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Livré':
        return <CheckCircle className="w-4 h-4" />;
      case 'En cours':
        return <Navigation className="w-4 h-4" />;
      case 'À livrer':
        return <Clock className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl font-semibold mb-4">Tableau de bord livreur</h1>
        <p className="text-[var(--neutral-gray)]">Gérez vos livraisons et optimisez vos tournées</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="deliveries">Livraisons</TabsTrigger>
          <TabsTrigger value="zones">Par zone</TabsTrigger>
          <TabsTrigger value="history">Historique</TabsTrigger>
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

          {/* Today's Deliveries */}
          <div className="bg-white rounded-lg border border-[var(--border-gray)]">
            <div className="p-12 border-b border-[var(--border-gray)]">
              <h2 className="text-lg font-semibold">Livraisons du jour</h2>
            </div>
            <div className="divide-y divide-[var(--border-gray)]">
              {deliveries.map((delivery) => (
                <div key={delivery.id} className="p-12">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(delivery.status)}
                      <div>
                        <h3 className="font-medium">{delivery.customer}</h3>
                        <p className="text-sm text-[var(--neutral-gray)]">{delivery.id}</p>
                      </div>
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(delivery.status)}`}>
                      {delivery.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[var(--neutral-gray)]" />
                      <span>{delivery.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-[var(--neutral-gray)]" />
                      <span>{delivery.amount.toLocaleString()} FCFA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[var(--neutral-gray)]" />
                      <span>Livraison estimée: {delivery.estimatedTime}</span>
                    </div>
                  </div>
                  {delivery.status === 'À livrer' && (
                    <div className="mt-4 flex gap-2">
                      <button className="px-4 py-2 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)] text-sm">
                        Commencer la livraison
                      </button>
                      <button className="px-4 py-2 border border-[var(--border-gray)] rounded hover:bg-gray-50 text-sm">
                        Appeler le client
                      </button>
                    </div>
                  )}
                  {delivery.status === 'En cours' && (
                    <div className="mt-4 flex gap-2">
                      <button className="px-4 py-2 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)] text-sm">
                        Confirmer la livraison
                      </button>
                      <button className="px-4 py-2 border border-red-300 text-red-600 rounded hover:bg-red-50 text-sm">
                        Signaler un problème
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="deliveries" className="space-y-12">
          <h2 className="text-lg font-semibold">Toutes mes livraisons</h2>
          <div className="bg-white rounded-lg border border-[var(--border-gray)] overflow-hidden">
            <table className="w-full">
              <thead className="bg-[var(--background-light)]">
                <tr>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Livraison
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Adresse
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Zone
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
                {deliveries.map((delivery) => (
                  <tr key={delivery.id}>
                    <td className="px-12 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                      {delivery.id}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-[var(--neutral-gray)]">
                      {delivery.customer}
                    </td>
                    <td className="px-12 py-6 text-sm text-[var(--neutral-gray)] max-w-xs truncate">
                      {delivery.address}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-gray-900">
                      {delivery.zone}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(delivery.status)}`}>
                        {delivery.status}
                      </span>
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm font-medium">
                      {delivery.status === 'À livrer' && (
                        <button className="text-[var(--primary-green)] hover:text-[var(--primary-green-dark)]">
                          Démarrer
                        </button>
                      )}
                      {delivery.status === 'En cours' && (
                        <button className="text-[var(--primary-green)] hover:text-[var(--primary-green-dark)]">
                          Terminer
                        </button>
                      )}
                      {delivery.status === 'Livré' && (
                        <span className="text-[var(--neutral-gray)]">Terminée</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="zones" className="space-y-12">
          <h2 className="text-lg font-semibold">Livraisons par zone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {zones.map((zone, index) => (
              <div key={index} className="bg-white p-12 rounded-lg border border-[var(--border-gray)]">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-[var(--primary-green)]" />
                  <h3 className="font-medium">{zone.name}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Total livraisons</span>
                    <span className="font-medium">{zone.deliveries}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Terminées</span>
                    <span className="font-medium text-[var(--primary-green)]">{zone.completed}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Restantes</span>
                    <span className="font-medium">{zone.deliveries - zone.completed}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-[var(--background-light)] rounded-full h-2">
                    <div
                      className="bg-[var(--primary-green)] h-2 rounded-full"
                      style={{ width: `${(zone.completed / zone.deliveries) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-[var(--neutral-gray)] mt-1">
                    {Math.round((zone.completed / zone.deliveries) * 100)}% complété
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-12">
          <h2 className="text-lg font-semibold">Historique des livraisons</h2>
          <div className="bg-white rounded-lg border border-[var(--border-gray)] overflow-hidden">
            <table className="w-full">
              <thead className="bg-[var(--background-light)]">
                <tr>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-12 py-6 text-left text-xs font-medium text-[var(--neutral-gray)] uppercase tracking-wider">
                    Livraison
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
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[var(--border-gray)]">
                {[
                  { date: '2026-02-04', id: 'LIV-2026-001230', customer: 'Sophie M.', amount: 50920, status: 'Livré' },
                  { date: '2026-02-04', id: 'LIV-2026-001229', customer: 'Luc B.', amount: 125000, status: 'Livré' },
                  { date: '2026-02-03', id: 'LIV-2026-001228', customer: 'Anna K.', amount: 78000, status: 'Livré' },
                  { date: '2026-02-03', id: 'LIV-2026-001227', customer: 'David R.', amount: 234000, status: 'Livré' },
                  { date: '2026-02-02', id: 'LIV-2026-001226', customer: 'Marie L.', amount: 156000, status: 'Livré' },
                ].map((delivery, index) => (
                  <tr key={index}>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-[var(--neutral-gray)]">
                      {delivery.date}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                      {delivery.id}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-[var(--neutral-gray)]">
                      {delivery.customer}
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap text-sm text-gray-900">
                      {delivery.amount.toLocaleString()} FCFA
                    </td>
                    <td className="px-12 py-6 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(delivery.status)}`}>
                        {delivery.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
