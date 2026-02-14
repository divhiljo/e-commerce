import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Eye, EyeOff, Mail, Lock, Smartphone } from 'lucide-react';

export function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: '', // email or phone
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      // Redirect based on role or to dashboard
      navigate('/catalogue');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background-light)] px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-16">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-[var(--primary-green)] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SG</span>
            </div>
            <span className="text-xl font-semibold">ShopGlobal.cm</span>
          </Link>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg border border-[var(--border-gray)] p-16">
          <div className="text-center mb-12">
            <h1 className="text-2xl font-semibold mb-2">Connexion</h1>
            <p className="text-[var(--neutral-gray)]">Accédez à votre compte</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm font-medium mb-2">Email ou téléphone</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Smartphone className="h-5 w-5 text-[var(--neutral-gray)]" />
                </div>
                <input
                  type="text"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleInputChange}
                  placeholder="email@example.com ou +237 XX XXX XX XX"
                  className="w-full pl-10 pr-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mot de passe</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[var(--neutral-gray)]" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Votre mot de passe"
                  className="w-full pl-10 pr-10 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-[var(--neutral-gray)]" />
                  ) : (
                    <Eye className="h-5 w-5 text-[var(--neutral-gray)]" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="rounded border-[var(--border-gray)] text-[var(--primary-green)] focus:ring-[var(--primary-green)]"
                />
                <span className="ml-2 text-sm text-[var(--neutral-gray)]">Se souvenir de moi</span>
              </label>
              <Link to="/mot-de-passe-oublie" className="text-sm text-[var(--primary-green)] hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-2 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-12">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--border-gray)]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[var(--neutral-gray)]">Ou continuer avec</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full px-4 py-2 border border-[var(--border-gray)] rounded hover:bg-gray-50 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button className="w-full px-4 py-2 border border-[var(--border-gray)] rounded hover:bg-gray-50 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                Twitter
              </button>
            </div>
          </div>

          {/* Register Link */}
          <div className="mt-12 text-center">
            <p className="text-[var(--neutral-gray)]">
              Pas encore de compte ?{' '}
              <Link to="/inscription" className="text-[var(--primary-green)] hover:underline font-medium">
                Créer un compte
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-16 text-center text-sm text-[var(--neutral-gray)]">
          <Link to="/conditions-generales" className="hover:text-[var(--primary-green)]">Conditions générales</Link>
          {' • '}
          <Link to="/politique-confidentialite" className="hover:text-[var(--primary-green)]">Confidentialité</Link>
        </div>
      </div>
    </div>
  );
}
