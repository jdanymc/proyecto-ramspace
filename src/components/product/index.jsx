import { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { UserContext } from "../context/ContextPage";

const Product = (props) => {
  const { item } = props;
  const [cantidad, setCantidad] = useState(1);
  const { handleCarrito, agregarAlCarrito } = useContext(UserContext);

  return (
    <>
      <div className="imgContainer">
        <img className="imagen1frente product-image" src={item.image} alt="" />
        <img className="imagen1atras product-image" src={item.image} alt="" />
      </div>
      <div className="info">
        <div className="rating">
          <input type="radio" name="star" id="star1" />
          <label htmlFor="star1"></label>
          <input type="radio" name="star" id="star2" />
          <label htmlFor="star2"></label>
          <input type="radio" name="star" id="star3" />
          <label htmlFor="star3"></label>
          <input type="radio" name="star" id="star4" />
          <label htmlFor="star4"></label>
          <input type="radio" name="star" id="star5" />
          <label htmlFor="star5"></label>
        </div>
        <h3 className="title product-title">{item.title} </h3>

        <p className="subtitle">{item.category}</p>

        <h4 className="price">S/ {item.price.toFixed(2)}</h4>
        <h4 className="quantity">
          Cantidad:{" "}
          <input
            type="number"
            value={cantidad}
            min={1}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </h4>
        <div className="buttonGroup">
          <button
            className="addToCart"
            onClick={() => {
              agregarAlCarrito(item, cantidad);
              handleCarrito();
            }}
          >
            Agregar al carrito
          </button>
          <button className="buy">Comprar ahora</button>
        </div>
      </div>
    </>
  );
};

Product.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Product;
