import { ProductInterface } from "@interfaces/product";
import { Link } from "react-router-dom";

const CardBody = ({ product }: CardBodyProps) => {
  return (
    <div className="flex flex-col p-2 gap-2 flex-grow">
      <Link to={`/product/${product.slug}`}>
        <h2 className="font-semibold">{product.name}</h2>
      </Link>
      <p className="text-sm text-gray-500 line-clamp-3">
        {product.description}
      </p>
    </div>
  );
};

type CardBodyProps = {
  product: ProductInterface;
};

export default CardBody;
