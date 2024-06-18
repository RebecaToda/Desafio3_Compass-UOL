import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Shop } from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
