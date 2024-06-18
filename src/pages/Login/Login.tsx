import Fonts from "../../fonts/fonts.ts";
import Header from "../../Components/Header/Header.tsx";
import Components from "./style.ts";
import Button from "../../Components/Button/Button.tsx";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../../services/firebaseConfig.tsx";

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
  const [formValues, setFormValues] = useState<{
    email: string;
    password: string;
    repeatPassword: string;
  }>({ email: "", password: "", repeatPassword: "" });

  const login = () => {
    signInWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then((userCredential) => {
        console.log("logou");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                <input
                  type="email"
                  name="email"
                  id=""
                  value={formValues.email}
                  onChange={(e) => {
                    setFormValues({ ...formValues, email: e.target.value });
                  }}
                />
              </label>
              <label>
                <Poppins fontSize={"20px"} fontWeight={"500"}>
                  Password
                </Poppins>
                <input
                  type="password"
                  name="password"
                  id=""
                  value={formValues.password}
                  onChange={(e) =>
                    setFormValues({ ...formValues, password: e.target.value })
                  }
                />
              </label>
              <ConfirmPasswordLabel isLogin={isLogin}>
                <Poppins fontSize={"20px"} fontWeight={"500"}>
                  Confirm Password
                </Poppins>
                <input
                  type="password"
                  name="repeatPassword"
                  id=""
                  value={formValues.repeatPassword}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      repeatPassword: e.target.value,
                    })
                  }
                />
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
            <button onClick={() => (isLogin ? login() : signUp())}>
              {isLogin ? "Login" : "Sign Up"}
            </button>
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
                src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/login/google+icon.svg"
                alt="Google Icon"
                onClick={() => {
                  signInWithPopup(auth, googleProvider)
                    .then((res) => {
                      console.log("deu bom", res);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              />
            </SocialIcons>
          </Buttons>
        </LoginArea>
      </LoginGrid>
    </Main>
  );
};

export default Login;
