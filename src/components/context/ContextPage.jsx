import { createContext, useState } from "react";
import useCarrito from "../hooks/useCarrito";
import PropTypes from "prop-types";
export const UserContext = createContext();

export const ContextPage = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { agregarAlCarrito, carrito, eliminarDelCarrito } = useCarrito();
  
  const handleCarrito = () => {
    setModalVisible(!modalVisible);
    document.body.style.overflow = !modalVisible ? "hidden" : "unset";
  };

  return (
    <UserContext.Provider
      value={{
        agregarAlCarrito,
        carrito,
        eliminarDelCarrito,
        modalVisible,
        handleCarrito,
        setModalVisible
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

ContextPage.propTypes = {
  children: PropTypes.node.isRequired,
};
