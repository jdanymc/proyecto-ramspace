import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CarritoRapido from "../cart";
import { UserContext } from "../context/ContextPage";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { carrito } = useContext(UserContext);

  const handleCarrito = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <header>
      <nav>
        <div>
          <img className="logo" src="/img/logo/logo_white.png" alt="logo" />
        </div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="bar-btn">
          <i className="fa-solid fa-bars"></i>
        </label>
        <ul className="nav-menu">
          <li className="active">
            <NavLink to={"/"}>Inicio</NavLink>
          </li>

          <li>
            <NavLink to={"/nosotros"}>Nosotros</NavLink>
          </li>
          <li>
            <NavLink to={"/catalogo"}>Catalogo</NavLink>
          </li>
          <li>
            <NavLink className="contact" to={"/contacto"}>
              Contactar
            </NavLink>
          </li>
        </ul>
        <div className="user-widget">
          <NavLink to={"./cart"}>
            {" "}
            <i className="fa-regular fa-user"></i>
          </NavLink>
        </div>

        <div className="car-widget" onClick={handleCarrito}>
          <p>
            {" "}
            <i className="fa-solid fa-cart-shopping"></i>{" "}
          </p>
          <p className="car-counter">{carrito.length}</p>
        </div>
      </nav>
      <div id="modal" style={{ right: modalVisible ? "0" : "-100vw" }}>
        <CarritoRapido handleCarrito={handleCarrito} />
      </div>
    </header>
  );
};

export default Header;
