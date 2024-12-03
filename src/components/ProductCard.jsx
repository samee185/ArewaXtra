import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  if (!product) return null; // Handle cases where product is undefined

  return (
    <Link to={`/shop/${product._id}`}>
      <div className="bg-[rgb(26,26,26)] text-white rounded-lg shadow-md px-4 py-3 w-36 md:w-64">
        <img
          src={product.images?.[0] || '/placeholder-image.jpg'} // Fallback for missing image
          alt={product.title || 'Product'}
          className="h-28 md:h-56 w-full object-cover rounded-md"
        />
        <div className="mt-4">
          <h3 className="text-md md:text-2xl text-center">
            {product.title || 'No Title'}
          </h3>
          <div className="flex items-center justify-center mt-2">
            <span className="text-yellow-400">
              {"★".repeat(Math.floor(product.rating || 0))}
              {"☆".repeat(5 - Math.floor(product.rating || 0))}
            </span>
            <span className="text-sm ml-2">({product.rating?.toFixed(1) || '0.0'})</span>
          </div>
          <p className="mt-2 text-lg text-center">
            &#8358; {product.price ? product.price.toFixed(2) : '0.00'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
