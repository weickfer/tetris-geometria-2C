import { createBrowserRouter, RouterProvider as ReactRouterProvider } from "react-router-dom";
import { Formulas } from "./pages/formulas";
import { BlocksProvider } from "./context/BlocksContext";
import { Game } from "./pages/game";
import { Home } from "./pages/home";
import { RequireQueryParams } from "./utils/requiro-query-params";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "/game",
    element: (
      <RequireQueryParams requiredParams={['difficulty']}>
        <BlocksProvider>
          <Game />
        </BlocksProvider>
      </RequireQueryParams>
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