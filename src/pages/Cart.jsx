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
    <div className="bg-black text-white min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-600 mb-8 text-center">Your Cart</h1>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          {cart.length === 0 ? (
            <p className="text-xl text-center text-gray-400">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item._id} className="flex items-center justify-between py-4 border-b border-gray-700">
                  <div className="flex items-center space-x-4">
                    <img src={item.images[0]} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                    <div>
                      <p className="text-lg font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold">₦{item.price}</span> 
                    <div className="flex items-center space-x-2">
                      <button
                        className="bg-yellow-600 text-black px-3 py-1 rounded-md hover:bg-yellow-500 transition"
                        onClick={() => updateCartQuantity(item._id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">{item.quantity}</span>
                      <button
                        className="bg-yellow-600 text-black px-3 py-1 rounded-md hover:bg-yellow-500 transition"
                        onClick={() => updateCartQuantity(item._id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: <span className="text-yellow-600">₦{getCartAmount()}</span></p> {/* Display total in Naira */}
            <button className="bg-yellow-600 text-black px-6 py-3 rounded-lg text-lg hover:bg-yellow-500 transition">
              Proceed to Checkout
            </button>
          </div>

          {/* Continue Shopping Button */}
          <div className="mt-4 text-center">
            <button
              onClick={handleContinueShopping}
              className="bg-gray-700 text-yellow-600 px-6 py-2 rounded-lg text-lg hover:bg-yellow-600 hover:text-black transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
