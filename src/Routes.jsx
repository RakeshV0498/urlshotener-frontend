import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyNavbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Login from "./pages/Forms/Login";
import Register from "./pages/Forms/Register";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
