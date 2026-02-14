import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { CreditCard, Smartphone, Wallet } from 'lucide-react';

export function CheckoutPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'mobile' | 'bank' | 'delivery'>('mobile');
  const [mobileOperator, setMobileOperator] = useState<'mtn' | 'orange'>('mtn');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock order submission
    navigate('/suivi?order=CM-2026-001234');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="mb-8">Finaliser la commande</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <section className="bg-white border border-[var(--border-gray)] rounded p-6">
              <h3 className="mb-4">Informations de livraison</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Prénom</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:border-[var(--primary-green)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Nom</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:border-[var(--primary-green)]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">Téléphone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+237 6XX XX XX XX"
                    className="w-full px-4 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:border-[var(--primary-green)]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Ville</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:border-[var(--primary-green)]"
                  >
                    <option value="">Sélectionner une ville</option>
                    <option value="douala">Douala</option>
                    <option value="yaounde">Yaoundé</option>
                    <option value="bafoussam">Bafoussam</option>
                    <option value="bamenda">Bamenda</option>
                    <option value="garoua">Garoua</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">Adresse complète</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Quartier, rue, immeuble..."
                    className="w-full px-4 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:border-[var(--primary-green)]"
                  />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="bg-white border border-[var(--border-gray)] rounded p-6">
              <h3 className="mb-4">Mode de paiement</h3>
              
              <div className="space-y-3 mb-6">
                <label
                  className={`flex items-center gap-4 p-4 border-2 rounded cursor-pointer ${
                    paymentMethod === 'mobile'
                      ? 'border-[var(--primary-green)] bg-green-50'
                      : 'border-[var(--border-gray)]'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'mobile'}
                    onChange={() => setPaymentMethod('mobile')}
                    className="accent-[var(--primary-green)]"
                  />
                  <Smartphone className="w-6 h-6 text-[var(--primary-green)]" />
                  <div className="flex-1">
                    <div className="font-semibold">Mobile Money</div>
                    <div className="text-sm text-[var(--neutral-gray)]">MTN Mobile Money, Orange Money</div>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-4 p-4 border-2 rounded cursor-pointer ${
                    paymentMethod === 'bank'
                      ? 'border-[var(--primary-green)] bg-green-50'
                      : 'border-[var(--border-gray)]'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'bank'}
                    onChange={() => setPaymentMethod('bank')}
                    className="accent-[var(--primary-green)]"
                  />
                  <CreditCard className="w-6 h-6 text-[var(--primary-green)]" />
                  <div className="flex-1">
                    <div className="font-semibold">Virement bancaire</div>
                    <div className="text-sm text-[var(--neutral-gray)]">Vers notre compte local</div>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-4 p-4 border-2 rounded cursor-pointer ${
                    paymentMethod === 'delivery'
                      ? 'border-[var(--primary-green)] bg-green-50'
                      : 'border-[var(--border-gray)]'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'delivery'}
                    onChange={() => setPaymentMethod('delivery')}
                    className="accent-[var(--primary-green)]"
                  />
                  <Wallet className="w-6 h-6 text-[var(--primary-green)]" />
                  <div className="flex-1">
                    <div className="font-semibold">Paiement à la livraison</div>
                    <div className="text-sm text-[var(--neutral-gray)]">Disponible à Douala et Yaoundé</div>
                  </div>
                </label>
              </div>

              {paymentMethod === 'mobile' && (
                <div className="bg-[var(--background-light)] p-4 rounded">
                  <label className="block text-sm mb-3">Opérateur</label>
                  <div className="flex gap-3">
                    <label
                      className={`flex-1 p-3 border-2 rounded cursor-pointer text-center ${
                        mobileOperator === 'mtn'
                          ? 'border-[var(--primary-green)] bg-white'
                          : 'border-[var(--border-gray)]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="operator"
                        checked={mobileOperator === 'mtn'}
                        onChange={() => setMobileOperator('mtn')}
                        className="sr-only"
                      />
                      <div className="font-semibold">MTN</div>
                    </label>
                    <label
                      className={`flex-1 p-3 border-2 rounded cursor-pointer text-center ${
                        mobileOperator === 'orange'
                          ? 'border-[var(--primary-green)] bg-white'
                          : 'border-[var(--border-gray)]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="operator"
                        checked={mobileOperator === 'orange'}
                        onChange={() => setMobileOperator('orange')}
                        className="sr-only"
                      />
                      <div className="font-semibold">Orange</div>
                    </label>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[var(--background-light)] border border-[var(--border-gray)] rounded p-6 sticky top-24">
              <h3 className="mb-4">Résumé</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--neutral-gray)]">Sous-total</span>
                  <span>1 012 120 FCFA</span>
                </div>
                <div className="flex justify-between text-sm pb-3 border-b border-[var(--border-gray)]">
                  <span className="text-[var(--neutral-gray)]">Articles</span>
                  <span>2</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-semibold text-[var(--primary-green)]">
                    1 012 120 FCFA
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)] mb-3"
              >
                Confirmer la commande
              </button>
              <Link
                to="/panier"
                className="w-full px-6 py-3 border border-[var(--border-gray)] rounded hover:bg-gray-50 block text-center"
              >
                Retour au panier
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
