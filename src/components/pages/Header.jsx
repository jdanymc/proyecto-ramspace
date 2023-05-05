import { NavLink } from "react-router-dom";

const header = () => {
  return (
    <header>
    <nav>
        <div>
            <img className="logo" src="./img/logo/logo_white.png" alt="logo"/>
        </div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="bar-btn">
            <i className="fa-solid fa-bars"></i>
        </label>
        <ul className="nav-menu">

        
            <li className="active"><NavLink to={"/"}>Inicio</NavLink></li>
        
            <li><NavLink to={"/nosotros"}>Nosotros</NavLink></li>
            <li><NavLink to={"/catalogo"}>Catalogo</NavLink></li>
            <li><NavLink className="contact" to={"/contacto"}>Contactar</NavLink></li>
        </ul>
        <div className="user-widget">
          <NavLink to={"./cart"}> <i className="fa-regular fa-user"></i></NavLink>
         </div>
       
        <div className="car-widget">
         <p> <i className="fa-solid fa-cart-shopping"></i> </p><p className="car-counter">1</p>
        </div>
    </nav>
</header>
  )
}

export default header
=======
import React from 'react'

const Header = () => {
  return (
    <nav>
            <div>
                <img class="logo" src="./img/logo/logo_white.png" alt="logo"/>
            </div>
            <input type="checkbox" id="check"/>
            <label for="check" class="bar-btn">
                <i class="fa-solid fa-bars"></i>
            </label>
            <ul class="nav-menu">
                <li class="active"><a href="./">Inicio</a></li>
                <li><a href="./nosotros.html">Nosotros</a></li>
                <li><a href="./gallery.html">Catalogo</a></li>
                <li><a class="contact" href="./contactenos.html">Contactar</a></li>
            </ul>
            <div class="user-widget">
              <a href="./user.html"> <i class="fa-regular fa-user"></i></a>
             </div>
           
            <div class="car-widget">
             <p> <i class="fa-solid fa-cart-shopping"></i> </p><p class="car-counter">1</p>
            </div>
        </nav>
  )
}

export default Header
>>>>>>> ade2e4795deccdc81ff94bc4f583554cc5eb8a5a
