import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; 
import { useShop } from "../contexts/ShopContext";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, loading, addToWishList, addToCart } = useShop();
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!loading && products.length > 0) {
      const foundProduct = products.find((item) => item._id === productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.images[0]); 
      }
    }
  }, [loading, products, productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return productData ? (
    <div className="pt-28 px-9 border-t-2 transition-opacity ease-in duration-500 opacity-100">
      {/* Back to Collection Button */}
      <div className="mt-5 mb-5">
        <Link to="/collection" className="inline-block bg-yellow-600 text-white px-4 py-2 rounded hover:bg-gray-300">
          &larr; Back to Collection
        </Link>
      </div>

      {/* Product Data Rendering */}
      <div className="mt-10 flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col gap-3 sm:flex-row">
            <div className="w-full sm:w-[80%]">
                <img src={image} alt="" className="w-full h-auto" />
            </div>  
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full">
            {productData.images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          
        </div>
        
        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-3xl text-white mt-2">
            {productData?.title || "Product Name Not Available"}
          </h1>

          {/* <div className="flex items-center gap-1 mt-2">
            Rating stars here
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">{112}</p>
          </div> */}
          <p className="mt-5 text-xl text-white font-medium">
          &#8358;
            {productData.price}
          </p>
          <p className="mt-5 text-white md:w-4/5">
            {productData.description}
          </p>
          <button
            onClick={() => addToCart(productData. _id)}
            className="bg-yellow-600 border border-yellow-600 text-white px-8 py-3 text-sm active:bg-yellow-600 mt-4"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-white mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      
      {/* Description and review Section */}
      <div className="mt-20">
        <div className="flex text-white">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-small text-white">
          <p>{productData.description}</p>
        </div>
      </div>

      {/* Display related products */}
      <RelatedProduct
        category={productData.category}
      />
    </div>
  ) : (
    <div>No product found.</div>
  );
};

export default Product;