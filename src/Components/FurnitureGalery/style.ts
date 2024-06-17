import styled from "styled-components";

const GaleryWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const Filters = styled.div`
  width: 100%;
  background-color: #f9f1e7;
  padding: 1.5rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;

const CardStyleConfig = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  .styleConfig {
    display: flex;
    gap: 1.5rem;
  }
  .title {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    cursor: pointer;
  }
  .line {
    height: 2.25rem;
    width: 2px;
    border-radius: 0.25rem;
    background-color: #9f9f9f;
  }
  @media only screen and (max-width: 426px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .line {
      display: none;
    }
  }
`;
const DescriptionFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  div {
    gap: 1rem;
    display: flex;
  }
  input,
  select {
    -webkit-appearance: none;
    width: fit-content;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  @media only screen and (max-width: 426px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;
const Galery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem 2rem;
`;

const Pagination = styled.div`
  display: flex;
  gap: 2.5rem;
`;
const Item = styled.div`
  display: grid;
  place-items: center;
  min-width: 60px;
  aspect-ratio: 1/1;
  border-radius: 10px;
  background-color: #f9f1e7;
  cursor: pointer;
  &.actualPos {
    background-color: #b88e2f;
  }
`;

const Components = {
  GaleryWrapper,
  Filters,
  CardStyleConfig,
  DescriptionFilter,
  Galery,
  Pagination,
  Item,
};

export default Components;
