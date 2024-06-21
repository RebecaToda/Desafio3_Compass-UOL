import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./services/AuthContext";
import { router } from "./routes/Router";
import { addItemAction } from "./redux/product/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(
      addItemAction({
        id: 1,
        title: "Syltherine",
        subtitle: "Stylish cafe chair",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non diam vitae augue porttitor mattis id a libero. Duis et bibendum velit. Maecenas dapibus porta dolor in lacinia. Curabitur quam ex, efficitur et ex id, venenatis efficitur justo. Phasellus ac ullamcorper nulla. Aliquam erat volutpat. Curabitur ipsum libero, aliquet non auctor eget, dapibus commodo mauris. Fusce sodales feugiat ex in lacinia. Maecenas eros ex, lacinia sit amet arcu vel, condimentum lobortis neque. Mauris tempus eget nisi vel semper. Sed tortor magna, malesuada non lacinia ac, placerat eget lectus. Suspendisse finibus dapibus mi, sit amet varius felis. Sed dictum neque eget eros aliquet sodales. Quisque et egestas erat.",
        additionalInfo:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non diam vitae augue porttitor mattis id a libero. Duis et bibendum velit. Maecenas dapibus porta dolor in lacinia. Curabitur quam ex, efficitur et ex id, venenatis efficitur justo. Phasellus ac ullamcorper nulla. Aliquam erat volutpat. Curabitur ipsum libero, aliquet non auctor eget, dapibus commodo mauris. ",
        price: 3500000,
        rating: 3,
        discount: 30,
        img: "https://imagensdesafio3.s3.us-east-2.amazonaws.com/img/shop/Products/Syltherine.png",
        isNew: false,
        category: "Chairs",
      })
    );
  });

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
