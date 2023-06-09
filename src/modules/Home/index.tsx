import { ProductInterface } from "@interfaces/product";
import { getProducts } from "@services/getProducts";
import CardProduct from "common/templates/CardProduct";
import { useQuery } from "react-query";

const HomeModule = () => {
  const {
    data = [],
    error,
    isLoading,
  } = useQuery(["getProducts"], getProducts, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>CARGANDO ...</div>;
  if (error) return <div>ERROR ...</div>;
  if (!data || !data.length) return <div>NO hay datos ...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((product: ProductInterface) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeModule;
