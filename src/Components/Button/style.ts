import styled from "styled-components";

interface Props {
  color: { primary: string; secondary: string };
  bordered: boolean;
  borderRadius: number;
}

const ButtonStyled = styled.button<Props>`
  width: 100%;
  padding: 0.75rem 2rem;
  background-color: ${({ color, bordered }: Props) =>
    bordered ? color.secondary : color.primary};
  border: 2px solid
    ${({ color, bordered }: Props) =>
      bordered ? color.primary : "transparent"};
  border-radius: ${({ borderRadius }: Props) => borderRadius + "px"};
`;

const Components = {
  ButtonStyled,
};

export default Components;
