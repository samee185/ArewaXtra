import React, { useEffect, useState } from "react";
import { useShop } from "../contexts/ShopContext";
import ProductCard from "./ProductCard";

const RelatedProduct = ({ category, subcategory }) => {
  const { products } = useShop();
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // Clone products array
      let filteredProducts = products;

      // Filter by category
      if (category) {
        filteredProducts = filteredProducts.filter(
          (item) => item.category === category
        );
      }

      // Further filter by subcategory if provided
      if (subcategory) {
        filteredProducts = filteredProducts.filter(
          (item) => item.subcategory === subcategory
        );
      }

      // Limit to 5 related products
      setRelated(filteredProducts.slice(0, 4));
    }
  }, [products, category, subcategory]); // Include dependencies

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2 text-yellow-600 pb-12">
        RELATED PRODUCTS
      </div>
      <div className="flex items-center justify-center gap-6">
        {related.length > 0 ? (
          related.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No related products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProduct;
