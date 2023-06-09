import { CartContext } from "@contexts/CartContext";
import { useContext } from "react";

const CartDetails = () => {
  const { total, totalWithIGV, cartItems } = useContext(CartContext);

  const sendWhatsApp = () => {
    const message = `Hola, quisiera hacer un pedido por un total de S/. ${totalWithIGV.toFixed(
      2
    )} \n \n`;

    const textProduct = cartItems
      .map(
        (product) =>
          `${product.name} (${product.quantity}): S/. ${product.subtotal}`
      )
      .join("\n");
    const mensajeCompleto = message + textProduct;

    const url = `https://wa.me/?text=${encodeURIComponent(mensajeCompleto)}`;

    window.open(url, "_blank");
  };

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

      <button
        className="px-2 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-md"
        onClick={sendWhatsApp}
      >
        Realizar pedido
      </button>
    </div>
  );
};

export default CartDetails;
