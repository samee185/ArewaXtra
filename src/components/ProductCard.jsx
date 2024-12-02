import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 w-64">
            <img
                src={product.images[0]}
                alt={product.title}
                className="h-40 w-full object-cover rounded-md"
            />
            <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <div className="flex items-center mt-2">
                    <span className="text-yellow-400">
                        {"★".repeat(Math.floor(product.rating))}
                        {"☆".repeat(5 - Math.floor(product.rating))}
                    </span>
                    <span className="text-sm ml-2">({product.reviews})</span>
                </div>
                <p className="mt-2 text-xl font-bold">${product.price.toFixed(2)}</p>
                <p className="text-sm mt-1">{product.size}</p>
            </div>
        </div>
    );
};

export default ProductCard;
