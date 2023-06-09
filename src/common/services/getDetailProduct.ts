import { URL_JSON_PRODUCTS } from "@constants/global.constant";
import { readJSONFile } from "@helpers/readJSONFile";
import { ProductInterface } from "@interfaces/product";

export const getDetailProduct = async (slug: string) => {
  try {
    const products = await readJSONFile(URL_JSON_PRODUCTS);

    const product = products.find(
      (product: ProductInterface) => product.slug === slug
    );

    return product;
  } catch (error) {
    console.error(`Error reading JSON file: ${error}`);
  }
};
