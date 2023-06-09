import { URL_JSON_PRODUCTS } from "@constants/global.constant";
import { readJSONFile } from "@helpers/readJSONFile";

export const getProducts = async () => {
  try {
    const products = await readJSONFile(URL_JSON_PRODUCTS);
    return products;
  } catch (error) {
    throw new Error(`Error reading JSON file: ${error}`);
  }
};
