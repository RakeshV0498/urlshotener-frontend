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

export const userVerify = async (verificationToken) => {
  try {
    const response = await axios.get(
      `${backendURL}verify-email/${verificationToken}`
    );
    return await response.data;
  } catch (error) {
    console.error("Error verifying email:", error);
    throw error;
  }
};
