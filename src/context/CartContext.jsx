import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
const initialCart = JSON.parse(localStorage.getItem("myCart")) || [];
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart);
  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cart));
  }, [cart]);

  // 1. Add to Cart Logic
  const addToCart = (product) => {
    setCart((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // 2. Quantity Change (+/-)
  const updateQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (type === "plus") return { ...item, qty: item.qty + 1 };
          if (type === "minus" && item.qty > 1) return { ...item, qty: item.qty - 1 };
        }
        return item;
      })
    );
  };

  // 3. Remove Item
  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

  // 4. Total Price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeItem, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};  

export const useCart = () => useContext(CartContext);