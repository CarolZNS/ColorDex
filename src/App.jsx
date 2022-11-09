import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}
