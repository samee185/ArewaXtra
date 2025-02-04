import React from 'react';
import { useShop } from '../contexts/ShopContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, getCartAmount, updateCartQuantity } = useShop();
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3 text-center">
        <h1 className="text-yellow-600 text-4xl font-bold">YOUR CART</h1>
      </div>

      <div className="container mx-auto px-4">
        {cart.length === 0 ? (
          <p className="text-xl text-center text-gray-500 mt-10">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-1 sm:grid-cols-3 items-center gap-6"
              >
                <div className="flex gap-6 items-center">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-20 sm:w-24 rounded-md"
                  />
                  <div className="flex flex-col">
                    <p className="text-base sm:text-sm font-semibold">
                      {item.title}
                    </p>
                    <p className="text-sm sm:text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between sm:gap-4">
                  <div className="flex items-center gap-5">
                    <p className="text-lg sm:text-sm font-medium text-yellow-600">
                      ₦{item.price}
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        className="bg-yellow-600 text-black px-3 py-1 rounded-md hover:bg-yellow-500 transition"
                        onClick={() =>
                          updateCartQuantity(item._id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        className="bg-yellow-600 text-black px-3 py-1 rounded-md hover:bg-yellow-500 transition"
                        onClick={() =>
                          updateCartQuantity(item._id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end sm:justify-center">
                  <button
                    onClick={() => updateCartQuantity(item._id, 0)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px] bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold">
              Total:{" "}
              <span className="text-yellow-600">₦{getCartAmount()}</span>
            </p>
            <div className="w-full text-end">
              <button className="bg-black text-white text-sm my-8 px-8 py-3 rounded-lg hover:bg-gray-800 transition">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>

        {/* Continue Shopping Button */}
        <div className="mt-4 text-center">
          <button
            onClick={handleContinueShopping}
            className="border border-white text-yellow-600 px-6 py-2 rounded-lg text-lg hover:bg-yellow-600 hover:text-black transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
