import { useSearchParams } from 'react-router';
import { Package, Plane, FileCheck, Truck, CheckCircle2 } from 'lucide-react';

export function TrackingPage() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order') || 'CM-2026-001234';

  // Mock tracking data
  const orderStatus = {
    orderId,
    date: '2026-02-05',
    status: 'in-transit',
    currentStep: 2,
    steps: [
      {
        id: 1,
        title: 'Commande confirmée',
        description: 'Votre commande a été enregistrée',
        date: '2026-02-05 14:30',
        completed: true,
      },
      {
        id: 2,
        title: 'Achat en cours',
        description: 'Nous procédons à l\'achat sur Amazon',
        date: '2026-02-05 18:45',
        completed: true,
      },
      {
        id: 3,
        title: 'En transit international',
        description: 'Le colis est en route vers le Cameroun',
        date: '2026-02-07 10:20',
        completed: false,
        inProgress: true,
      },
      {
        id: 4,
        title: 'Dédouanement',
        description: 'Traitement des formalités douanières',
        date: '',
        completed: false,
      },
      {
        id: 5,
        title: 'Livraison locale',
        description: 'Livraison vers votre adresse',
        date: '',
        completed: false,
      },
    ],
    items: [
      {
        title: 'Apple AirPods Pro (2ème génération)',
        platform: 'Amazon',
        quantity: 1,
        price: 176810,
      },
    ],
    estimatedDelivery: '15-20 février 2026',
  };

  const getStepIcon = (stepId: number) => {
    switch (stepId) {
      case 1:
        return Package;
      case 2:
        return FileCheck;
      case 3:
        return Plane;
      case 4:
        return FileCheck;
      case 5:
        return Truck;
      default:
        return Package;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="mb-8">Suivi de commande</h1>

      {/* Order Info */}
      <div className="bg-[var(--background-light)] border border-[var(--border-gray)] rounded p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-[var(--neutral-gray)] mb-1">Numéro de commande</div>
            <div className="font-semibold">{orderStatus.orderId}</div>
          </div>
          <div>
            <div className="text-sm text-[var(--neutral-gray)] mb-1">Date de commande</div>
            <div className="font-semibold">{orderStatus.date}</div>
          </div>
          <div>
            <div className="text-sm text-[var(--neutral-gray)] mb-1">Livraison estimée</div>
            <div className="font-semibold text-[var(--primary-green)]">
              {orderStatus.estimatedDelivery}
            </div>
          </div>
        </div>
      </div>

      {/* Tracking Timeline */}
      <div className="bg-white border border-[var(--border-gray)] rounded p-6 mb-8">
        <h3 className="mb-6">Statut de la commande</h3>
        <div className="space-y-6">
          {orderStatus.steps.map((step, index) => {
            const Icon = getStepIcon(step.id);
            const isLast = index === orderStatus.steps.length - 1;

            return (
              <div key={step.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      step.completed
                        ? 'bg-[var(--primary-green)] text-white'
                        : step.inProgress
                        ? 'bg-green-100 text-[var(--primary-green)] ring-2 ring-[var(--primary-green)]'
                        : 'bg-gray-100 text-[var(--neutral-gray)]'
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}
                  </div>
                  {!isLast && (
                    <div
                      className={`w-0.5 h-12 ${
                        step.completed ? 'bg-[var(--primary-green)]' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <h4 className="mb-1">{step.title}</h4>
                  <p className="text-sm text-[var(--neutral-gray)] mb-2">
                    {step.description}
                  </p>
                  {step.date && (
                    <p className="text-xs text-[var(--neutral-gray)]">{step.date}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-white border border-[var(--border-gray)] rounded p-6">
        <h3 className="mb-4">Articles commandés</h3>
        <div className="space-y-4">
          {orderStatus.items.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <div className="text-xs text-[var(--neutral-gray)] mb-1">
                  {item.platform}
                </div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm text-[var(--neutral-gray)]">
                  Quantité: {item.quantity}
                </div>
              </div>
              <div className="font-semibold">
                {item.price.toLocaleString('fr-FR')} FCFA
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
