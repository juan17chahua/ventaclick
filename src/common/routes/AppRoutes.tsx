import { CartProvider } from "@contexts/CartContext";
import UnauthorizedPage from "@modules/Error/403";
import Error404 from "@modules/Error/404";
import CartPage from "@pages/Cart";
import HomePage from "@pages/Home";
import NameProductPage from "@pages/[nameProduct]";
import Layout from "common/templates/layout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:nameProduct" element={<NameProductPage />} />
            <Route path="/carrito" element={<CartPage />} />
            <Route path="/403" element={<UnauthorizedPage />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="*" element={<Navigate to={"/404"} replace />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
};
