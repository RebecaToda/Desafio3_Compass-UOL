import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Components from "./style";

import Fonts from "../../fonts/fonts";
import Button from "../../Components/Button/Button";
const { DiscoverSection } = Components;

const { Poppins } = Fonts;

export const Home = () => {
  return (
    <div>
      <Header />
      <DiscoverSection>
        <div>
          <Poppins></Poppins>
          <Poppins></Poppins>
          <Poppins></Poppins>
          <Button
            color={{ primary: "#B88E2F", secondary: "white" }}
            content="BUY NOW"
            bordered
          ></Button>
        </div>
      </DiscoverSection>
      <Footer />;
    </div>
  );
};

export default Home;
