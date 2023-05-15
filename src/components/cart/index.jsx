import { Link } from "react-router-dom";
import { UserContext } from "../context/ContextPage";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
//import './styles.css';

const CarritoRapido = () => {
  const {
    agregarAlCarrito,
    carrito,
    eliminarDelCarrito,
    handleCarrito,    
  } = useContext(UserContext);

  const [total, setTotal] = useState(0);

  function calculaTotal(){
    let total = 0;
    carrito.map((item)=>{
      total += item.price * item.cant;
    })
    return total;
  }

  useEffect(()=>{
    setTotal(calculaTotal());
    if (carrito.length  <= 0) {
      handleCarrito();
    }
  },[carrito]);

  return (
    <section className="minicart">
      <div className="minicart__header">
        <h3 className="miniheader__titulo">Tu Carrito</h3>
        <p className="miniheader__cerrar" onClick={handleCarrito}>
          <i className="fa-solid fa-xmark"></i>
        </p>
      </div>
      <div className="minicart__productos">
        {carrito.map((item, index) => (
          <div className="minicart__producto" key={index}>
            <div className="minicart__img">
              <img src={item.image} />
            </div>
            <div className="minicart__detail">
              <div className="detail_content">
                <div className="detail__product">
                  <h4>{item.title}</h4>
                  <p className="product-description">{item.description}</p>
                </div>
                <div>
                  <i
                    className="fa-solid fa-trash-can"
                    onClick={() => {
                      Swal.fire({
                        title: '¿Desea retirar el producto?',
                        showCancelButton: true,
                        confirmButtonText: 'Continuar',
                        cancelButtonText: 'Cancelar',
                      }).then((result) => {
                        if (result.isConfirmed) {
                          eliminarDelCarrito(item.id);
                         
                        }
                      })
                    }}
                  ></i>
                </div>
              </div>
              <div>
                <div className="detail__footer">
                  <p className="total__cantidad">
                    <input
                      type="number"
                      value={item.cant}
                      name="cantidad"
                      onChange={(e) => agregarAlCarrito(item, +e.target.value - item.cant) }
                      min="1"
                    />
                  </p>
                  <p className="total__precio">
                    {(item.price * item.cant).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="minicart__footer">
        <hr />
        <div className="minifooter__total">
          <p className="total__texto">Total</p>
          <p className="total__precio">S/ {total.toFixed(2)}</p>
        </div>
        <Link to="/cart" className="btn" onClick={handleCarrito}>
          Comprar
        </Link>
      </div>
    </section>
  );
};

export default CarritoRapido;
