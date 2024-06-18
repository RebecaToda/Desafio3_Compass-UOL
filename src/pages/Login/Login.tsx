import Fonts from "../../fonts/fonts.ts";
import Footer from "../../Components/Footer/Footer.tsx";
import Header from "../../Components/Header/Header.tsx";
import Components from "./style.ts";
import Button from "../../Components/Button/Button.tsx";
import { useState } from "react";

const {
  Main,
  LoginGrid,
  LoginArea,
  InputsWrapper,
  Inputs,
  ConfirmPasswordLabel,
  Buttons,
  SocialIcons,
} = Components;
const { Poppins } = Fonts;

const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <Main>
      <Header />
      <LoginGrid>
        <div className="image"></div>
        <LoginArea>
          <Poppins fontSize={"52px"} fontWeight={"700"}>
            {isLogin ? "Login" : "Sign Up"}
          </Poppins>
          <InputsWrapper>
            <Inputs>
              <label>
                <Poppins fontSize={"20px"} fontWeight={"500"}>
                  Email
                </Poppins>
                <input type="email" name="email" id="" />
              </label>
              <label>
                <Poppins fontSize={"20px"} fontWeight={"500"}>
                  Password
                </Poppins>
                <input type="password" name="password" id="" />
              </label>
              <ConfirmPasswordLabel isLogin={isLogin}>
                <Poppins fontSize={"20px"} fontWeight={"500"}>
                  Confirm Password
                </Poppins>
                <input type="password" name="password" id="" />
              </ConfirmPasswordLabel>
            </Inputs>
            <Poppins>Forgot Password?</Poppins>
            <Poppins
              onClick={() => {
                setIsLogin(!isLogin);
              }}
            >
              Do you want to {isLogin ? "Sign Up" : "Login"}?
            </Poppins>
          </InputsWrapper>
          <Buttons>
            <Button
              color={{ primary: "#B88E2F", secondary: "white" }}
              padding="1rem 8rem"
              borderRadius={4}
            >
              {isLogin ? "Login" : "Sign Up"}
            </Button>
            <div className="lineWrapper">
              <div className="line"></div>
              <Poppins fontSize={"13px"} color={"#757575"}>
                or
              </Poppins>
              <div className="line"></div>
            </div>
            <Poppins fontSize={"13px"} color={"#757575"}>
              {isLogin ? "Login" : "Sign Up"} with
            </Poppins>
            <SocialIcons>
              <img
                src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Social+Icons/facebook_icon.svg"
                alt="Facebook Icon"
              />
              <img
                src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Social+Icons/instagram_icon.svg"
                alt="Instagram Icon"
              />
            </SocialIcons>
          </Buttons>
        </LoginArea>
      </LoginGrid>
    </Main>
  );
};

export default Login;
