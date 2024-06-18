import axios from "axios";
import { backendURL } from "./constants.js";

export const urlShorten = async (longURL) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(`${backendURL}urls/shorten`, longURL, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
