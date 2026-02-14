import { Link } from 'react-router';
import { CheckCircle, Calculator, Info } from 'lucide-react';

export function PricingPage() {
  const feeStructure = [
    {
      category: "Électronique",
      baseFee: "5%",
      importFee: "2-8%",
      shippingFee: "15,000-50,000 FCFA",
      customsFee: "Variable (0-30%)"
    },
    {
      category: "Mode & Accessoires",
      baseFee: "4%",
      importFee: "2-6%",
      shippingFee: "10,000-30,000 FCFA",
      customsFee: "Variable (0-20%)"
    },
    {
      category: "Maison & Jardin",
      baseFee: "6%",
      importFee: "3-10%",
      shippingFee: "20,000-60,000 FCFA",
      customsFee: "Variable (0-25%)"
    },
    {
      category: "Sports & Loisirs",
      baseFee: "5%",
      importFee: "2-7%",
      shippingFee: "15,000-40,000 FCFA",
      customsFee: "Variable (0-20%)"
    }
  ];

  const additionalFees = [
    "Frais de douane (calculés selon la valeur et catégorie du produit)",
    "Frais de stockage temporaire si nécessaire",
    "Assurance transport (incluse pour commandes >50,000 FCFA)",
    "Frais de traitement administratif (2,000 FCFA par commande)"
  ];

  const paymentMethods = [
    {
      method: "Mobile Money (Orange/MTN)",
      fee: "Gratuit",
      description: "Paiement instantané"
    },
    {
      method: "Virement bancaire",
      fee: "Gratuit",
      description: "Pour montants élevés"
    },
    {
      method: "Paiement à la livraison",
      fee: "2,000 FCFA",
      description: "Zones éligibles uniquement"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      {/* Hero */}
      <div className="text-center mb-32">
        <h1 className="mb-4">Tarification & Frais</h1>
        <p className="text-lg text-[var(--neutral-gray)] max-w-3xl mx-auto">
          Transparence totale sur nos frais. Découvrez comment nous calculons les prix
          et optimisons vos économies sur les achats internationaux.
        </p>
      </div>

      {/* Fee Calculator */}
      <section className="bg-[var(--background-light)] -mx-4 px-4 py-32 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <Calculator className="w-12 h-12 text-[var(--primary-green)] mx-auto mb-4" />
            <h2 className="mb-4">Simulateur de frais</h2>
            <p className="text-[var(--neutral-gray)]">
              Estimez le coût total de votre commande avant de commander
            </p>
          </div>
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg border border-[var(--border-gray)]">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Prix du produit (USD)</label>
                <input
                  type="number"
                  placeholder="100"
                  className="w-full px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Catégorie</label>
                <select className="w-full px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]">
                  <option>Électronique</option>
                  <option>Mode & Accessoires</option>
                  <option>Maison & Jardin</option>
                  <option>Sports & Loisirs</option>
                </select>
              </div>
              <button className="w-full px-4 py-2 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)]">
                Calculer les frais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="mb-32">
        <h2 className="text-center mb-24">Structure des frais par catégorie</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-[var(--border-gray)]">
            <thead>
              <tr className="bg-[var(--background-light)]">
                <th className="border border-[var(--border-gray)] px-4 py-3 text-left">Catégorie</th>
                <th className="border border-[var(--border-gray)] px-4 py-3 text-left">Commission de base</th>
                <th className="border border-[var(--border-gray)] px-4 py-3 text-left">Frais d'import</th>
                <th className="border border-[var(--border-gray)] px-4 py-3 text-left">Livraison locale</th>
                <th className="border border-[var(--border-gray)] px-4 py-3 text-left">Droits de douane</th>
              </tr>
            </thead>
            <tbody>
              {feeStructure.map((fee, index) => (
                <tr key={index} className="hover:bg-[var(--background-light)]">
                  <td className="border border-[var(--border-gray)] px-4 py-3 font-medium">{fee.category}</td>
                  <td className="border border-[var(--border-gray)] px-4 py-3">{fee.baseFee}</td>
                  <td className="border border-[var(--border-gray)] px-4 py-3">{fee.importFee}</td>
                  <td className="border border-[var(--border-gray)] px-4 py-3">{fee.shippingFee}</td>
                  <td className="border border-[var(--border-gray)] px-4 py-3">{fee.customsFee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Additional Fees */}
      <section className="mb-32">
        <h2 className="mb-16">Frais supplémentaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalFees.map((fee, index) => (
            <div key={index} className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--primary-green)] mt-0.5 flex-shrink-0" />
              <span className="text-sm">{fee}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="mb-32">
        <h2 className="text-center mb-24">Méthodes de paiement</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-[var(--border-gray)] text-center">
              <h3 className="mb-2">{method.method}</h3>
              <p className="text-2xl font-bold text-[var(--primary-green)] mb-2">{method.fee}</p>
              <p className="text-sm text-[var(--neutral-gray)]">{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Profit Margin Explanation */}
      <section className="bg-[var(--background-light)] -mx-4 px-4 py-32 mb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-24">Comment calculons-nous nos marges ?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-4">Notre approche transparente</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--primary-green)] mt-0.5" />
                  <span className="text-sm">Commission fixe sur le prix du produit (4-6%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--primary-green)] mt-0.5" />
                  <span className="text-sm">Frais d'import réels (transport international, douanes)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--primary-green)] mt-0.5" />
                  <span className="text-sm">Livraison locale optimisée</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--primary-green)] mt-0.5" />
                  <span className="text-sm">Aucun frais caché ou surprise</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Pourquoi ces frais ?</h3>
              <p className="text-sm text-[var(--neutral-gray)] mb-4">
                Nos marges permettent de couvrir les coûts opérationnels et d'assurer un service de qualité.
                En consolidant les importations, nous négocions de meilleurs tarifs avec les transporteurs
                et optimisons les processus douaniers.
              </p>
              <p className="text-sm text-[var(--neutral-gray)]">
                Le résultat ? Des économies pour vous comparé à l'achat direct sur les marketplaces,
                avec une livraison locale garantie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <h2 className="mb-8">Questions sur les tarifs ?</h2>
        <p className="text-[var(--neutral-gray)] mb-16">
          Notre équipe est là pour vous expliquer en détail comment nous calculons les prix.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-3 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)]"
          >
            Nous contacter
          </Link>
          <Link
            to="/catalogue"
            className="px-8 py-3 border border-[var(--border-gray)] rounded hover:bg-gray-50"
          >
            Commencer à acheter
          </Link>
        </div>
      </section>
    </div>
  );
}
