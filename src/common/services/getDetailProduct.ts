import { URL_JSON_PRODUCTS } from "@constants/global.constant";
import { readJSONFile } from "@helpers/readJSONFile";
import { ProductInterface } from "@interfaces/product";

export const getDetailProduct = async (id: number) => {
  try {
    const products = await readJSONFile(URL_JSON_PRODUCTS);

    const product = products.find(
      (product: ProductInterface) => product.id === id
    );

    return product;
  } catch (error) {
    throw new Error(`Error reading JSON file: ${error}`);
  }
};
