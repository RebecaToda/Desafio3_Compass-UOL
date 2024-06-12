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
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  color: ${({ color }) => color || "#000000"};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || "0"};
  padding-top: ${({ paddingTop }) => paddingTop || "0"};
`;

export default Poppins;
