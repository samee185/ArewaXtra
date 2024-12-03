import React, { useEffect } from 'react';
import { useShop } from '../contexts/ShopContext';  
import ProductCard from './ProductCard';

const AllProduct = () => {
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

  return (
    <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default AllProduct;
