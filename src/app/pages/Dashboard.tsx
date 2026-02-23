import { motion } from 'motion/react';
import {
  Package,
  TrendingUp,
  ShoppingBag,
  DollarSign,
  Users,
  Clock,
} from 'lucide-react';
import { orderStats, chartData, platformData } from '../lib/data';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-ivoire/50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-savane-100 p-6 hidden lg:block">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold font-serif text-primary">Admin</span>
          </div>
          <nav className="space-y-2">
            {[
              { icon: Package, label: 'Dashboard', active: true },
              { icon: ShoppingBag, label: 'Commandes', active: false },
              { icon: Users, label: 'Clients', active: false },
              { icon: TrendingUp, label: 'Analytiques', active: false },
            ].map((item, i) => (
              <button
                key={i}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition font-sans ${
                  item.active
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-text-mid hover:bg-ivoire'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-normal tracking-tight mb-2 text-text-dark">
              Dashboard
            </h1>
            <p className="text-text-light font-sans">
              Vue d'ensemble de votre activité
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {orderStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-savane-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    {index === 0 && <Package className="w-6 h-6 text-primary" />}
                    {index === 1 && <Clock className="w-6 h-6 text-primary" />}
                    {index === 2 && <ShoppingBag className="w-6 h-6 text-primary" />}
                    {index === 3 && <DollarSign className="w-6 h-6 text-primary" />}
                  </div>
                  <span
                    className={`text-sm font-semibold font-sans ${
                      stat.change >= 0 ? 'text-accent' : 'text-red'
                    }`}
                  >
                    {stat.change >= 0 ? '+' : ''}
                    {stat.change}%
                  </span>
                </div>
                <p className="text-sm text-text-light mb-1 font-sans">{stat.label}</p>
                <p className="text-2xl font-serif font-normal text-text-dark">
                  {index === 3
                    ? `${(stat.value / 1000000).toFixed(1)}M`
                    : stat.value.toLocaleString()}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl border border-savane-100"
            >
              <h3 className="font-semibold mb-6 font-sans text-text-dark">Évolution des revenus</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#FDE68A" />
                  <XAxis
                    dataKey="month"
                    stroke="#9A7B5A"
                    style={{ fontSize: '12px', fontFamily: 'Plus Jakarta Sans' }}
                  />
                  <YAxis
                    stroke="#9A7B5A"
                    style={{ fontSize: '12px', fontFamily: 'Plus Jakarta Sans' }}
                    tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #FDE68A',
                      borderRadius: '12px',
                      fontFamily: 'Plus Jakarta Sans',
                    }}
                    formatter={(value: number) => [
                      `${value.toLocaleString()} FCFA`,
                      'Revenus',
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenus"
                    stroke="#92400E"
                    strokeWidth={3}
                    dot={{ fill: '#92400E', r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Orders Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl border border-savane-100"
            >
              <h3 className="font-semibold mb-6 font-sans text-text-dark">Commandes mensuelles</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#FDE68A" />
                  <XAxis
                    dataKey="month"
                    stroke="#9A7B5A"
                    style={{ fontSize: '12px', fontFamily: 'Plus Jakarta Sans' }}
                  />
                  <YAxis 
                    stroke="#9A7B5A" 
                    style={{ fontSize: '12px', fontFamily: 'Plus Jakarta Sans' }} 
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #FDE68A',
                      borderRadius: '12px',
                      fontFamily: 'Plus Jakarta Sans',
                    }}
                    formatter={(value: number) => [value, 'Commandes']}
                  />
                  <Bar dataKey="commandes" fill="#92400E" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Platform Distribution & Recent Orders */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Platform Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-2xl border border-savane-100"
            >
              <h3 className="font-semibold mb-6 font-sans text-text-dark">Répartition par plateforme</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} (${value}%)`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #FDE68A',
                      borderRadius: '12px',
                      fontFamily: 'Plus Jakarta Sans',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Recent Orders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-2xl border border-savane-100"
            >
              <h3 className="font-semibold mb-6 font-sans text-text-dark">Commandes récentes</h3>
              <div className="space-y-4">
                {[
                  {
                    id: '#1247',
                    customer: 'Marie K.',
                    amount: 45000,
                    status: 'En cours',
                  },
                  {
                    id: '#1246',
                    customer: 'Jean-Paul D.',
                    amount: 285000,
                    status: 'Livrée',
                  },
                  {
                    id: '#1245',
                    customer: 'Sandrine M.',
                    amount: 28000,
                    status: 'En cours',
                  },
                  {
                    id: '#1244',
                    customer: 'Emmanuel T.',
                    amount: 65000,
                    status: 'Livrée',
                  },
                ].map((order, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-ivoire last:border-0"
                  >
                    <div>
                      <p className="font-semibold text-sm font-sans text-text-dark">{order.id}</p>
                      <p className="text-xs text-text-light font-sans">
                        {order.customer}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm font-serif text-text-dark">
                        {order.amount.toLocaleString()} FCFA
                      </p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-sans ${
                          order.status === 'Livrée'
                            ? 'bg-accent/20 text-accent'
                            : 'bg-savane-100 text-primary'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
