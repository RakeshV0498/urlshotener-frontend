import axios from "axios";
import { backendURL } from "./constants";

export const userSignup = async (userData) => {
  try {
    const response = await axios.post(`${backendURL}register`, userData);
    return await response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
