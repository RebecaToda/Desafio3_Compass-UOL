import React, { useState } from "react";
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
  const [sortBy, setSortBy] = useState<"default" | "">("default");
  const [cardStyleType, setCardStyleType] = useState<"vertical" | "horizontal">(
    "vertical"
  );

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
              <div className="title">
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
              {pagination * cardLimit <= data.length
                ? pagination * cardLimit
                : data.length}
              of {data.length} results
            </Poppins>
          </CardStyleConfig>
          <DescriptionFilter>
            <div>
              <Poppins>Show</Poppins>
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
              <Poppins>Sort By</Poppins>
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
        {data
          .slice(
            cardLimit * (pagination - 1),
            pagination * cardLimit <= data.length
              ? pagination * cardLimit
              : data.length
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
                <Poppins>previous</Poppins>
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
            <Poppins>{pagination}</Poppins>
          </Item>
          {pagination * cardLimit < data.length ? (
            <>
              {windowSize.width > 500 ? (
                <Item onClick={() => changePagination(pagination + 1)}>
                  <Poppins>{pagination + 1}</Poppins>
                </Item>
              ) : (
                ""
              )}
              <Item onClick={() => changePagination(pagination + 1)}>
                <Poppins>next</Poppins>
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
