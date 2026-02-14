import { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Clock, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      description: "Support téléphonique",
      contact: "+237 6XX XXX XXX",
      hours: "Lun-Ven: 8h-18h, Sam: 9h-16h"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Support par email",
      contact: "support@shopglobal.cm",
      hours: "Réponse sous 24h"
    },
    {
      icon: MessageSquare,
      title: "Chat en ligne",
      description: "Assistance instantanée",
      contact: "Disponible sur le site",
      hours: "Lun-Dim: 8h-20h"
    },
    {
      icon: MapPin,
      title: "Bureau",
      description: "Adresse physique",
      contact: "Douala, Cameroun",
      hours: "Sur rendez-vous"
    }
  ];

  const faqCategories = [
    {
      category: "Commandes",
      questions: [
        { q: "Comment passer une commande ?", a: "Sélectionnez vos produits, ajoutez-les au panier, puis procédez au paiement." },
        { q: "Puis-je modifier ma commande ?", a: "Contactez-nous dans l'heure suivant la commande pour toute modification." }
      ]
    },
    {
      category: "Paiement",
      questions: [
        { q: "Quels moyens de paiement acceptez-vous ?", a: "Mobile Money (Orange/MTN), virement bancaire, et paiement à la livraison." },
        { q: "Les paiements sont-ils sécurisés ?", a: "Oui, toutes les transactions sont chiffrées et sécurisées." }
      ]
    },
    {
      category: "Livraison",
      questions: [
        { q: "Quels sont les délais de livraison ?", a: "7-16 jours selon le produit et la destination." },
        { q: "Puis-je suivre ma commande ?", a: "Oui, via notre page de suivi avec numéro de tracking." }
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Message envoyé ! Notre équipe vous répondra dans les 24h.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      category: 'general'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      {/* Hero */}
      <div className="text-center mb-32">
        <h1 className="mb-4">Contactez-nous</h1>
        <p className="text-lg text-[var(--neutral-gray)] max-w-3xl mx-auto">
          Notre équipe est là pour vous aider. Que ce soit pour une commande,
          un suivi ou une question, nous répondons rapidement à vos demandes.
        </p>
      </div>

      {/* Contact Methods */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-[var(--border-gray)] text-center">
              <div className="w-12 h-12 bg-[var(--background-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-6 h-6 text-[var(--primary-green)]" />
              </div>
              <h3 className="mb-2">{method.title}</h3>
              <p className="text-sm text-[var(--neutral-gray)] mb-2">{method.description}</p>
              <p className="font-medium text-[var(--primary-green)] mb-1">{method.contact}</p>
              <p className="text-xs text-[var(--neutral-gray)]">{method.hours}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center mb-16">Envoyez-nous un message</h2>
          <div className="bg-white p-8 rounded-lg border border-[var(--border-gray)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+237 XX XXX XX XX"
                    className="w-full px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Catégorie *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
                    required
                  >
                    <option value="general">Général</option>
                    <option value="orders">Commandes</option>
                    <option value="payment">Paiement</option>
                    <option value="delivery">Livraison</option>
                    <option value="returns">Retours</option>
                    <option value="technical">Support technique</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Sujet *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Décrivez votre demande en détail..."
                  className="w-full px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-32">
        <h2 className="text-center mb-24">Questions fréquentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqCategories.map((cat, index) => (
            <div key={index}>
              <h3 className="mb-4 text-center font-medium">{cat.category}</h3>
              <div className="space-y-4">
                {cat.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-white p-4 rounded-lg border border-[var(--border-gray)]">
                    <h4 className="font-medium mb-2">{faq.q}</h4>
                    <p className="text-sm text-[var(--neutral-gray)]">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Hours */}
      <section className="bg-[var(--background-light)] -mx-4 px-4 py-32">
        <div className="max-w-7xl mx-auto text-center">
          <Clock className="w-12 h-12 text-[var(--primary-green)] mx-auto mb-4" />
          <h2 className="mb-4">Horaires d'ouverture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-medium mb-2">Lundi - Vendredi</h3>
              <p className="text-[var(--neutral-gray)]">8h00 - 18h00</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Samedi</h3>
              <p className="text-[var(--neutral-gray)]">9h00 - 16h00</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Dimanche</h3>
              <p className="text-[var(--neutral-gray)]">Fermé</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Support d'urgence</h3>
              <p className="text-[var(--neutral-gray)]">24h/24 pour les commandes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
