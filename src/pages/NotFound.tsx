import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h1 className="mb-4">Page non trouvée</h1>
      <p className="text-[var(--neutral-gray)] mb-8">
        La page que vous recherchez n'existe pas.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-[var(--primary-green)] text-white rounded hover:bg-[var(--primary-green-dark)]"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
