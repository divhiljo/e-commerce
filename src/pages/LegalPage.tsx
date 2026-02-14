import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function LegalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <h1 className="text-center mb-16">Informations légales</h1>

      <Tabs defaultValue="terms" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="terms">Conditions générales</TabsTrigger>
          <TabsTrigger value="privacy">Politique de confidentialité</TabsTrigger>
          <TabsTrigger value="legal">Mentions légales</TabsTrigger>
          <TabsTrigger value="refund">Politique de remboursement</TabsTrigger>
        </TabsList>

        <TabsContent value="terms" className="mt-16">
          <div className="prose prose-sm max-w-none">
            <h2>Conditions générales de vente</h2>
            <h3>1. Objet</h3>
            <p>Les présentes conditions générales régissent l'utilisation du service ShopGlobal.cm permettant aux consommateurs camerounais de commander des produits depuis des marketplaces internationales.</p>

            <h3>2. Acceptation des conditions</h3>
            <p>En utilisant notre plateforme, vous acceptez pleinement ces conditions générales.</p>

            <h3>3. Service proposé</h3>
            <p>Nous proposons un service d'import et de livraison de produits achetés sur Amazon, AliExpress, Shein et autres plateformes internationales.</p>

            <h3>4. Prix et paiement</h3>
            <p>Les prix sont affichés en FCFA incluant tous les frais (produit, import, douanes, livraison). Le paiement s'effectue en FCFA par Mobile Money, virement bancaire ou paiement à la livraison.</p>

            <h3>5. Livraison</h3>
            <p>La livraison s'effectue partout au Cameroun. Les délais varient de 7 à 16 jours selon le produit et la destination.</p>

            <h3>6. Retours et remboursements</h3>
            <p>Vous disposez de 7 jours pour retourner un produit. Voir notre politique de retour détaillée.</p>

            <h3>7. Responsabilité</h3>
            <p>Nous nous engageons à fournir un service de qualité mais ne pouvons être tenus responsables des retards dus aux transporteurs internationaux ou aux douanes.</p>
          </div>
        </TabsContent>

        <TabsContent value="privacy" className="mt-16">
          <div className="prose prose-sm max-w-none">
            <h2>Politique de confidentialité</h2>
            <h3>1. Collecte des données</h3>
            <p>Nous collectons les informations nécessaires à la gestion de vos commandes : nom, email, téléphone, adresse de livraison.</p>

            <h3>2. Utilisation des données</h3>
            <p>Vos données sont utilisées uniquement pour le traitement de vos commandes et l'amélioration de nos services.</p>

            <h3>3. Protection des données</h3>
            <p>Nous mettons en place toutes les mesures techniques et organisationnelles pour protéger vos données personnelles.</p>

            <h3>4. Partage des données</h3>
            <p>Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées uniquement avec nos partenaires logistiques pour la livraison.</p>

            <h3>5. Cookies</h3>
            <p>Notre site utilise des cookies pour améliorer votre expérience utilisateur. Vous pouvez les désactiver dans les paramètres de votre navigateur.</p>
          </div>
        </TabsContent>

        <TabsContent value="legal" className="mt-16">
          <div className="prose prose-sm max-w-none">
            <h2>Mentions légales</h2>
            <h3>Éditeur du site</h3>
            <p>ShopGlobal.cm<br />
            Société [Nom de la société]<br />
            Adresse : Douala, Cameroun<br />
            Email : contact@shopglobal.cm<br />
            Téléphone : +237 XX XXX XX XX</p>

            <h3>Directeur de publication</h3>
            <p>[Nom du directeur]</p>

            <h3>Hébergement</h3>
            <p>Le site est hébergé par [Nom de l'hébergeur]<br />
            Adresse : [Adresse de l'hébergeur]</p>

            <h3>Propriété intellectuelle</h3>
            <p>Tous les contenus du site sont protégés par le droit d'auteur. Toute reproduction est interdite sans autorisation.</p>

            <h3>CNIL</h3>
            <p>Conformément à la loi camerounaise sur la protection des données personnelles, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.</p>
          </div>
        </TabsContent>

        <TabsContent value="refund" className="mt-16">
          <div className="prose prose-sm max-w-none">
            <h2>Politique de remboursement</h2>
            <h3>1. Droit de rétractation</h3>
            <p>Conformément au droit camerounais, vous disposez d'un délai de 7 jours à compter de la réception de votre commande pour exercer votre droit de rétractation.</p>

            <h3>2. Conditions de retour</h3>
            <p>Le produit doit être retourné dans son état d'origine, avec tous les accessoires, notices et emballages. Les frais de retour sont à la charge du client sauf en cas de produit défectueux.</p>

            <h3>3. Produits éligibles</h3>
            <p>Tous les produits peuvent faire l'objet d'un retour sous réserve qu'ils soient dans leur état d'origine. Les produits personnalisés ou sur mesure ne sont pas retournables.</p>

            <h3>4. Modalités de remboursement</h3>
            <p>Le remboursement s'effectue par le même moyen de paiement utilisé pour la commande, dans un délai maximum de 14 jours après réception et vérification du produit retourné.</p>

            <h3>5. Échanges</h3>
            <p>Les échanges sont possibles sous réserve de disponibilité. Les frais d'échange sont à la charge du client.</p>

            <h3>6. Produits défectueux</h3>
            <p>En cas de produit défectueux, nous organisons gratuitement le retour et le remboursement ou l'échange selon votre choix.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
