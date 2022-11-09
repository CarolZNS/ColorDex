import "./styles.css";
import Home from "./views/Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
