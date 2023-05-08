import { useState, useEffect } from "react";

const useCarrito = () => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );
  const agregarAlCarrito = (item, cantidad = 1) => {
    console.log(item);

    const copiaCarrito = [...carrito];
    const itemEncontrado = copiaCarrito.find((prod) => prod.id === item.id);
    if (itemEncontrado) {
      itemEncontrado.cant += +cantidad;
      setCarrito(copiaCarrito);
    } else {
      // si el item no existe se agrega al carrito
      const nuevoItemAlCarrito = {...item}; //se usa el operaador para sacar una copia
      nuevoItemAlCarrito.cant = +cantidad; // sele agrega a la propiedad cant el obeto nuevoitemcarrito el valor de 1
      copiaCarrito.push(nuevoItemAlCarrito); //se agrega el objeto nuevoItemCarrito usando push
      setCarrito(copiaCarrito);

    }
  };
  // esta funcion eliminara el item
  const eliminarDelCarrito = (id) => {
    const copiaCarrito = [...carrito];
    const nuevosProductos = copiaCarrito.filter((prod) => prod.id !== id);
    setCarrito(nuevosProductos); 
    if(carrito.length===0){
      
    }
  };
  
  const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  useEffect(() => {
    guardarCarrito();
  }, [carrito]);

  return {agregarAlCarrito, carrito, eliminarDelCarrito};
};

export default useCarrito;
