import React, { useEffect } from 'react';
import { useShop } from '../contexts/ShopContext'; // Assuming your ShopContext is properly set up
import ProductCard from './ProductCard';

const LatestArrivals = () => {
  const { products, fetchProducts, loading } = useShop();

  useEffect(() => {
    if (!products || !products.length) {
      fetchProducts();
    }
  }, [products, fetchProducts]);

  if (loading) return <div>Loading...</div>;
  if (!Array.isArray(products)) {
    return <div>Error loading products. Please try again later.</div>;
  }

  // Get the last 6 products
  const latestProducts = products.slice(-6).reverse(); // Reverse to show the latest first

  return (
    <>
        <p className="text-2xl md:text-4xl lg:text-5xl font-thin text-yellow-600 text-center pt-6 pb-2 ">New Arrivals</p>
        <p className="text-white text-center mb-12">Discover Fresh Styles: Explore ArewaXtra's Latest Arrivals Today!</p>
        <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap pb-12">
            
        {latestProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
        </div>
    </>
  );
};

export default LatestArrivals;
