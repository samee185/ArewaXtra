import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ShopContext = createContext();

export const useShop = () => {
  return useContext(ShopContext);
};

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  // Fetch Products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/products`);
      setProducts(response.data.data.products);
      console.log(response.data.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get Product Details
  const getProductDetails = (id) => {
    return products.find((product) => product.id === id);
  };

  // Add to Cart
  const addToCart = (productId, quantity = 1) => {
    const product = products.find((p) => p._id === productId);
    if (!product) {
      toast.error("Product not found");
      return;
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);

      if (existingProduct) {
        // If the product already exists in the cart, increase its quantity
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If the product does not exist in the cart, add it with the specified quantity
        return [...prevCart, { ...product, quantity }];
      }
    });

    // Display a success toast notification
    toast.success(`${product.title} added to cart`);
  };

  // Get Cart Count
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Update Cart Quantity
  const updateCartQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Get Total Cart Amount
  const getCartAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Add to Wishlist
  const addToWishlist = (productId) => {
    const product = products.find((p) => p._id === productId);
    if (!product || wishlist.some((item) => item._id === productId)) return;

    setWishlist((prevWishlist) => [...prevWishlist, product]);
    toast.success(`${product.title} added to wishlist`)
  };

  // Initial Data Fetch
  useEffect(() => {
    fetchProducts();
  }, []);

  // Context Values
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
  };

  return (
    <ShopContext.Provider value={values}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
