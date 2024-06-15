import Footer from "../../Components/Footer/Footer";
import FurnitureCard from "../../Components/FurnitureCard/FurnitureCard";
import Header from "../../Components/Header/Header";
import ShopBackground from "../../Components/ShopBackground/ShopBackground";
import { IFurnitureCard } from "../../Interfaces/IFurnitureCard";
import ProductsMock from "../../Mock/Products.mock.json";
const mock:IFurnitureCard[] = ProductsMock.products;

export const Shop = () => {
  return (
    <div>
      <Header />
      <ShopBackground title="Shop" />
      <FurnitureCard data={mock[0]}></FurnitureCard>
      <Footer showPreFooter />;
    </div>
  );
};

export default Shop;
