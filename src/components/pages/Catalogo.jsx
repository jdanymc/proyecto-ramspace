import axios from "axios";
import { URL_API_STORE } from "../../constants";
import { useState, useEffect } from "react";
import Product from "../product";
import '../../css/gallery.css'

const Catalogo = () => {
  const [productos, setProductos] = useState([]);


  const getProducts = async () => {
    const response = await axios.get(
      `${URL_API_STORE}/products`
    );
    setProductos(response.data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      <div className="container d-flex flex-column">
        <h1 className="title-container">Nuestros productos</h1>
        <div className="cards">
          {
            productos.map((producto) => (
              <div className="card" key={producto.id}>
              <Product item={producto} />
              </div>
            ))
          }
        </div>
      </div>
    </main>
  );
};

export default Catalogo;
