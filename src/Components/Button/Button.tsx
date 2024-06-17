import Fonts from "../../fonts/fonts.ts";
import Components from "./style.ts";

const { ButtonStyled } = Components;
const { Poppins } = Fonts;

interface Props {
  color: { primary: string; secondary: string };
  content: string;
  bordered?: boolean;
  borderRadius?: number;
}

const Button = ({ color, content, bordered, borderRadius }: Props) => {
  return (
    <ButtonStyled
      borderRadius={borderRadius ?? 0}
      color={color}
      bordered={bordered ?? false}
    >
      <Poppins
        fontWeight="600"
        color={bordered ? color.primary : color.secondary}
      >
        {content}
      </Poppins>
    </ButtonStyled>
  );
};

export default Button;
