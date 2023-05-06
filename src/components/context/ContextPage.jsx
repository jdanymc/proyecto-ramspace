import { createContext } from "react";
import useCarrito from "../hooks/useCarrito";
export const UserContext = createContext();

export const ContextPage = ({ children }) => {
  const { agregarAlCarrito, carrito, eliminarDelCarrito } = useCarrito();
  return (
    <UserContext.Provider
      value={{ agregarAlCarrito, carrito, eliminarDelCarrito }}
    >
      {children}
    </UserContext.Provider>
  );
};
