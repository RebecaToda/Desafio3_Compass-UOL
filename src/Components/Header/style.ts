import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  menuActive?: boolean;
}

const HeaderWrapper = styled.header<Props>`
  padding: 30px 70px;
  display: flex;
  justify-content: space-between;
  background-color: white;

  @media only screen and (max-width: 769px) {
    padding: 30px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content 1fr;
    grid-template-areas:
      "logo icons"
      "links links";
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
  display: flex;
  align-items: center;
  list-style: none;
  gap: 75px;
  grid-area: links;
  a {
    text-decoration: none;
  }
  li {
    cursor: pointer;
  }
  @media only screen and (max-width: 769px) {
    & {
      max-height: ${({ menuActive }: Props) => (menuActive ? "500px" : "0px")};
      visibility: ${({ menuActive }: Props) =>
        menuActive ? "visible" : "hidden"};
      opacity: ${({ menuActive }: Props) => (menuActive ? "1" : "0")};
      transition: 250ms ease-in-out;
      align-items: center;
      justify-content: space-evenly;
      padding-top: ${({ menuActive }: Props) => (menuActive ? "1rem" : "0")};
    }
  }
  @media only screen and (max-width: 426px) {
    & {
      flex-direction: column;
      gap: 0.5rem;
      align-items: flex-start;
    }
  }
`;

const Icon = styled.img<Props>`
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
  Icon,
  Title,
  Links,
};

export default Components;
