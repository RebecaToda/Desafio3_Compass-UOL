import styled from "styled-components";

interface Props {
  color: { primary: string; secondary: string };
  bordered: boolean;
  borderRadius: number;
  padding: string;
}

const ButtonStyled = styled.button<Props>`
  width: fit-content;
  padding: ${({ padding }: Props) => padding};
  background-color: ${({ color, bordered }: Props) =>
    bordered ? color.secondary : color.primary};
  border: 2px solid
    ${({ color, bordered }: Props) =>
      bordered ? color.primary : "transparent"};
  border-radius: ${({ borderRadius }: Props) => borderRadius + "px"};
  transition: 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ color, bordered }: Props) =>
      bordered ? color.primary : color.secondary};
    p {
      color: ${({ color, bordered }: Props) =>
        bordered ? color.secondary : color.primary};
    }
    border: 2px solid ${({ color }: Props) => color.primary};
  }
  &:active {
    filter: brightness(1.2);
    scale: 0.98;
  }
`;

const Components = {
  ButtonStyled,
};

export default Components;
