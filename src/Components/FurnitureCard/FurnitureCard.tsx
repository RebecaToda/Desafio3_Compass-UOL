import Fonts from "../../fonts/fonts.ts";
import { IFurnitureCard } from "../../Interfaces/IFurnitureCard.ts";
import Components from "./style.ts";

const { Card, Bubble, Info, Prices, HoverElements, Button, Options, Item } =
  Components;
const { Poppins } = Fonts;

interface Props {
  data: IFurnitureCard;
  styleType?: "vertical" | "horizontal";
}

export const FurnitureCard = ({ data, styleType = "vertical" }: Props) => {
  const { title, subtitle, price, discount, img, isNew } = data;

  return (
    <Card styleType={styleType}>
      {discount > 0 || isNew ? (
        <Bubble isNew={isNew}>
          <Poppins color={"white"}>{isNew ? "New" : `-${discount}%`}</Poppins>
        </Bubble>
      ) : (
        ""
      )}
      <img src={img} alt="" />
      <Info>
        <Poppins fontSize={"24px"} fontWeight={"600"} color={"#3A3A3A"}>
          {title}
        </Poppins>
        <Poppins fontWeight={"500"} color={"#898989"}>
          {subtitle}
        </Poppins>
        <Prices>
          <Poppins fontSize={"20px"} fontWeight={"600"} color={"#3A3A3A"}>
            Rp{" "}
            {discount > 0
              ? (price - (discount / 100) * price).toLocaleString("pt-BR")
              : price.toLocaleString("pt-BR")}
          </Poppins>
          {discount > 0 ? (
            <Poppins textDecoration="line-through" color={"#B0B0B0"}>
              Rp {price.toLocaleString("pt-BR")}
            </Poppins>
          ) : (
            ""
          )}
        </Prices>
      </Info>
      <HoverElements className={"hoverElements"}>
        <Button>
          <Poppins fontWeight={"600"} color={"#B88E2F"}>
            Add to cart
          </Poppins>
        </Button>
        <Options>
          <Item>
            <img
              src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Shop/Hover/share.svg"
              alt="Share"
            />
            <Poppins fontWeight={"600"} color={"white"}>
              <a>Share</a>
            </Poppins>
          </Item>
          <Item>
            <img
              src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Shop/Hover/compare.svg"
              alt="Compare"
            />
            <Poppins fontWeight={"600"} color={"white"}>
              <a>Compare</a>
            </Poppins>
          </Item>
          <Item>
            <img
              src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Shop/Hover/like.svg"
              alt="Like"
            />
            <Poppins fontWeight={"600"} color={"white"}>
              <a>Like</a>
            </Poppins>
          </Item>
        </Options>
      </HoverElements>
    </Card>
  );
};

export default FurnitureCard;
