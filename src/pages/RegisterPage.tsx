import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Eye, EyeOff, Mail, Lock, Smartphone, User, Building, Truck } from 'lucide-react';

export function RegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: form, 2: OTP
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: '',
    acceptTerms: false
  });
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    {
      value: 'client',
      label: 'Client',
      description: 'Acheter des produits depuis l\'international',
      icon: User
    },
    {
      value: 'fournisseur',
      label: 'Fournisseur',
      description: 'Vendre vos produits sur notre plateforme',
      icon: Building
    },
    {
      value: 'livreur',
      label: 'Livreur',
      description: 'Effectuer des livraisons locales',
      icon: Truck
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRoleSelect = (role: string) => {
    setFormData(prev => ({ ...prev, role }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      // Validate form
      if (formData.password !== formData.confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }
      if (!formData.acceptTerms) {
        alert('Vous devez accepter les conditions générales');
        return;
      }
      // Send OTP
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep(2);
      }, 1000);
    } else {
      // Verify OTP
      if (otp.length === 6) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          navigate('/connexion');
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background-light)] px-4 py-16">
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

        {/* Register Form */}
        <div className="bg-white rounded-lg border border-[var(--border-gray)] p-16">
          <div className="text-center mb-12">
            <h1 className="text-2xl font-semibold mb-2">Créer un compte</h1>
            <p className="text-[var(--neutral-gray)]">
              {step === 1 ? 'Rejoignez ShopGlobal.cm' : 'Vérifiez votre numéro de téléphone'}
            </p>
          </div>

          {step === 1 ? (
            <form onSubmit={handleFormSubmit} className="space-y-8">
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">Type de compte</label>
                <div className="grid grid-cols-1 gap-3">
                  {roles.map((role) => (
                    <button
                      key={role.value}
                      type="button"
                      onClick={() => handleRoleSelect(role.value)}
                      className={`p-4 border rounded-lg text-left hover:border-[var(--primary-green)] transition-colors ${
                        formData.role === role.value ? 'border-[var(--primary-green)] bg-[var(--background-light)]' : 'border-[var(--border-gray)]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <role.icon className={`w-5 h-5 ${formData.role === role.value ? 'text-[var(--primary-green)]' : 'text-[var(--neutral-gray)]'}`} />
                        <div>
                          <div className="font-medium">{role.label}</div>
                          <div className="text-sm text-[var(--neutral-gray)]">{role.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Prénom</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-[var(--neutral-gray)]" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    className="w-full pl-10 pr-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Smartphone className="h-5 w-5 text-[var(--neutral-gray)]" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+237 XX XXX XX XX"
                    className="w-full pl-10 pr-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Password Fields */}
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

              <div>
                <label className="block text-sm font-medium mb-2">Confirmer le mot de passe</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-[var(--neutral-gray)]" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-10 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-[var(--neutral-gray)]" />
                    ) : (
                      <Eye className="h-5 w-5 text-[var(--neutral-gray)]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms Acceptance */}
              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="mt-1 rounded border-[var(--border-gray)] text-[var(--primary-green)] focus:ring-[var(--primary-green)]"
                    required
                  />
                  <span className="ml-2 text-sm text-[var(--neutral-gray)]">
                    J'accepte les{' '}
                    <Link to="/mentions-legales" className="text-[var(--primary-green)] hover:underline">
                      conditions générales d'utilisation
                    </Link>
                    {' '}et la{' '}
                    <Link to="/politique-confidentialite" className="text-[var(--primary-green)] hover:underline">
                      politique de confidentialité
                    </Link>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-2 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Envoi du code...' : 'Créer mon compte'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-medium mb-2">Code de vérification</label>
                <p className="text-sm text-[var(--neutral-gray)] mb-4">
                  Un code de 6 chiffres a été envoyé au {formData.phone}
                </p>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="000000"
                  className="w-full text-center text-2xl tracking-widest px-3 py-2 border border-[var(--border-gray)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
                  maxLength={6}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={otp.length !== 6 || isLoading}
                className="w-full px-4 py-2 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Vérification...' : 'Vérifier le code'}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-[var(--primary-green)] hover:underline"
                >
                  Modifier mes informations
                </button>
              </div>
            </form>
          )}

          {/* Login Link */}
          <div className="mt-12 text-center">
            <p className="text-[var(--neutral-gray)]">
              Déjà un compte ?{' '}
              <Link to="/connexion" className="text-[var(--primary-green)] hover:underline font-medium">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
