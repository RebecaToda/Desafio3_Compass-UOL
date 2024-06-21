import { useEffect, useRef, useState } from "react";
import { IFurnitureCard } from "../../Interfaces/IFurnitureCard";
import FurnitureCard from "../FurnitureCard/FurnitureCard";
import Fonts from "../../fonts/fonts.ts";
import Components from "./style.ts";
import useWindowDimensions from "../../Hooks/WindowDimensions.tsx";

const {
  GaleryWrapper,
  Filters,
  CardStyleConfig,
  DescriptionFilter,
  Galery,
  Pagination,
  Item,
} = Components;
const { Poppins } = Fonts;

interface Props {
  data: IFurnitureCard[];
  showFilters?: boolean;
  showPagination?: boolean;
  initialCardLimit: number;
}

export const FurnitureGalery = ({
  data,
  showFilters,
  showPagination,
  initialCardLimit,
}: Props) => {
  const windowSize = useWindowDimensions();
  const [cardLimit, setCardLimit] = useState<number>(initialCardLimit);
  const [pagination, setPagination] = useState<number>(1);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<string[]>([]);
  const [dataState, setDataState] = useState<IFurnitureCard[]>(data);
  // const [sortBy, setSortBy] = useState<"default" | "">("default");
  const [cardStyleType, setCardStyleType] = useState<"vertical" | "horizontal">(
    "vertical"
  );

  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPagination(1);
    if (filter.length > 2) {
      setFilter([]);
    }
    if (filter.length == 0) {
      setDataState(data);
      return;
    }
    setDataState(data.filter((product) => filter.includes(product.category)));
  }, [filter, data]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (titleRef.current && !titleRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [titleRef]);

  const changePagination = (pos: number) => {
    setPagination(pos);
    document.getElementById("filter")?.scrollIntoView();
  };

  return (
    <GaleryWrapper>
      {showFilters ? (
        <Filters id="filter">
          <CardStyleConfig>
            <div className="styleConfig">
              <div
                ref={titleRef}
                className="title"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                {isFilterOpen ? (
                  <ul className="dropdown">
                    <li
                      style={{
                        listStyleType: filter.includes("Chairs")
                          ? "disc"
                          : "circle",
                      }}
                      onClick={() => {
                        setFilter(
                          filter.includes("Chairs")
                            ? filter.filter((filt) => filt != "Chairs")
                            : [...filter, "Chairs"]
                        );
                      }}
                    >
                      <Poppins>Chairs</Poppins>
                    </li>
                    <li
                      style={{
                        listStyleType: filter.includes("Sofas")
                          ? "disc"
                          : "circle",
                      }}
                      onClick={() => {
                        setFilter(
                          filter.includes("Sofas")
                            ? filter.filter((filt) => filt != "Sofas")
                            : [...filter, "Sofas"]
                        );
                      }}
                    >
                      <Poppins>Sofas</Poppins>
                    </li>
                    <li
                      style={{
                        listStyleType: filter.includes("Tables")
                          ? "disc"
                          : "circle",
                      }}
                      onClick={() => {
                        setFilter(
                          filter.includes("Tables")
                            ? filter.filter((filt) => filt != "Tables")
                            : [...filter, "Tables"]
                        );
                      }}
                    >
                      <Poppins>Tables</Poppins>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
                <img
                  src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Shop/Filter/Filter+Icon.svg"
                  alt="Filter Icon"
                />
                <Poppins>Filter</Poppins>
              </div>
              <img
                src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Shop/Filter/Grid+Icon.svg"
                alt="Grid Icon"
                onClick={() => setCardStyleType("vertical")}
              />
              <img
                src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Shop/Filter/List+Icon.svg"
                alt="List Icon"
                onClick={() => setCardStyleType("horizontal")}
              />
            </div>
            <div className="line"></div>
            <Poppins>
              Showing {cardLimit * (pagination - 1) + 1}-
              {pagination * cardLimit <= dataState.length
                ? pagination * cardLimit
                : dataState.length}
              &nbsp;of {dataState.length} results
            </Poppins>
          </CardStyleConfig>
          <DescriptionFilter>
            <div>
              <Poppins fontSize={"20px"}>Show</Poppins>
              <input
                type="number"
                min={2}
                max={32}
                value={cardLimit.toString()}
                onBlur={(e) => {
                  if (
                    isNaN(parseInt(e.target.value)) ||
                    parseInt(e.target.value) == 0
                  ) {
                    setCardLimit(initialCardLimit);
                  }
                }}
                onChange={(e) => {
                  if (parseInt(e.target.value) < 2) {
                    setCardLimit(2);
                  } else if (parseInt(e.target.value) > 32) {
                    setCardLimit(32);
                  } else if (isNaN(parseInt(e.target.value))) {
                    setCardLimit(0);
                  } else {
                    setCardLimit(parseInt(e.target.value));
                  }
                }}
              />
            </div>
            <div>
              <Poppins fontSize={"20px"}>Sort By</Poppins>
              <select>
                <option value="Default">Default</option>
              </select>
            </div>
          </DescriptionFilter>
        </Filters>
      ) : (
        ""
      )}
      <Galery>
        {dataState
          .slice(
            cardLimit * (pagination - 1),
            pagination * cardLimit <= dataState.length
              ? pagination * cardLimit
              : dataState.length
          )
          .map((product: IFurnitureCard) => (
            <FurnitureCard
              styleType={cardStyleType}
              data={product}
            ></FurnitureCard>
          ))}
      </Galery>
      {showPagination ? (
        <Pagination>
          {pagination > 1 ? (
            <>
              <Item onClick={() => changePagination(pagination - 1)}>
                <Poppins>Previous</Poppins>
              </Item>
              {windowSize.width > 500 ? (
                <Item onClick={() => changePagination(pagination - 1)}>
                  <Poppins>{pagination - 1}</Poppins>
                </Item>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}

          <Item className="actualPos">
            <Poppins color={"white"}>{pagination}</Poppins>
          </Item>
          {pagination * cardLimit < dataState.length ? (
            <>
              {windowSize.width > 500 ? (
                <Item onClick={() => changePagination(pagination + 1)}>
                  <Poppins>{pagination + 1}</Poppins>
                </Item>
              ) : (
                ""
              )}
              <Item onClick={() => changePagination(pagination + 1)}>
                <Poppins>Next</Poppins>
              </Item>
            </>
          ) : (
            ""
          )}
        </Pagination>
      ) : (
        ""
      )}
    </GaleryWrapper>
  );
};
