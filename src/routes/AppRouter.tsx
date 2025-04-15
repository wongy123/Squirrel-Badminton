import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import ProductsPage from "../pages/Products";
import ProductDetailPage from "../pages/ProductDetail";
import NotFoundPage from "../pages/NotFound";
import DefaultLayout from "../components/layout/Default";

const AppRouter = () => {
  return (
    <Routes>
        <Route element={<DefaultLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
