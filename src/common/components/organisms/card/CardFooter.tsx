import { CartContext } from "@contexts/CartContext";
import { notificationSuccess } from "@helpers/toast";
import { ProductInterface } from "@interfaces/product";
import { useContext } from "react";

const CardFooter = ({ product }: CardFooterProps) => {
  const { addToCart, isItemInCart } = useContext(CartContext);

  const addProduct = () => {
    addToCart(product);

    notificationSuccess("Producto agregado al carrito");
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
        <button className="text-blue-600" onClick={addProduct}>
          {`S/. ${product.price - product.discount}`}
        </button>
      )}

      <p className="line-through text-red-400">{`S/. ${product.discount}`}</p>
    </div>
  );
};

type CardFooterProps = {
  product: ProductInterface;
};

export default CardFooter;
