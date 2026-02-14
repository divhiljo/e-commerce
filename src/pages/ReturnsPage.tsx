import { useState } from 'react';
import { Link } from 'react-router';
import { Upload, FileText, CheckCircle, AlertCircle, Clock } from 'lucide-react';

export function ReturnsPage() {
  const [returnReason, setReturnReason] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<File[]>([]);

  const returnReasons = [
    "Produit défectueux",
    "Produit non conforme à la description",
    "Produit endommagé lors du transport",
    "Taille/couleur différente",
    "Erreur de commande",
    "Autre"
  ];

  const returnPolicy = [
    {
      title: "Délai de retour",
      description: "Vous disposez de 7 jours après réception pour initier une demande de retour.",
      icon: Clock
    },
    {
      title: "État du produit",
      description: "Le produit doit être dans son état d'origine, avec tous les accessoires et l'emballage.",
      icon: CheckCircle
    },
    {
      title: "Preuve requise",
      description: "Photos du produit, facture et description détaillée du problème sont nécessaires.",
      icon: Upload
    },
    {
      title: "Traitement",
      description: "Chaque demande est examinée dans les 48h. Le remboursement est effectué sous 5-7 jours.",
      icon: FileText
    }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Demande de retour soumise. Vous recevrez une confirmation par email.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      {/* Hero */}
      <div className="text-center mb-32">
        <h1 className="mb-4">Retours & Remboursements</h1>
        <p className="text-lg text-[var(--neutral-gray)] max-w-3xl mx-auto">
          Nous nous engageons à votre satisfaction. Si un produit ne correspond pas à vos attentes,
          notre politique de retour simplifiée vous permet de retourner facilement.
        </p>
      </div>

      {/* Return Policy */}
      <section className="mb-32">
        <h2 className="text-center mb-24">Notre politique de retour</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {returnPolicy.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[var(--background-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-[var(--primary-green)]" />
              </div>
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--neutral-gray)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Return Form */}
      <section className="mb-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center mb-16">Demander un retour</h2>
          <div className="bg-white p-8 rounded-lg border border-[var(--border-gray)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Numéro de commande</label>
                <input
                  type="text"
                  placeholder="Ex: CMD-2024-001"
                  className="w-full px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Motif du retour</label>
                <select
                  value={returnReason}
                  onChange={(e) => setReturnReason(e.target.value)}
                  className="w-full px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
                  required
                >
                  <option value="">Sélectionnez un motif</option>
                  {returnReasons.map((reason) => (
                    <option key={reason} value={reason}>{reason}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description détaillée</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Décrivez le problème en détail..."
                  rows={4}
                  className="w-full px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preuves (photos, vidéos)</label>
                <div className="border-2 border-dashed border-[var(--border-gray)] rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-[var(--neutral-gray)] mx-auto mb-2" />
                  <p className="text-sm text-[var(--neutral-gray)] mb-4">
                    Glissez-déposez vos fichiers ici ou cliquez pour sélectionner
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="px-4 py-2 bg-[var(--primary-green)] text-white rounded cursor-pointer hover:bg-[var(--primary-green-dark)]"
                  >
                    Sélectionner des fichiers
                  </label>
                  {files.length > 0 && (
                    <p className="text-sm text-[var(--primary-green)] mt-2">
                      {files.length} fichier(s) sélectionné(s)
                    </p>
                  )}
                </div>
                <p className="text-xs text-[var(--neutral-gray)] mt-2">
                  Formats acceptés: JPG, PNG, MP4. Taille max: 10MB par fichier.
                </p>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)]"
              >
                Soumettre la demande
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Return Status */}
      <section className="mb-32">
        <h2 className="text-center mb-16">Suivre votre demande de retour</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg border border-[var(--border-gray)]">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Numéro de retour</label>
              <input
                type="text"
                placeholder="Ex: RET-2024-001"
                className="w-full px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
              />
            </div>
            <button className="px-6 py-2 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)]">
              Vérifier le statut
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--background-light)] -mx-4 px-4 py-32 mb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-24">Questions fréquentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Quels sont les frais de retour ?</h3>
              <p className="text-sm text-[var(--neutral-gray)]">
                Les frais de retour sont gratuits pour les produits défectueux ou non conformes.
                Pour les autres motifs, des frais de 5,000 FCFA peuvent s'appliquer.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Comment se passe le remboursement ?</h3>
              <p className="text-sm text-[var(--neutral-gray)]">
                Le remboursement est effectué par le même moyen de paiement utilisé pour la commande,
                dans un délai de 5-7 jours ouvrés après validation du retour.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Puis-je échanger un produit ?</h3>
              <p className="text-sm text-[var(--neutral-gray)]">
                Oui, les échanges sont possibles sous réserve de disponibilité.
                Contactez notre support pour organiser l'échange.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Que faire si mon retour est refusé ?</h3>
              <p className="text-sm text-[var(--neutral-gray)]">
                En cas de refus, vous recevrez une explication détaillée.
                Vous pouvez faire appel de la décision en contactant notre support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 text-center">
        <h2 className="mb-8">Besoin d'aide ?</h2>
        <p className="text-[var(--neutral-gray)] mb-16">
          Notre équipe support est disponible pour vous accompagner dans votre démarche de retour.
        </p>
        <Link
          to="/contact"
          className="px-8 py-3 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)]"
        >
          Contacter le support
        </Link>
      </section>
    </div>
  );
}
