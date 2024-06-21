import Fonts from "../../fonts/fonts.ts";
import Header from "../../Components/Header/Header.tsx";
import Components from "./style.ts";
import * as ButtonComponents from "../../Components/Button/style.ts";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  AuthProvider,
} from "firebase/auth";

import { useNavigate } from "react-router";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "../../services/firebaseConfig.ts";

import { useAuth } from "../../services/AuthContext.tsx";

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
const { ButtonStyled } = ButtonComponents.default;

const { Poppins } = Fonts;

const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [formValues, setFormValues] = useState<{
    email: string;
    password: string;
    repeatPassword: string;
  }>({ email: "", password: "", repeatPassword: "" });

  const [errorMessage, setErrorMessage] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const navigate = useNavigate();

  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/shop");
    }
  }, [currentUser]);

  const login = () => {
    resetErrors();
    signInWithEmailAndPassword(
      auth,
      formValues.email,
      formValues.password
    ).catch((error) => {
      errorHandling(error);
    });
  };

  function resetErrors() {
    setErrorMessage({ email: "", password: "" });
  }

  function loginWithPopup(provider: AuthProvider) {
    signInWithPopup(auth, provider).catch((error) => {
      errorHandling(error);
    });
  }

  function errorHandling(error: { code: string }) {
    resetErrors();
    if (error.code.includes("auth/invalid-credential")) {
      setErrorMessage({
        ...errorMessage,
        password: "Incorret password",
      });
      return;
    }

    if (error.code.includes("email")) {
      setErrorMessage({
        ...errorMessage,
        email: error.code.replace("auth/", "").replaceAll("-", " "),
      });
    }

    if (error.code.includes("password")) {
      setErrorMessage({
        ...errorMessage,
        password:
          error.code == "auth/weak-password"
            ? "Your password must have at least 6 characters."
            : error.code.replace("auth/", "").replace("-", " "),
      });
    }
  }

  const signUp = () => {
    resetErrors();
    if (formValues.password != formValues.repeatPassword) {
      setErrorMessage({
        ...errorMessage,
        password: "Both password must be equals.",
      });
      return;
    }

    createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        errorHandling(error);
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
                {errorMessage.email != "" ? (
                  <Poppins>{errorMessage.email}</Poppins>
                ) : (
                  ""
                )}
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
                {errorMessage.password != "" ? (
                  <Poppins>{errorMessage.password}</Poppins>
                ) : (
                  ""
                )}
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
            <ButtonStyled
              color={{ primary: "#b88e2f", secondary: "white" }}
              bordered={false}
              borderRadius={4}
              padding="1rem 8rem"
              onClick={() => (isLogin ? login() : signUp())}
            >
              <Poppins color="white">{isLogin ? "Login" : "Sign Up"}</Poppins>
            </ButtonStyled>
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
                onClick={() => {
                  loginWithPopup(facebookProvider);
                }}
              />
              <img
                src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/login/google+icon.svg"
                alt="Google Icon"
                onClick={() => {
                  loginWithPopup(googleProvider);
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
