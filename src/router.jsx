import { createBrowserRouter, RouterProvider as ReactRouterProvider } from "react-router-dom";
import { Formulas } from "./pages/formulas";
import { BlocksProvider } from "./context/BlocksContext";
import { Game } from "./pages/game";

export const router = createBrowserRouter([
  {
    path: "/game",
    element: (
      <BlocksProvider>
        <Game />
      </BlocksProvider>
    ),
  },
  {
    path: "/formulas",
    element: (
      <Formulas />
    ),
  },
]);

export const RouterProvider = () => <ReactRouterProvider router={router} />