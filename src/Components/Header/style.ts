import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  menuActive?: boolean;
}

const HeaderWrapper = styled.header`
  padding: 30px 70px;
  max-height: 100px;
  display: ${(({ menuActive }: Props) =>
    menuActive ? "grid" : "flex") as unknown as string};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "logo icons"
    "links links";
  justify-content: space-between;

  @media only screen and (max-width: 769px) {
    padding: 30px 20px;
  }
`;

const Logo = styled.div`
  display: inline-flex;
  grid-area: logo;
`;

const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 34px;
  font-weight: 700;
  color: #000000;
  padding-left: 5px;

  @media (max-width: 769px) {
    font-size: 24px;
    align-self: center;
  }
`;
const Links = styled.ul<Props>`
  align-items: center;
  display: ${(({ menuActive }: Props) =>
    menuActive ? "grid" : "flex") as unknown as string};
  list-style: none;
  gap: 75px;
  a {
    text-decoration: none;
  }
  li {
    cursor: pointer;
  }
  @media only screen and (max-width: 769px) {
    & {
      display: ${(({ menuActive }: Props) =>
        menuActive ? "none" : "flex") as unknown as string};
      flex-direction: column;
      align-items: center;
      width: 100%;
      li {
        width: 100%;
      }
    }
  }
`;

const Icons = styled.img<Props>`
  width: ${({ width }: Props) => width || "23px"};
  height: ${({ height }: Props) => height || "19px"};
  transition: 0.3s ease;

  &:hover {
    filter: invert(72%) sepia(15%) saturate(11%) hue-rotate(21deg)
      brightness(85%) contrast(88%);
  }
`;

const Components = {
  HeaderWrapper,
  Logo,
  Icons,
  Title,
  Links,
};

export default Components;
