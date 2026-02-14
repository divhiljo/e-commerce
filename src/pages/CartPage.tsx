import { Link } from 'react-router';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { products } from '../data/products';

export function CartPage() {
  const [cartItems, setCartItems] = useState([
    { product: products[0], quantity: 1 },
    { product: products[4], quantity: 1 },
  ]);

  const updateQuantity = (index: number, delta: number) => {
    setCartItems((items) =>
      items.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (index: number) => {
    setCartItems((items) => items.filter((_, i) => i !== index));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.totalPriceFCFA * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="mb-8">Panier</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-[var(--neutral-gray)] mb-4">Votre panier est vide</p>
          <Link
            to="/catalogue"
            className="inline-block px-6 py-3 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)]"
          >
            Continuer mes achats
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[var(--border-gray)] rounded p-4"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <div>
                          <div className="text-xs text-[var(--neutral-gray)] mb-1">
                            {item.product.platform}
                          </div>
                          <h3 className="text-sm mb-2">{item.product.title}</h3>
                        </div>
                        <button
                          onClick={() => removeItem(index)}
                          className="text-[var(--neutral-gray)] hover:text-red-600"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(index, -1)}
                            className="w-8 h-8 border border-[var(--border-gray)] rounded hover:bg-gray-50 flex items-center justify-center"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(index, 1)}
                            className="w-8 h-8 border border-[var(--border-gray)] rounded hover:bg-gray-50 flex items-center justify-center"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">
                            {(item.product.totalPriceFCFA * item.quantity).toLocaleString('fr-FR')} FCFA
                          </div>
                          <div className="text-xs text-[var(--neutral-gray)]">
                            {item.product.totalPriceFCFA.toLocaleString('fr-FR')} FCFA / unité
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-[var(--background-light)] border border-[var(--border-gray)] rounded p-6 sticky top-24">
              <h3 className="mb-4">Récapitulatif</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--neutral-gray)]">Sous-total</span>
                  <span>{subtotal.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div className="flex justify-between text-sm pb-3 border-b border-[var(--border-gray)]">
                  <span className="text-[var(--neutral-gray)]">Nombre d'articles</span>
                  <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-semibold text-[var(--primary-green)]">
                    {subtotal.toLocaleString('fr-FR')} FCFA
                  </span>
                </div>
              </div>
              <Link
                to="/commander"
                className="w-full px-6 py-3 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)] block text-center mb-3"
              >
                Passer la commande
              </Link>
              <Link
                to="/catalogue"
                className="w-full px-6 py-3 border border-[var(--border-gray)] rounded hover:bg-gray-50 block text-center"
              >
                Continuer mes achats
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
