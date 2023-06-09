import { CartContext, CartItem } from "@contexts/CartContext";
import { useContext } from "react";

const CartProduct = ({ item }: CartProductProps) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div key={item.id}>
      <h3>{item.name}</h3>
      <button onClick={() => addToCart(item)}>+</button>
      <button onClick={() => removeFromCart(item.id)}>-</button>
    </div>
  );
};

type CartProductProps = {
  item: CartItem;
};

export default CartProduct;
