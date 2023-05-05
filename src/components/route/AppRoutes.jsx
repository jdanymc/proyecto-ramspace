import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from "../App";
import Home from "../pages/Home";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import Cart from "../pages/Cart";
import Catalogo from "../pages/Catalogo";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="catalogo" element={<Catalogo/>} />
        <Route path="nosotros" element={<Nosotros/>} />
        <Route path="contacto" element={<Contacto/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRoutes;
