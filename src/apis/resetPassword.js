import axios from "axios";
import { backendURL } from "./constants.js";

export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post(`${backendURL}reset-password/${token}`, {
      newPassword,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
