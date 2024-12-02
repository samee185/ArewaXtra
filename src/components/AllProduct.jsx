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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProduct;
