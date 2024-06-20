import styled from "styled-components";

interface Props {
  isFocus: boolean;
}

const DiscoverSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 2.5rem;
  background-image: url(https://imagensdesafio3.s3.us-east-2.amazonaws.com/img/home/se%C3%A7%C3%A3o+1/background.png);
  background-size: cover;
  background-position: center;

  height: 80vh;
  padding: 92px 60px;

  .box {
    border-radius: 10px;
    margin-top: 65px;
    max-width: 45%;
    padding: 62px 40px 37px 40px;
    background-color: #fff3e3;
    display: flex;
    flex-direction: column;
    gap: 52px;
  }
  @media only screen and (max-width: 1280px) {
    .box {
      max-width: 70%;
    }
  }
  @media only screen and (max-width: 768px) {
    height: fit-content;
    padding: 30px 32px;
    .box {
      max-width: 100%;
    }
  }
`;

const RangeSection = styled.section`
  padding: 60px 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  .texts {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
    padding-bottom: 30px;
  }
`;

const ItemsSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 30px;
`;

const SliderSection = styled.section`
  display: flex;
  gap: 42px;
  align-items: center;
  background-color: #fcf8f3;
  padding: 44px 0 44px 100px;
  .texts {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

const ImageWrapper = styled.div<Props>`
  width: ${({ isFocus }: Props) => (isFocus ? "300px" : "250px")};
  height: fit-content;
  transform-origin: left top;
  position: relative;
  img {
    width: 100%;
  }
`;
const ImageContent = styled.div<Props>`
  visibility: ${({ isFocus }: Props) => (isFocus ? "visible" : "hidden")};
  position: absolute;
  left: 24px;
  bottom: 24px;
  display: flex;
  align-items: flex-end;
  button {
    width: 48px;
    padding: 12px;
    display: grid;
    place-items: center;
    border: none;
    aspect-ratio: 1/1;
    background-color: #b88e2f;
  }
`;
const ImageText = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.72);
  padding: 32px;
`;

// const Dots = styled.div`
//   display: flex;
//   gap: 20px;
// `;
// const Dot = styled.div`
//   background-color: red;
//   width: 11px;
//   height: 11px;
//   padding: 8px;
// `;

const Share = styled.div`
  display: flex;
  height: 900px;
  align-items: center;
  flex-direction: column;
  padding-top: 67px;
  background-image: url(https://imagensdesafio3.s3.us-east-2.amazonaws.com/img/home/se%C3%A7%C3%A3o+5/Images.png);
  background-size: 100%;
  background-position-y: 70%;
  background-repeat: no-repeat;
`;

const Components = {
  DiscoverSection,
  Card,
  CardWrapper,
  ItemsSection,
  RangeSection,
  SliderSection,
  // SliderWrapper,
  // Slider,
  ImageWrapper,
  Image,
  ImageContent,
  ImageText,
  // Dots,
  // Dot,
  Share,
};

export default Components;
