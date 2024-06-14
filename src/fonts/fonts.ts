import styled from "styled-components";

interface Props {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  paddingBottom?: string;
  paddingTop?: string;
}

const Poppins = styled.p<Props>`
  font-family: "Poppins", sans-serif;
  font-size: ${({ fontSize }: Props) => fontSize || "16px"};
  font-weight: ${({ fontWeight }: Props) => fontWeight || "400"};
  color: ${({ color }: Props) => color || "#000000"};
  padding-bottom: ${({ paddingBottom }: Props) => paddingBottom || "0"};
  padding-top: ${({ paddingTop }: Props) => paddingTop || "0"};
`;

const Montserrat = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 34px;
  font-weight: 700;
  color: #000000;
  padding-left: 5px;
`;

const Fonts = {
  Poppins,
  Montserrat,
};

export default Fonts;
