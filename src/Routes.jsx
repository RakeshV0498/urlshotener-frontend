import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyNavbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Login from "./pages/Forms/Login";
import Register from "./pages/Forms/Register";
import Verify from "./pages/Verify";
import ForgotPassword from "./pages/Forms/ForgotPassword";
import PasswordReset from "./pages/Forms/ResetPassword";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email/:verificationToken" element={<Verify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<PasswordReset />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
