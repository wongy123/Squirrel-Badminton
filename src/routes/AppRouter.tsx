import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import ProductsPage from "../pages/Products";
import ProductDetailPage from "../pages/ProductDetail";
import NotFoundPage from "../pages/NotFound";
import DefaultLayout from "../components/layout/Default";
import WebsiteDesign from "../pages/WebsiteDesign";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products">
          <Route index element={<ProductsPage />} />
          <Route path=":brand/:id" element={<ProductDetailPage />} />
        </Route>
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/design" element={<WebsiteDesign />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
