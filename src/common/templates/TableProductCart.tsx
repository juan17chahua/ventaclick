import { CartContext, CartItem } from "@contexts/CartContext";
import { useContext } from "react";

const TableProductCart = ({ cartItems }: TableProductCartProps) => {
  const { incrementQuantity, decrementQuantity, removeFromCart, clearCart } =
    useContext(CartContext);

  const HEADER_TABLE_PRODUCT_CART = [
    "Nombre",
    "Precio Unitario",
    "Descuento Unitario",
    "Subtotal",
    "Cantidad",
    "Eliminar",
  ];

  return (
    <section className="flex flex-col gap-4 lg:col-span-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Carrito de compras</h2>
        <button
          className="bg-red-100 hover:bg-red-200 px-2 py-1.5 rounded"
          onClick={clearCart}
        >
          Limpiar carrito
        </button>
      </div>
      <div className="w-full inline-block align-middle">
        <div className="overflow-auto border rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {HEADER_TABLE_PRODUCT_CART.map((header, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cartItems.map((item: CartItem) => (
                <tr key={item.id} className="hover:bg-gray-100/50">
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                    {`S/. ${(item.price - item.discount).toFixed(2)}`}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                    {`S/. ${item.discount.toFixed(2)}`}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                    {`S/. ${item.subtotal.toFixed(2)}`}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap flex justify-center items-center gap-1">
                    <button
                      className="w-6 h-6 bg-gray-200 rounded font-bold"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      className="w-6 h-6 bg-gray-200 rounded font-bold"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm text-center whitespace-nowrap">
                    <button
                      className="text-red-500 p-2 hover:bg-red-100/50 rounded"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

type TableProductCartProps = {
  cartItems: CartItem[];
};

export default TableProductCart;
