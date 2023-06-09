import EmptyData from "@atoms/Empty/EmptyData";
import { CartContext } from "@contexts/CartContext";
import CartDetails from "common/templates/CartDetails";
import TableProductCart from "common/templates/TableProductCart";
import { useContext } from "react";

const CartModule = () => {
  const { cartItems } = useContext(CartContext);

  if (!cartItems.length)
    return <EmptyData text="NO hay productos en el carrito" />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">
      <TableProductCart cartItems={cartItems} />
      <CartDetails />
    </div>
  );
};

export default CartModule;
