import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./Pages/Navbar";
import Footer from "./pages/Footer";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
