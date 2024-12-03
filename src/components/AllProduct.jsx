import React, { useEffect, useState } from 'react';
import { useShop } from '../contexts/ShopContext';  
import ProductCard from './ProductCard';

const AllProduct = () => {
  const { products, fetchProducts, loading } = useShop();
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const productsPerPage = 12; // Products per page

  useEffect(() => {
    if (!products || !products.length) {
      fetchProducts();
    }
  }, [products, fetchProducts]);

  if (loading) return <div>Loading...</div>; 
  if (!Array.isArray(products)) {
    return <div>Error loading products. Please try again later.</div>;
  }

  // Calculate indices for slicing products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Function to handle previous and next page navigation
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap pb-16">
        {currentProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-20">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-2 border rounded hover:bg-yellow-600 transition duration-500 ${
            currentPage === 1 ? 'cursor-not-allowed text-gray-200' : 'text-yellow-600'
          }`}
        >
          &larr; Previous
        </button>
        <span className="px-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-2 border rounded hover:bg-yellow-600 transition duration-500 ${
            currentPage === totalPages ? 'cursor-not-allowed text-gray-200' : 'text-yellow-600'
          }`}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default AllProduct;
