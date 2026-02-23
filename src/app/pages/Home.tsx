import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Package, CreditCard, Truck, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { products, categories } from '../lib/data';

export default function Home() {
  const trendingProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-ivoire">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight leading-[1.1] text-text-dark">
                  Shopping
                  <br />
                  <span className="text-primary italic">International</span>
                  <br />
                  Simplifié
                </h1>
                <p className="text-lg md:text-xl text-text-light max-w-lg leading-relaxed font-sans">
                  Commandez sur AliExpress, Shein, Amazon.
                  <br />
                  Payez en FCFA. Livraison à Yaoundé et Douala.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-savane-800 text-primary-foreground px-[26px] py-[13px] rounded-full shadow-[0_4px_20px_rgba(146,64,14,0.3)] hover:shadow-[0_8px_28px_rgba(146,64,14,0.45)] hover:-translate-y-[2px] transition-all duration-300"
                >
                  <Link to="/catalogue">
                    Découvrir le catalogue
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="bg-white border-[1.5px] border-savane-100 text-text-dark hover:bg-ivoire hover:border-accent hover:-translate-y-[2px] rounded-full transition-all duration-300"
                >
                  <Link to="#comment">Comment ça marche</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-3xl font-serif font-normal text-primary">1200+</div>
                  <div className="text-sm text-text-light mt-1 font-sans">Commandes livrées</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-normal text-primary">48h</div>
                  <div className="text-sm text-text-light mt-1 font-sans">Traitement local</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-normal text-primary">4.8/5</div>
                  <div className="text-sm text-text-light mt-1 font-sans">Satisfaction client</div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-gradient-to-br from-savane-100 to-ivoire">
                <img
                  src="https://images.unsplash.com/photo-1549987501-af5ad97f8f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBzaG9wcGluZyUyMG9ubGluZSUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzEzMzg3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Shopping"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl">
                <ShoppingBag className="w-8 h-8 mb-2" />
                <div className="text-2xl font-semibold font-serif">2.5M+ FCFA</div>
                <div className="text-sm opacity-90 font-sans">Économisés cette année</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight mb-4 text-text-dark">
              Catégories populaires
            </h2>
            <p className="text-text-light text-lg font-sans">
              Explorez nos collections soigneusement sélectionnées
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/catalogue?category=${category.name}`}
                  className="group block"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-square mb-4 bg-white shadow-sm group-hover:shadow-[0_8px_32px_rgba(146,64,14,0.12)] group-hover:-translate-y-1 transition-all duration-300">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-semibold text-center font-sans text-text-dark">{category.name}</h3>
                  <p className="text-sm text-text-light text-center mt-1 font-sans">
                    {category.count} produits
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-24 px-6 bg-ivoire">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight mb-4 text-text-dark">
                Produits tendance
              </h2>
              <p className="text-text-light text-lg font-sans">
                Les plus populaires ce mois-ci
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex text-primary hover:text-accent font-sans font-semibold">
              <Link to="/catalogue">
                Voir tout
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trendingProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/produit/${product.id}`} className="group block">
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-6 bg-gradient-to-br from-savane-100 to-ivoire border border-savane-100 group-hover:border-savane-200 group-hover:shadow-[0_20px_60px_rgba(146,64,14,0.15)] group-hover:-translate-y-2 group-hover:scale-[1.01] transition-all duration-[350ms] cubic-bezier(0.34,1.56,0.64,1)">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm font-sans text-text-mid">
                      {product.deliveryDays}j
                    </div>
                    <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs uppercase font-semibold font-sans">
                      {product.platform}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-primary uppercase tracking-wider font-bold font-sans">
                      {product.category}
                    </p>
                    <h3 className="font-semibold text-text-dark group-hover:text-primary transition font-sans">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-serif font-black text-text-dark">
                        {product.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-text-light font-sans">FCFA</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-light font-sans">
                      <div className="flex items-center">
                        <span className="text-accent">★</span>
                        <span className="ml-1">{product.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{product.reviews} avis</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Button asChild variant="outline" size="lg">
              <Link to="/catalogue">Voir tout le catalogue</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="comment" className="py-24 px-6 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight mb-4 text-text-dark">
              Comment ça marche
            </h2>
            <p className="text-text-light text-lg font-sans">
              Trois étapes simples pour recevoir vos produits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Package,
                title: 'Choisissez',
                description: 'Sélectionnez vos produits préférés sur AliExpress, Shein ou Amazon'
              },
              {
                icon: CreditCard,
                title: 'Payez en FCFA',
                description: 'Réglez facilement via Mobile Money (MTN, Orange) ou en espèces'
              },
              {
                icon: Truck,
                title: 'Recevez',
                description: 'Livraison rapide à votre domicile à Yaoundé ou Douala'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-sans text-text-dark">{step.title}</h3>
                <p className="text-text-light leading-relaxed font-sans">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-ivoire">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-text-dark">
              Prêt à commencer ?
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto font-sans">
              Rejoignez des centaines de Camerounais qui font déjà leurs achats internationaux en toute simplicité.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-savane-800 text-primary-foreground px-[26px] py-[13px] rounded-full shadow-[0_4px_20px_rgba(146,64,14,0.3)] hover:shadow-[0_8px_28px_rgba(146,64,14,0.45)] hover:-translate-y-[2px] transition-all duration-300"
            >
              <Link to="/catalogue">
                Explorer le catalogue
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
