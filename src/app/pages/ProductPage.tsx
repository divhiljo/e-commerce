import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { Star, Truck, Shield, ArrowLeft, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { products, reviews } from '../lib/data';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivoire">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 font-sans text-text-dark">Produit non trouvé</h2>
          <Button asChild variant="outline" className="bg-white border-savane-100">
            <Link to="/catalogue">Retour au catalogue</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivoire">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Button 
          asChild 
          variant="ghost" 
          className="mb-8 text-text-mid hover:text-primary"
        >
          <Link to="/catalogue">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au catalogue
          </Link>
        </Button>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-24">
              <div className="rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-savane-100 to-ivoire mb-4 border border-savane-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3 text-sm font-sans">
                <div className="flex items-center gap-2 text-text-light">
                  <Shield className="w-4 h-4" />
                  Garantie authentique
                </div>
                <div className="flex items-center gap-2 text-text-light">
                  <Truck className="w-4 h-4" />
                  Livraison trackée
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm text-text-light uppercase tracking-wider mb-3 font-sans font-semibold">
                {product.category} • {product.platform}
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-normal tracking-tight mb-4 text-text-dark">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-accent text-accent'
                          : 'text-savane-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-text-light font-sans">
                  {product.rating} ({product.reviews} avis)
                </span>
              </div>
              <div className="text-4xl font-serif font-black text-primary mb-2">
                {product.price.toLocaleString()} FCFA
              </div>
              <p className="text-text-light font-sans">
                Livraison estimée : {product.deliveryDays} jours ouvrables
              </p>
            </div>

            {/* Description */}
            <div className="space-y-3 py-6 border-y border-savane-100">
              <h3 className="font-semibold font-sans text-text-dark">Description</h3>
              <p className="text-text-light leading-relaxed font-sans">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-3">
                <Label className="font-sans text-text-dark">Couleur : {selectedColor}</Label>
                <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <div key={color} className="flex items-center">
                        <RadioGroupItem
                          value={color}
                          id={`color-${color}`}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={`color-${color}`}
                          className="cursor-pointer px-4 py-2 rounded-xl border-[1.5px] border-savane-100 bg-white peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition font-sans text-text-mid"
                        >
                          {color}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3">
                <Label className="font-sans text-text-dark">Taille : {selectedSize}</Label>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                  <div className="flex gap-3">
                    {product.sizes.map((size) => (
                      <div key={size} className="flex items-center">
                        <RadioGroupItem
                          value={size}
                          id={`size-${size}`}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={`size-${size}`}
                          className="cursor-pointer px-4 py-2 rounded-xl border-[1.5px] border-savane-100 bg-white peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition font-sans text-text-mid"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-3">
              <Label className="font-sans text-text-dark">Quantité</Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-xl bg-white border-savane-100 hover:bg-ivoire hover:border-accent"
                >
                  -
                </Button>
                <span className="w-12 text-center font-sans text-text-dark">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-xl bg-white border-savane-100 hover:bg-ivoire hover:border-accent"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3 pt-4">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-savane-800 text-primary-foreground rounded-[14px] shadow-[0_4px_20px_rgba(146,64,14,0.3)] hover:shadow-[0_8px_28px_rgba(146,64,14,0.4)] hover:-translate-y-[2px] transition-all duration-300 py-[14px]"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Ajouter au panier
              </Button>
              <p className="text-sm text-center text-text-light font-sans">
                Paiement sécurisé via Mobile Money ou en espèces
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-white/60 border border-savane-100">
                <Truck className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm font-semibold font-sans text-text-dark">Livraison rapide</p>
                <p className="text-xs text-text-light mt-1 font-sans">
                  Yaoundé & Douala
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/60 border border-savane-100">
                <Shield className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm font-semibold font-sans text-text-dark">Produit authentique</p>
                <p className="text-xs text-text-light mt-1 font-sans">
                  Garanti d'origine
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews */}
        <div className="max-w-4xl">
          <h2 className="text-3xl font-serif font-normal tracking-tight mb-8 text-text-dark">
            Avis clients
          </h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/60 border border-savane-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold mb-1 font-sans text-text-dark">{review.author}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-accent text-accent'
                              : 'text-savane-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-text-light font-sans">
                    {new Date(review.date).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <p className="text-text-light leading-relaxed font-sans">
                  {review.comment}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
