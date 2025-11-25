import { Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const App = () => {
  return (
    <Routes>
      {/* Home → shows products + search */}
      <Route path="/" element={<ProductListPage />} />

      {/* Dynamic Product Detail Route */}
      <Route path="/product/:id" element={<ProductDetailPage />} />

      {/* 404 Page */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default App;
