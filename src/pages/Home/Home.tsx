import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Components from "./style";
import Fonts from "../../fonts/fonts";
import Button from "../../Components/Button/Button";
import useWindowDimensions from "../../Hooks/WindowDimensions";
import { FurnitureGalery } from "../../Components/FurnitureGalery/FurnitureGalery";
import { IFurnitureCard } from "../../Interfaces/IFurnitureCard";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "react-splide-ts";
import "react-splide-ts/css";
import axios from "axios";

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
  SliderSection,
  ImageWrapper,
  ImageContent,
  ImageText,
  Share,
} = Components;

const { Poppins } = Fonts;

export const Home = () => {
  const windowSize = useWindowDimensions();
  const [sliderPos, setSliderPos] = useState<number>(0);

  const [data, setData] = useState<IFurnitureCard[]>([]);

  useEffect(() => {
    axios
      .get<{ products: IFurnitureCard[] }>(
        "https://run.mocky.io/v3/14b065da-3092-42e7-8a81-b1f4650f724f"
      )
      .then((res) => {
        console.log(res);
        setData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <a href="./shop">
            <Button
              padding="20px 64px"
              color={{ primary: "#B88E2F", secondary: "white" }}
            >
              BUY NOW
            </Button>
          </a>
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
        <FurnitureGalery data={data} initialCardLimit={8}></FurnitureGalery>
        <a href="./shop">
          <Button
            padding="12px 74px"
            color={{ primary: "#B88E2F", secondary: "white" }}
            bordered
          >
            Show More
          </Button>
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
          >
            Explore More
          </Button>
        </div>
        <Splide
          className="HomeSplide"
          onMove={(e, i) => {
            console.log(i);
            setSliderPos(i);
          }}
          options={{
            width: "50%",
            gap: 24,
            fixedWidth: "300px",
            type: "loop",
          }}
        >
          {[...sliderImages, ...sliderImages, ...sliderImages].map(
            (item, i) => (
              <SplideSlide>
                <ImageWrapper isFocus={sliderPos == i}>
                  <img src={item.url} alt={item.desc} />
                  <ImageContent isFocus={sliderPos == i}>
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
              </SplideSlide>
            )
          )}
        </Splide>
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
