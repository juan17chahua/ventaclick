import { CartContext } from "@contexts/CartContext";
import { notificationActionPromise } from "@helpers/toast";
import { ProductInterface } from "@interfaces/product";
import { useContext } from "react";

const CardFooter = ({ product }: CardFooterProps) => {
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
      <span className="flex justify-between items-center p-2 bg-slate-200/50 mt-3 text-sm font-semibold text-red-500">
        Agotado
      </span>
    );

  return (
    <div className="flex justify-between items-center p-2 bg-slate-200/50 mt-3 text-sm font-semibold">
      {isItemInCart(product.id) && (
        <span className="text-green-700">En carrito</span>
      )}

      {!isItemInCart(product.id) && (
        <button className="text-blue-500" onClick={addProduct}>
          {`S/. ${product.price}`}
        </button>
      )}

      <p className="line-through text-red-400">{`S/. ${
        product.price - product.discount
      }`}</p>
    </div>
  );
};

type CardFooterProps = {
  product: ProductInterface;
};

export default CardFooter;
