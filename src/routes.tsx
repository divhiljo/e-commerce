import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { HomePage } from "./pages/HomePage";
import { CataloguePage } from "./pages/CataloguePage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { TrackingPage } from "./pages/TrackingPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { PricingPage } from "./pages/PricingPage";
import { ReturnsPage } from "./pages/ReturnsPage";
import { ContactPage } from "./pages/ContactPage";
import { LegalPage } from "./pages/LegalPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AdminDashboard } from "./pages/AdminDashboard";
import { SupplierDashboard } from "./pages/SupplierDashboard";
import { DeliveryDashboard } from "./pages/DeliveryDashboard";
import { NotFound } from "./pages/NotFound";

// Wrapper components for layouts with props
const AdminLayout = () => <DashboardLayout role="admin" />;
const SupplierLayout = () => <DashboardLayout role="supplier" />;
const DeliveryLayout = () => <DashboardLayout role="delivery" />;

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "catalogue", Component: CataloguePage },
      { path: "produit/:id", Component: ProductPage },
      { path: "panier", Component: CartPage },
      { path: "commander", Component: CheckoutPage },
      { path: "suivi", Component: TrackingPage },
      { path: "comment-ca-marche", Component: HowItWorksPage },
      { path: "tarification", Component: PricingPage },
      { path: "retours", Component: ReturnsPage },
      { path: "contact", Component: ContactPage },
      { path: "mentions-legales", Component: LegalPage },
      { path: "connexion", Component: LoginPage },
      { path: "inscription", Component: RegisterPage },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
    ],
  },
  {
    path: "/fournisseur",
    Component: SupplierLayout,
    children: [
      { index: true, Component: SupplierDashboard },
    ],
  },
  {
    path: "/livreur",
    Component: DeliveryLayout,
    children: [
      { index: true, Component: DeliveryDashboard },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
