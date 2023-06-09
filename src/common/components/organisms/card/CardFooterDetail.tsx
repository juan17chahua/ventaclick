import { CartContext } from "@contexts/CartContext";
import { notificationActionPromise } from "@helpers/toast";
import { ProductInterface } from "@interfaces/product";
import { useContext } from "react";

const CardFooterDetail = ({ product }: CardFooterDetailProps) => {
  const { addToCart, isItemInCart } = useContext(CartContext);

  const addProduct = () => {
    notificationActionPromise(addToCart(product), {
      pending: "Agregando al carrito ...",
      success: "Producto agregado al carrito",
      msgError: "Error al agregar al carrito",
    });
  };

  if (!product.stock)
    return (
      <span className="text-center p-2 bg-red-100/50 mt-3 font-semibold text-red-500">
        Producto agotado :(
      </span>
    );

  return (
    <div className="flex justify-between items-center p-2 mt-3 text-sm font-semibold">
      {isItemInCart(product.id) && (
        <span className="w-full text-center p-2 bg-green-100/70 mt-3 font-semibold text-green-700">
          Producto agregado al carrito :)
        </span>
      )}

      {!isItemInCart(product.id) && (
        <button
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-base"
          onClick={addProduct}
        >
          Agregar al carrito
        </button>
      )}
    </div>
  );
};

type CardFooterDetailProps = {
  product: ProductInterface;
};

export default CardFooterDetail;
