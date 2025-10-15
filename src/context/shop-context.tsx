import { PRODUCTS } from "../api/products";
import { createContext, useState, useEffect, type ReactNode } from "react";

// Type for cart items
interface CartItems {
  [key: number]: number; // key = product ID, value = quantity
}

// Create context with proper type
// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const ShopContext = createContext<any>(null);

// Helper to initialize cart with 0 quantities
const getDefaultCart = (): CartItems => {
  const cart: CartItems = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

// Props type for provider
interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContextProvider: React.FC<ShopContextProviderProps> = ({
  children,
}) => {
  const getInitialCart = (): CartItems => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch {
        console.error("Invalid cart data in localStorage — resetting cart.");
      }
    }
    return getDefaultCart();
  };

  const [cartItems, setCartItems] = useState<CartItems>(getInitialCart);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // --- Cart logic functions ---
  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
  };

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = (cartItems: CartItems): number => {
    let totalAmount = 0;
    for (const [key, qty] of Object.entries(cartItems)) {
      const id = Number(key);
      if (qty <= 0) continue;
      const itemInfo = PRODUCTS.find((p) => p.id === id);
      if (!itemInfo) continue;
      totalAmount += qty * itemInfo.price;
    }
    return totalAmount;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
