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