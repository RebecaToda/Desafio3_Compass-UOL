import styled from "styled-components";

const LineTopF = styled.div`
  top: 0%;
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`;

const InputNews = styled.input`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #9f9f9f;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  width: 200px;
  margin-right: 11px;
`;

const ButtonSub = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  color: black;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 40px;
`;

const LineF = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`;

const Components = {
  LineF,
  InputNews,
  ButtonSub,
  LineTopF,
};

export default Components;
