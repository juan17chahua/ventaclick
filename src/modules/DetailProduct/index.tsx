import EmptyData from "@atoms/Empty/EmptyData";
import EmptyError from "@atoms/Empty/EmptyError";
import Loader from "@atoms/loader";
import ListCategoryProduct from "@molecules/card/ListCategoryProduct";
import CardFooterDetail from "@organisms/card/CardFooterDetail";
import { getDetailProduct } from "@services/getDetailProduct";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const { nameProduct } = useParams();

  const {
    data = [],
    error,
    isLoading,
  } = useQuery(["getDetailProduct"], () =>
    getDetailProduct(nameProduct as string)
  );

  if (isLoading) return <Loader />;
  if (error) return <EmptyError />;
  if (!data) return <EmptyData text="NO se encuentra el producto" />;

  return (
    <section className="border">
      <div
        className="grid lg:grid-cols-2 gap-4
      "
      >
        <img src={data.image} alt={data.name} className="" />
        <div className="flex flex-col gap-8 py-10 px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-blue-500">{`S/. ${
                data.price - data.discount
              }`}</span>
              <span className="font-bold line-through	text-red-500">
                {`S/. ${data.discount}`}
              </span>
            </div>
          </div>
          <ListCategoryProduct categories={data.category} />
          <p>
            <span className="font-bold">Stock: </span>
            {data.stock}
          </p>
          <p className="">{data.description}</p>

          <CardFooterDetail product={data} />
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
