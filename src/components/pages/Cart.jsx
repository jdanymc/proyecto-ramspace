import { Link } from "react-router-dom"

const Cart = () => {
  return (
    <main className="main_cart container">
        <h5><i className="fa-solid fa-cart-shopping"></i> Carrito de compras</h5>
        <div className="cart_detail row">
          <div className="detail__items col-md-10 p-5">
            <div className="d-flex row">
              <div className="detail__cab">
                <div>Producto</div>
                <div>Precio</div>
                <div>Cantidad</div>
                <div>Subtotal</div>
                <div>&nbsp;</div>
              </div>
              <div className="detail__producto d-flex mt-2">
                <div className="dp__producto d-flex">
                  <div className="dp__producto_precio d-flex">
                    <div className="dp__img d-flex">
                      <div><a href="#">
                        <img
                          src="./img/img-componentes-pc/producto-referencial-ram.jpg"
                          height="100"
                          alt=""
                        /></a>
                      </div>
                      <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Saepe sapiente, expedita et sunt ab esse dolorem
                        impedit doloribus
                      </div>
                    </div>
                    <div className="dp__precio">S/ 999.99</div>
                  </div>
                  <div className="dp__cantidad_subtotal d-flex">
                    <div className="dp_cantidad d-flex">
                      <div><a href="#"><i className="fa-solid fa-plus"></i></a></div>
                      <div className="dp_cantidad_numero"><span>1</span></div>
                      <div><a href="#"><i className="fa-solid fa-minus"></i></a></div>
                    </div>
                    <div className="dp_subtotal">S/ 999.99</div>
                  </div>
                </div>
                <div className="dp__elimina">
                  <a href="#"><i className="fa-solid fa-trash-can"></i></a>
                </div>
              </div>
              <div className="detail__producto d-flex mt-2">
                <div className="dp__producto d-flex">
                  <div className="dp__producto_precio d-flex">
                    <div className="dp__img d-flex">
                      <div><a href="#">
                        <img
                          src="./img/img-componentes-pc/producto-referencial-ram.jpg"
                          height="100"
                          alt=""
                        /></a>
                      </div>
                      <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Saepe sapiente, expedita et sunt ab esse dolorem
                        impedit doloribus
                      </div>
                    </div>
                    <div className="dp__precio">S/ 999.99</div>
                  </div>
                  <div className="dp__cantidad_subtotal d-flex">
                    <div className="dp_cantidad d-flex">
                      <div><a href="#"><i className="fa-solid fa-plus"></i></a></div>
                      <div className="dp_cantidad_numero"><span>1</span></div>
                      <div><a href="#"><i className="fa-solid fa-minus"></i></a></div>
                    </div>
                    <div className="dp_subtotal">S/ 999.99</div>
                  </div>
                </div>
                <div className="dp__elimina">
                  <a href="#"><i className="fa-solid fa-trash-can"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="tu__compra col-md-2">
            <h3>Tu compra</h3>
            <div className="minicart__footer">
              <div className="minifooter__total">
                <p className="total__texto">Total</p>
                <p className="total__precio">S/ 999.99</p>
              </div>
              <Link to="/pago" className="btn">Ir a pagar</Link>
            </div>
            <h5><Link to="/catalogo">Seguir Comprando</Link></h5>
          </div>
        </div>
      </main>
  )
}

export default Cart