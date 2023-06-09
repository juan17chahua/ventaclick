import { CartContext } from "@contexts/CartContext";
import { useContext } from "react";

const CartDetails = () => {
  const { total, totalWithIGV } = useContext(CartContext);

  return (
    <div className="w-full lg:col-span-2 h-fit sticky top-5 flex flex-col gap-8">
      <h1 className="font-semibold">Detalle del carrito</h1>

      <div className="flex flex-col gap-3">
        <p className="flex justify-between items-center">
          <span>Subtotal:</span>
          <span>{`S/. ${total.toFixed(2)}`}</span>
        </p>
        <p className="flex justify-between items-center">
          <span>IGV:</span>
          <span>18 %</span>
        </p>
        <p className="flex justify-between items-center">
          <span>Total:</span>
          <span>{`S/. ${totalWithIGV.toFixed(2)}`}</span>
        </p>
      </div>

      <button className="px-2 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-md">
        Realizar pedido
      </button>
    </div>
  );
};

export default CartDetails;
