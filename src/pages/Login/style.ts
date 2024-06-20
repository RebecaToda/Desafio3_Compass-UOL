import styled from "styled-components";

interface Props {
  isLogin: boolean;
}

const Main = styled.main`
  display: grid;
  grid-template-rows: min-content 1fr;
  height: 100vh;
`;

const LoginGrid = styled.div`
  grid-template-columns: 2fr 2fr;
  display: grid;
  height: 100%;
  .image {
    background: url("https://imagensdesafio3.s3.us-east-2.amazonaws.com/img/Login/livingroom.png");
    background-position: center;
    background-size: cover;
    width: 50vw;
    height: 100%;
  }
`;

const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 20%;
  justify-content: center;

  & > p {
    align-self: center;
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > p {
    align-self: flex-end;
    color: #b88e2f;
    cursor: pointer;
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input {
    border-radius: 5px;
    border-color: 1px solid #9f9f9f;
    width: 100%;
    outline: none;
    background-color: white;
    border: 1px solid #9f9f9f;
    font-size: 1.25rem;
    padding: 0.5rem;
  }
`;

const ConfirmPasswordLabel = styled.label<Props>`
  visibility: ${({ isLogin }: Props) => (!isLogin ? "visible" : "hidden")};
  opacity: ${({ isLogin }: Props) => (!isLogin ? 1 : 0)};
  max-height: ${({ isLogin }: Props) => (!isLogin ? "inherit" : 0)};
  transition: 200ms ease-in-out;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  .lineWrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    .line {
      width: 100px;
      height: 1px;
      background-color: #757575;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  img {
    width: 3rem;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
    border-radius: 100%;
  }

  img:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

const Components = {
  Main,
  LoginGrid,
  LoginArea,
  InputsWrapper,
  Inputs,
  ConfirmPasswordLabel,
  Buttons,
  SocialIcons,
};

export default Components;
