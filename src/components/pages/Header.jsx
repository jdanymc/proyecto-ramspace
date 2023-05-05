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
            <li className="active"><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/catalogo">Catalogo</a></li>
            <li><a className="contact" href="/contacto">Contactar</a></li>
        </ul>
        <div className="user-widget">
          <a href="./cart"> <i className="fa-regular fa-user"></i></a>
         </div>
       
        <div className="car-widget">
         <p> <i className="fa-solid fa-cart-shopping"></i> </p><p className="car-counter">1</p>
        </div>
    </nav>
</header>
  )
}

export default header