import Footer from "../../Components/Footer/Footer";
import { FurnitureGalery } from "../../Components/FurnitureGalery/FurnitureGalery";
import Header from "../../Components/Header/Header";
import ShopBackground from "../../Components/ShopBackground/ShopBackground";
import { IFurnitureCard } from "../../Interfaces/IFurnitureCard";
import ProductsMock from "../../Mock/Products.mock.json";
const mock: IFurnitureCard[] = ProductsMock.products;

export const Shop = () => {
  return (
    <div>
      <Header />
      <ShopBackground title="Shop" />
      <div style={{ paddingBottom: "100px" }}>
        <FurnitureGalery
          showFilters
          showPagination
          initialCardLimit={16}
          data={mock}
        ></FurnitureGalery>
      </div>
      <Footer showPreFooter />;
    </div>
  );
};

export default Shop;
