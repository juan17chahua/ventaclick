import { CartContext } from "@contexts/CartContext";
import CartProduct from "common/templates/CartProduct";
import { useContext } from "react";

const CartModule = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  if (!cartItems.length) return <div>NO hay productos en el carrito</div>;

  return (
    <div>
      <button onClick={clearCart}>Limpiar carrito</button>
      <div>
        {cartItems.map((item) => (
          <CartProduct key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartModule;
