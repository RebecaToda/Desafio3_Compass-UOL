import Fonts from "../../fonts/fonts.ts";
import { IFurnitureCard } from "../../Interfaces/IFurnitureCard.ts";
import Components from "./style.ts";

const { Card } = Components;
const { Poppins } = Fonts;

export const FurnitureCard = (data: IFurnitureCard) => {
  return (
    <Card>
      <Poppins>Syltherine</Poppins>
    </Card>
  );
};

export default FurnitureCard;
