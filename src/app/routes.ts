import { createBrowserRouter } from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import ProductPage from './pages/ProductPage';
import Dashboard from './pages/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'catalogue', Component: Catalogue },
      { path: 'produit/:id', Component: ProductPage },
    ],
  },
  {
    path: '/admin',
    Component: Dashboard,
  },
]);
