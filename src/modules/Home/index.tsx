import EmptyData from "@atoms/Empty/EmptyData";
import EmptyError from "@atoms/Empty/EmptyError";
import Loader from "@atoms/loader";
import { ProductInterface } from "@interfaces/product";
import InputSearch from "@organisms/input-search";
// import SelectFilterCategory from "@organisms/select/SelectFilterCategory";
import { getProducts } from "@services/getProducts";
import CardProduct from "common/templates/CardProduct";
import { useQuery } from "react-query";
import { useState } from "react";

const HomeModule = () => {
  const [textSearch, setTextSearch] = useState("");
  const {
    data = [],
    error,
    isLoading,
  } = useQuery(["getProducts"], getProducts);

  if (isLoading) return <Loader />;
  if (error) return <EmptyError />;
  if (!data || !data.length) return <EmptyData text="NO hay datos" />;

  const filterData = (category: string) => {
    if (category === "") return data;

    const newData = data.filter((product: ProductInterface) =>
      product.name.toLowerCase().includes(category.toLowerCase())
    );

    return newData;
  };

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-700">Productos</h1>
        <InputSearch
          name="search-products"
          value={textSearch}
          onChange={(event) => setTextSearch(event.target.value)}
        />
        {/* <SelectFilterCategory data={data} updateData={updateData} /> */}
      </div>
      <hr className="mt-3 mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {!filterData(textSearch).length && (
          <div className="col-span-full">
            <EmptyData text="NO hay datos" />
          </div>
        )}

        {filterData(textSearch).map((product: ProductInterface) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default HomeModule;
