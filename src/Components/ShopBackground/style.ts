import styled from "styled-components";

const BackgroundSection = styled.div`
  background-image: url("https://imagensdesafio3.s3.us-east-2.amazonaws.com/img/shop/Background.png");
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageLocation = styled.div`
  display: inline-flex;
  gap: 6px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Components = {
  BackgroundSection,
  PageLocation,
  Link,
};

export default Components;
