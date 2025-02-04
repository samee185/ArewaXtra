import React, { useEffect } from 'react';
import { useShop } from '../contexts/ShopContext';``
import ProductCard from './ProductCard';

const LatestArrivals = () => {
  const { products, fetchProducts, loading } = useShop();

  useEffect(() => {
    if (!products || !products.length) {
      fetchProducts();
    }
  }, [products, fetchProducts]);

  if (loading) return <div className='text-gray-200'>Loading...</div>;
  if (!Array.isArray(products)) {
    return <div className='text-lg text-center text-white'>Error loading products. Please try again later.</div>;
  }

  const latestProducts = products.slice(-6).reverse();

  return (
    <>
        <p className="text-2xl md:text-4xl lg:text-5xl font-thin text-yellow-600 text-center pt-12 pb-1 ">New Arrivals</p>
        <p className="text-white text-center pb-6 md:pb-10">Discover Fresh Styles: Explore ArewaXtra's Latest Arrivals Today!</p>
        <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap pb-12">
            
        {latestProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
        ))}
        </div>
    </>
  );
};

export default LatestArrivals;
