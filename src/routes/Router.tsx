import App from "../App";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop";
import Header from "../Components/Header/Header";

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
        path: "/header",
        element: <Header />,
      },
    ],
  },
]);
