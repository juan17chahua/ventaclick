import axios from "axios";

export const readJSONFile = async (filePath: string) => {
  try {
    const response = await axios.get(filePath);
    return response.data;
  } catch (error) {
    throw new Error(`Error reading JSON file: ${error}`);
  }
};
