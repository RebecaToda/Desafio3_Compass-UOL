import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { FurnitureGalery } from "../../Components/FurnitureGalery/FurnitureGalery";
import Header from "../../Components/Header/Header";
import ShopBackground from "../../Components/ShopBackground/ShopBackground";
import { IFurnitureCard } from "../../Interfaces/IFurnitureCard";
import axios from "axios";

export const Shop = () => {
  const [data, setData] = useState<IFurnitureCard[]>([]);

  useEffect(() => {
    axios
      .get<{ products: IFurnitureCard[] }>(
        "https://run.mocky.io/v3/14b065da-3092-42e7-8a81-b1f4650f724f"
      )
      .then((res) => {
        console.log(res);
        setData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <ShopBackground title="Shop" />
      <div style={{ paddingBottom: "100px" }}>
        <FurnitureGalery
          showFilters
          showPagination
          initialCardLimit={16}
          data={data}
        ></FurnitureGalery>
      </div>
      <Footer showPreFooter />;
    </div>
  );
};

export default Shop;
