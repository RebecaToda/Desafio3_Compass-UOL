import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ShopBackground from "../../Components/ShopBackground/ShopBackground";

export const Shop = () => {
  return (
    <div>
      <Header />
      <ShopBackground title="Shop" />
      <Footer showPreFooter />;
    </div>
  );
};

export default Shop;
