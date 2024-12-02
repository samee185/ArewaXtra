import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useShop } from '../contexts/ShopContext';  

const AllProduct = () => {
    const { products, fetchProducts } = useShop();  

    useEffect(() => {
        if (!products.length) {
            fetchProducts();
        }
    }, [fetchProducts, products.length]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default AllProduct;
