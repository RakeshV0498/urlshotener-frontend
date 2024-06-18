import { jwtDecode } from "jwt-decode";

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    try {
      // Decode the token using jwt-decode
      const decodedPayload = jwtDecode(token);
      console.log(decodedPayload);
      // Check if the token payload contains an 'active' field
      return decodedPayload && decodedPayload.active === true;
    } catch (error) {
      console.error("Error decoding token:", error);
      return false;
    }
  }
  return false;
};
