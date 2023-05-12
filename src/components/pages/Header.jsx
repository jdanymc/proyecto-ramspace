import { useContext,useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CarritoRapido from "../cart";
import { UserContext } from "../context/ContextPage";

const Header = () => {
  const { carrito, modalVisible, handleCarrito } = useContext(UserContext);
 const modalReference = useRef(null); 
 useEffect(() => {
  modalReference.current.focus();
}, [])
  return (
    <header>
    <nav>
      <div className="items_menu">
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
      </div>
        <div className="items_usuario">
        <div className="linea"></div>
        <div className="user-widget">
          <NavLink to={"./cart"}> <i className="fa-regular fa-user"></i></NavLink>
         </div>
         <div className="linea"></div>
        <div className="car-widget">
         <p> <i className="fa-solid fa-cart-shopping"></i> </p><p className="car-counter">1</p>
        </div>
          </div>
    </nav>
      <div tabIndex={0} ref={modalReference} id="modal" style={{ right: modalVisible ? "0" : "-100vw" }} onKeyUp={(e)=>{
        if(e.key==='Escape'){
          handleCarrito();
        }
      }}>
        <CarritoRapido />
      </div>
    </header>
  );
};

export default Header;
