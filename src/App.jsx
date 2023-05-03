import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import PokemonCard from "./views/PokemonCard";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/pokemon/:id", element: <PokemonCard /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
