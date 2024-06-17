import styled from "styled-components";

interface Props {
  isNew?: boolean;
}

const Card = styled.div<{ styleType: "vertical" | "horizontal" }>`
  width: fit-content;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f4f5f7;

  &:hover .hoverElements {
    visibility: visible;
    opacity: 1;
  }
`;

const Bubble = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 48px;
  aspect-ratio: 1/1;
  background-color: ${({ isNew }: Props) => (isNew ? "#2EC1AC" : "#E97171")};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  padding-bottom: 2rem;
`;

const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HoverElements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  transition: 250ms ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(58, 58, 58, 0.72);
  visibility: hidden;
  opacity: 0;
`;

const Button = styled.button`
  padding: 0.75rem 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
`;

const Options = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
`;

const Components = {
  Card,
  Bubble,
  Info,
  Prices,
  HoverElements,
  Button,
  Options,
  Item,
};

export default Components;
