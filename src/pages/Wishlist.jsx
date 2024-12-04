import React from "react";
import { useShop } from "../contexts/ShopContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useShop(); 

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
      <h1 className="text-4xl font-bold text-yellow-600 text-center mb-8">
        Your Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-xl text-gray-400">Your wishlist is empty!</p>
          <button
            className="mt-5 px-6 py-3 bg-yellow-600 text-white font-medium rounded-md hover:bg-yellow-500 transition"
            onClick={() => window.location.assign("/shop")}
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <div
              key={item._id}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              {/* Image Section */}
              <div
                className="w-full h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.images[0]})` }}
              ></div>

              {/* Details Section */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-2xl font-semibold text-yellow-600 truncate">
                    {item.title}
                  </h2>
                  <p className="text-gray-400 mt-2 truncate">
                    {item.description || "No description available."}
                  </p>
                  <p className="text-yellow-600 font-medium mt-4">
                    &#8358; {item.price}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => removeFromWishlist(item._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => window.location.assign(`/shop/${item._id}`)}
                    className="px-4 py-2 bg-yellow-600 text-black font-medium rounded-md hover:bg-yellow-500 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
