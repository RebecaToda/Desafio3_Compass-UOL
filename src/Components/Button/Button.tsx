import { FC } from "react";
import Fonts from "../../fonts/fonts.ts";
import Components from "./style.ts";

const { ButtonStyled } = Components;
const { Poppins } = Fonts;

interface Props {
  color: { primary: string; secondary: string };
  children: string;
  bordered?: boolean;
  borderRadius?: number;
  padding?: string;
}

const Button: FC<Props> = ({
  color,
  children,
  bordered,
  borderRadius,
  padding,
}: Props) => {
  return (
    <ButtonStyled
      borderRadius={borderRadius ?? 0}
      padding={padding ?? "0.75rem 2rem"}
      color={color}
      bordered={bordered ?? false}
    >
      <Poppins
        fontWeight="600"
        color={bordered ? color.primary : color.secondary}
      >
        {children}
      </Poppins>
    </ButtonStyled>
  );
};

export default Button;
