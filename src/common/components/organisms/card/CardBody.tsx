import { ProductInterface } from "@interfaces/product";
import ListCategoryProduct from "@molecules/card/ListCategoryProduct";
import { Link } from "react-router-dom";

const CardBody = ({ product }: CardBodyProps) => {
  return (
    <div className="flex flex-col p-2 gap-3">
      <Link to={`/product/${product.slug}`}>
        <h2 className="text-lg font-semibold">{product.name}</h2>
      </Link>
      <p className="text-sm">{product.description}</p>
      <ListCategoryProduct categories={product.category} />
    </div>
  );
};

type CardBodyProps = {
  product: ProductInterface;
};

export default CardBody;
