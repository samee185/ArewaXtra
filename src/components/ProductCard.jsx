import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-black border border-yellow-600 text-white rounded-lg shadow-md px-4 py-3 w-36 md:w-64">
            <img
                src={product.images[0]}
                alt={product.title}
                className="h-28 md:h-56 w-full object-cover rounded-md"
            />
            <div className="mt-4">
                <h3 className="text-md md:text-2xl text-center">{product.title}</h3>
                <div className="flex items-center justify-center mt-2">
                    <span className="text-yellow-400">
                        {"★".repeat(Math.floor(4))}
                        {"☆".repeat(5 - Math.floor(4))}
                    </span>
                    <span className="text-sm ml-2">({4.5})</span>
                </div>
                <p className="mt-2 text-lg  text-center">&#8358; {product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;
