import { ProductInterface } from "@interfaces/product";
import CardBody from "@organisms/card/CardBody";
import CardFooter from "@organisms/card/CardFooter";
import { Link } from "react-router-dom";

const CardProduct = ({ product }: CardProductProps) => {
  return (
    <article className="border rounded group h-full">
      <Link to={`/product/${product.slug}`}>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <img
            className="w-full h-40 rounded object-cover group-hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
            src={product.image}
            alt={product.name}
          />
        </div>
      </Link>

      <CardBody product={product} />
      <CardFooter product={product} />
    </article>
  );
};

type CardProductProps = {
  product: ProductInterface;
};

export default CardProduct;
