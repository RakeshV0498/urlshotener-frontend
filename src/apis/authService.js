import { jwtDecode } from "jwt-decode";

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      // Decode the token using jwt-decode
      const decodedPayload = jwtDecode(token);
      // Check if the token payload contains an 'active' field
      return decodedPayload && decodedPayload.active === true;
    } catch (error) {
      console.error("Error decoding token:", error);
      return false;
    }
  }
  return false;
};
