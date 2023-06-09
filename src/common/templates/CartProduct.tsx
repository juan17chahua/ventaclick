import { CartContext, CartItem } from "@contexts/CartContext";
import { useContext } from "react";

const CartProduct = ({ item }: CartProductProps) => {
  const { incrementQuantity, decrementQuantity } = useContext(CartContext);
  return (
    <div key={item.id}>
      <h3>{item.name}</h3>
      <h3>cantidad: {item.quantity}</h3>
      <button onClick={() => incrementQuantity(item.id)}>+</button>
      <button onClick={() => decrementQuantity(item.id)}>-</button>
    </div>
  );
};

type CartProductProps = {
  item: CartItem;
};

export default CartProduct;
