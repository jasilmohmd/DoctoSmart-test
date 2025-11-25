import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setProduct(data);
      } catch {
        setProduct(null);
      }
      setLoading(false);
    };

    loadProduct();
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading...</div>;

  if (!product)
    return (
      <div className="text-center py-20">
        <h1 className="text-red-500 text-xl mb-4">404 - Product Not Found</h1>
        <button className="bg-blue-500 text-white px-4 py-2" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <button className="text-blue-500 mb-4" onClick={() => navigate("/")}>
        ← Back
      </button>

      <div className="bg-white shadow-md rounded-lg p-6 flex gap-6">
        <img src={product.image} className="w-80 h-80 object-contain" />
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl text-blue-600 font-bold mt-2">${product.price}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
