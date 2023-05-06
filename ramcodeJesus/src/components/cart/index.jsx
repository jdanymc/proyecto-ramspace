import React from 'react'

const CarritoRapido = () => {
  return (
    <section className="minicart">
    <div className="minicart__header">
      <h3 className="miniheader__titulo">Carrito</h3>
      <p className="miniheader__cerrar"><i className="fa-solid fa-xmark"></i></p>
    </div>
    <div className="minicart__producto">
      <div className="minicart__img">
        <img
          src="./img/img-componentes-pc/producto-referencial-ram.jpg"
          height="200"
        />
      </div>
      <div className="minicart__detail">
        <div className="detail_content">
          <div className="detail__product">
            <h4>Producto</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div><i className="fa-solid fa-trash-can"></i></div>
        </div>
        <div>
          <div className="detail__footer">
            <p className="total__cantidad"><select name="" id=""><option value="1">&nbsp;&nbsp;&nbsp;1</option><option value="2">&nbsp;&nbsp;&nbsp;2</option> </select></p>
            <p className="total__precio">S/ 999.99</p>
          </div>
        </div>
      </div>
    </div>

    <div className="minicart__footer">
      <div className="minifooter__total">
        <p className="total__texto">Total</p>
        <p className="total__precio">S/ 999.99</p>
      </div>
      <a href="./cart.html" className="btn ">Comprar</a>
    </div>
  </section>
  )
}

export default CarritoRapido