import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import AppRoutes from "./components/route/AppRoutes";
import { ContextPage } from './components/context/ContextPage'

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextPage>
    <AppRoutes />
  </ContextPage>
);
