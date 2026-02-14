import { Link } from 'react-router';
import { Search, CreditCard, Globe, Truck, CheckCircle, ArrowRight } from 'lucide-react';

export function HowItWorksPage() {
  const steps = [
    {
      icon: Search,
      title: "1. Recherchez votre produit",
      description: "Trouvez le produit de vos rêves sur Amazon, AliExpress, Shein ou d'autres marketplaces internationaux.",
      details: "Utilisez notre catalogue ou recherchez directement sur les plateformes partenaires."
    },
    {
      icon: CreditCard,
      title: "2. Payez en FCFA",
      description: "Commandez et payez directement en Francs CFA camerounais.",
      details: "Mobile Money (Orange, MTN), virement bancaire, ou paiement à la livraison selon votre choix."
    },
    {
      icon: Globe,
      title: "3. On s'occupe de tout",
      description: "Nous gérons l'import international, les douanes et la logistique.",
      details: "Suivi des expéditions, dédouanement, gestion administrative complète."
    },
    {
      icon: Truck,
      title: "4. Recevez chez vous",
      description: "Livraison sécurisée partout au Cameroun.",
      details: "Transport local par nos partenaires, suivi en temps réel jusqu'à votre porte."
    },
  ];

  const benefits = [
    "Prix compétitifs grâce aux importations directes",
    "Économies sur les frais de port international",
    "Service client local en français",
    "Garantie de livraison dans les délais",
    "Protection contre la fraude et les arnaques",
    "Transparence totale sur les frais"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      {/* Hero */}
      <div className="text-center mb-24">
        <h1 className="mb-4">Comment ça fonctionne</h1>
        <p className="text-lg text-[var(--neutral-gray)] max-w-2xl mx-auto">
          Achetez à l'international simplement, payez en FCFA et recevez vos colis au Cameroun.
          Un processus simple en 4 étapes.
        </p>
      </div>

      {/* Process Steps */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-[var(--background-light)] rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-[var(--primary-green)]" />
              </div>
              <h3 className="mb-3">{step.title}</h3>
              <p className="text-[var(--neutral-gray)] mb-4">{step.description}</p>
              <p className="text-sm text-gray-500">{step.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-24">
        <h2 className="text-center mb-16">Suivi détaillé de votre commande</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border-gray)]"></div>
            {[
              { status: "Commandé", description: "Votre commande est confirmée", time: "Immédiat" },
              { status: "Expédié", description: "Le vendeur international expédie", time: "2-5 jours" },
              { status: "Douane", description: "Traitement douanier au Cameroun", time: "3-7 jours" },
              { status: "Transit local", description: "Transport vers votre ville", time: "2-4 jours" },
              { status: "Livré", description: "Colis remis à votre adresse", time: "Total: 7-16 jours" },
            ].map((step, index) => (
              <div key={index} className="relative flex items-center mb-8">
                <div className="absolute left-8 w-4 h-4 bg-[var(--primary-green)] rounded-full -translate-x-1/2"></div>
                <div className="ml-16">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-[var(--primary-green)]" />
                    <h4 className="font-medium">{step.status}</h4>
                    <span className="text-sm text-[var(--neutral-gray)]">({step.time})</span>
                  </div>
                  <p className="text-sm text-[var(--neutral-gray)]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[var(--background-light)] -mx-4 px-4 py-32 mb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-24">Pourquoi choisir ShopGlobal.cm ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--primary-green)] mt-0.5 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <h2 className="mb-8">Prêt à commencer ?</h2>
        <p className="text-[var(--neutral-gray)] mb-16">
          Créez votre compte gratuitement et commencez à commander dès aujourd'hui.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/catalogue"
            className="px-8 py-3 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)] flex items-center gap-2"
          >
            Explorer le catalogue
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/tarification"
            className="px-8 py-3 border border-[var(--border-gray)] rounded hover:bg-gray-50"
          >
            Voir les tarifs
          </Link>
        </div>
      </section>
    </div>
  );
}
