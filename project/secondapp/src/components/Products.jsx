import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchproduct = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products?limit=20");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.log('Something Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchproduct();
  }, []);

  // Skeleton Loading Component
  const ProductSkeleton = () => (
    <div className="w-50 p-10 rounded bg-white animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
      <div className="h-3 bg-gray-300 rounded w-2/3 mb-4"></div>
      <div className="w-30 h-8 bg-gray-300 rounded mt-5"></div>
    </div>
  );

  return (
    <>
      <div className="bg-amber-500 p-10 h-40 flex justify-center items-center">
        <div className="text-center">
          <p className="text-2xl">Use Effect</p>
        </div>
      </div>

      <div className="p-10 vh-100 bg-amber-100 flex justify-between items-center flex-wrap gap-20">
        {loading ? (
          // Show skeleton when loading
          Array.from({ length: 5 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))
        ) : (
          // Show actual products when data is loaded
          products.map((e, i) => (
            <div className="w-50 p-10 rounded bg-white" key={i}>
              <img 
                src={e.images && e.images[0]} 
                alt={e.title} 
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h1 className="font-semibold text-lg mb-2">{e.title}</h1>
              {/* <p className="text-gray-600 mb-4">{e.description}</p> */}
              <button className="w-30 bg-black text-white rounded mt-5 px-4 py-2 hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Products;