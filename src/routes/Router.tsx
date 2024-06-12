import App from "../App";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop";
import Footer from "../Components/Footer/Footer";

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
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
]);
