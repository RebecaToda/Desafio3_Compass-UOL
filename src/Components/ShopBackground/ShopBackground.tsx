import Fonts from "../../fonts/fonts.ts";
import Components from "./style.ts";

const { BackgroundSection, PageLocation, Link } = Components;
const { Poppins } = Fonts;
interface Props {
  title: string;
}

export const ShopBackground = ({ title }: Props) => {
  return (
    <BackgroundSection>
      <Poppins fontWeight={"500"} fontSize={"48px"}>
        {title}
      </Poppins>
      <PageLocation>
        <Link href="/home">
          <Poppins fontWeight={"500"}>Home</Poppins>
        </Link>
        <img
          src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Shop/arrow.svg"
          alt="Arrow Icon"
        />
        <Poppins fontWeight={"300"}> {title}</Poppins>
      </PageLocation>
    </BackgroundSection>
  );
};

export default ShopBackground;
