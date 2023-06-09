import { ProductInterface } from "@interfaces/product";
import { createContext, useState } from "react";

const IGV_RATE = 0.18;

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  discount: number;
  subtotal: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: ProductInterface) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  isItemInCart: (itemId: number) => boolean;
  incrementQuantity: (itemId: number) => void;
  decrementQuantity: (itemId: number) => void;
  total: number;
  totalWithIGV: number;
}

const defaultCartContextValues: CartContextProps = {
  cartItems: [],
  addToCart: () => void {},
  removeFromCart: () => void {},
  clearCart: () => void {},
  isItemInCart: () => false,
  incrementQuantity: () => void {},
  decrementQuantity: () => void {},
  total: 0,
  totalWithIGV: 0,
};

export const CartContext = createContext<CartContextProps>(
  defaultCartContextValues
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: ProductInterface) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                subtotal: (cartItem.quantity + 1) * cartItem.price,
              }
            : cartItem
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...item, quantity: 1, subtotal: item.price - item.discount },
      ]);
    }
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

  const incrementQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: (item.quantity + 1) * (item.price - item.discount),
            }
          : item
      )
    );
  };

  const decrementQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId
            ? {
                ...item,
                quantity: item.quantity - 1,
                subtotal: (item.quantity - 1) * (item.price - item.discount),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cartItems.reduce((acc, item) => acc + item.subtotal, 0);

  const totalWithIGV = total * (1 + IGV_RATE);

  const cartContextValues: CartContextProps = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    isItemInCart,
    incrementQuantity,
    decrementQuantity,
    total,
    totalWithIGV,
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
