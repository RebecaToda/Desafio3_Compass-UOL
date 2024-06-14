import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  menuActive: boolean;
}

const HeaderWrapper = styled.header`
  padding: 30px 70px;
  max-height: 100px;
  display: ${({ menuActive }: Props) => (menuActive ? "grid" : "flex")};
  justify-content: space-between;
`;

const Logo = styled.div`
  display: inline-flex;
`;

const Icons = styled.img<Props>`
  width: ${({ width }: Props) => width || "23px"};
  height: ${({ height }: Props) => height || "19px"};
  transition: 0.3s ease;

  &:hover {
    filter: invert(72%) sepia(15%) saturate(11%) hue-rotate(21deg)
      brightness(85%) contrast(88%);
`;

const Components = {
  HeaderWrapper,
  Logo,
  Icons,
};

export default Components;
