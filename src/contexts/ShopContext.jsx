import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const ShopContext = createContext();

export const useShop = () => {
  return useContext(ShopContext);
};

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false );
  const apiUrl = import.meta.env.VITE_API_URL;


  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/products`);
      setProducts(response.data.data.products)
      console.log(response.data.data.products);
      
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const getProductDetails = (id) => {
    return products.find((product) => product.id === id);
  };

  const addToCart = (productId, quantity = 1) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct) {
        // Update quantity if already in cart
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Get cart count
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Update product quantity in cart
  const updateCartQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Get total cart amount
  const getCartAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Add product to wishlist
  const addToWishlist = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (!product || wishlist.some((item) => item.id === productId)) return;

    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const values = {
        products,
        fetchProducts,
        getProductDetails,
        addToCart,
        getCartCount,
        updateCartQuantity,
        getCartAmount,
        cart,
        wishlist,
        addToWishlist,
  }
  return (
    <ShopContext.Provider
      value={values}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;