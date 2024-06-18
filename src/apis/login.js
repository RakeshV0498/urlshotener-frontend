import axios from "axios";
import { backendURL } from "./constants.js";

export const userLogin = async (userData) => {
  try {
    const response = await axios.post(`${backendURL}login`, userData);
    return await response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
