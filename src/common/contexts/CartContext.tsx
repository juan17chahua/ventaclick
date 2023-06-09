import { createContext, useState } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  isItemInCart: (itemId: number) => boolean;
}

const defaultCartContextValues: CartContextProps = {
  cartItems: [],
  addToCart: () => void {},
  removeFromCart: () => void {},
  clearCart: () => void {},
  isItemInCart: () => false,
};

export const CartContext = createContext<CartContextProps>(
  defaultCartContextValues
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isItemInCart = (itemId: number) => {
    return cartItems.some((item) => item.id === itemId);
  };

  const cartContextValues: CartContextProps = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    isItemInCart,
  };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
};

type CartProviderProps = {
  children: JSX.Element | JSX.Element[];
};
