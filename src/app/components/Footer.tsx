import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-savane-800 border-t border-savane-800 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white/90">À propos</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Commandez sur AliExpress, Shein et Amazon. Payez en FCFA, recevez au Cameroun.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white/90">Liens rapides</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-white/60 hover:text-accent transition">Accueil</Link></li>
              <li><Link to="/catalogue" className="text-white/60 hover:text-accent transition">Catalogue</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-accent transition">Comment ça marche</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-accent transition">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white/90">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="text-white/60 hover:text-accent transition">FAQ</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-accent transition">Livraison</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-accent transition">Retours</Link></li>
              <li><Link to="#" className="text-white/60 hover:text-accent transition">CGV</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white/90">Contact</h3>
            <div className="space-y-3 text-sm text-white/60">
              <p>Email: contact@droshipcam.com</p>
              <p>Tél: +237 690 000 000</p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="hover:text-accent transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-accent transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-accent transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-accent transition">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p className="font-sans">© 2026 <span className="font-serif text-accent font-bold">dropshipCam</span>. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}