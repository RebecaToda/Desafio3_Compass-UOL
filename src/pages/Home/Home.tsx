import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Components from "./style";
import Fonts from "../../fonts/fonts";
import Button from "../../Components/Button/Button";
import useWindowDimensions from "../../Hooks/WindowDimensions";
import { FurnitureGalery } from "../../Components/FurnitureGalery/FurnitureGalery";
import ProductsMock from "../../Mock/Products.mock.json";
import { IFurnitureCard } from "../../Interfaces/IFurnitureCard";
import { useState } from "react";

import { Splide, SplideSlide } from "react-splide-ts";
import "react-splide-ts/css";

const mock: IFurnitureCard[] = ProductsMock.products;

const sliderImages: { url: string; name: string; desc: string }[] = [
  {
    name: "Bed Room",
    desc: "Inner Peace",
    url: "https://imagensdesafio3.s3.us-east-2.amazonaws.com/img/home/se%C3%A7%C3%A3o+4/Image+1.png",
  },
  {
    name: "Bed Room",
    desc: "Inner Peace",
    url: "https://imagensdesafio3.s3.us-east-2.amazonaws.com/img/home/se%C3%A7%C3%A3o+4/image+2.png",
  },
  {
    name: "Bed Room",
    desc: "Inner Peace",
    url: "https://imagensdesafio3.s3.us-east-2.amazonaws.com/img/home/se%C3%A7%C3%A3o+4/image+3.png",
  },
];

const {
  DiscoverSection,
  ItemsSection,
  RangeSection,
  CardWrapper,
  Card,
  SliderWrapper,
  Slider,
  SliderSection,
  ImageWrapper,
  ImageContent,
  ImageText,
  Dots,
  Dot,
  Share,
} = Components;

const { Poppins } = Fonts;

export const Home = () => {
  const windowSize = useWindowDimensions();
  const [sliderPos, setSliderPos] = useState<number>(0);
  return (
    <div>
      <Header />
      <DiscoverSection>
        <div className="box">
          <div className="text">
            <Poppins fontWeight={"600"} color={"#333333"} letterSpacing={"3px"}>
              New Arrival
            </Poppins>
            <Poppins
              fontSize={windowSize.width > 400 ? "50px" : "36px"}
              fontWeight={"700"}
              color={"#B88E2F"}
            >
              Discover Our <br /> New Collection
            </Poppins>
            <Poppins fontSize={"18px"} fontWeight={"500"} color={"#333333"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </Poppins>
          </div>
          <Button
            padding="20px 64px"
            color={{ primary: "#B88E2F", secondary: "white" }}
            content="BUY NOW"
          ></Button>
        </div>
      </DiscoverSection>
      <RangeSection>
        <div className="texts">
          <Poppins fontSize={"32px"} fontWeight={"700"} color={"#333333"}>
            Browse The Range
          </Poppins>
          <Poppins fontSize={"20px"} color={"#666666"}>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
          </Poppins>
        </div>
        <CardWrapper>
          <Card>
            <img
              className="img"
              src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/img/home/se%C3%A7%C3%A3o+2/image1.png"
              alt="Dining Picture"
            />
            <Poppins fontSize={"24px"} fontWeight={"600"} color={"#333333"}>
              Dining
            </Poppins>
          </Card>
          <Card>
            <img
              className="img"
              src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/img/home/se%C3%A7%C3%A3o+2/image2.png"
              alt="Living Picture"
            />
            <Poppins fontSize={"24px"} fontWeight={"600"} color={"#333333"}>
              Living
            </Poppins>
          </Card>
          <Card>
            <img
              className="img"
              src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/img/home/se%C3%A7%C3%A3o+2/image3.png"
              alt="Bedroom Picture"
            />
            <Poppins fontSize={"24px"} fontWeight={"600"} color={"#333333"}>
              Bedroom
            </Poppins>
          </Card>
        </CardWrapper>
      </RangeSection>
      <ItemsSection>
        <Poppins fontSize={"40px"} fontWeight={"700"} color={"#333333"}>
          Our Products
        </Poppins>
        <FurnitureGalery data={mock} initialCardLimit={8}></FurnitureGalery>
        <a href="">
          <Button
            padding="12px 74px"
            color={{ primary: "#B88E2F", secondary: "white" }}
            content="Show More"
            bordered
          ></Button>
        </a>
      </ItemsSection>
      <SliderSection>
        <div className="texts">
          <div>
            <Poppins fontSize={"40px"} fontWeight={"700"} color={"#333333"}>
              50+ Beautiful rooms inspiration
            </Poppins>
            <Poppins fontWeight={"500"} color={"#616161"}>
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </Poppins>
          </div>
          <Button
            padding="20px 64px"
            color={{ primary: "#B88E2F", secondary: "white" }}
            content="Explore More"
          ></Button>
        </div>
        <SliderWrapper>
          <Slider>
            {sliderImages.map((item, i) => (
              <ImageWrapper
                position={
                  sliderPos == i ? "this" : sliderPos > i ? "before" : "after"
                }
              >
                <img src={item.url} alt={item.desc} />
                <ImageContent
                  position={
                    sliderPos == i ? "this" : sliderPos > i ? "before" : "after"
                  }
                >
                  <ImageText>
                    <Poppins>
                      {(i + 1).toString().padStart(2, "0") + "-" + item.name}
                    </Poppins>
                    <Poppins>{item.desc}</Poppins>
                  </ImageText>
                  <button>
                    <img
                      src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Home/Vector+1.svg"
                      alt="Take a Look"
                    />
                  </button>
                </ImageContent>
              </ImageWrapper>
            ))}
          </Slider>
          <Dots>
            {sliderImages.map((url, i) => (
              <Dot selected={i == sliderPos} />
            ))}
          </Dots>
        </SliderWrapper>
      </SliderSection>
      <Share>
        <Poppins fontSize={"20px"} fontWeight={"600"} color={"#616161"}>
          Share your setup with
        </Poppins>
        <Poppins fontSize={"40px"} fontWeight={"700"} color={"#3A3A3A"}>
          #FuniroFurniture
        </Poppins>
      </Share>
      <Footer />;
    </div>
  );
};

export default Home;
