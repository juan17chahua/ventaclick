import axios from "axios";

export const readJSONFile = async (filePath: string) => {
  try {
    const response = await axios.get(filePath);
    return response.data;
  } catch (error) {
    console.error(`Error reading JSON file: ${error}`);
  }
};
