import { useState } from "react";
import Fonts from "../../fonts/fonts.ts";
import styles from "./Header.module.css";
import Components from "./style.ts";

const { HeaderWrapper, Logo, Icons } = Components;
const { Poppins, Montserrat } = Fonts;

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <Logo>
          <img
            src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/logo.svg"
            alt="Funiro Logo"
          />
          <Montserrat>Funiro</Montserrat>
        </Logo>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Poppins
              fontWeight={"500"}
              fontSize={"16px"}
              className={styles.font}
            >
              Home
            </Poppins>
          </li>
          <li className={styles.li}>
            <Poppins
              fontWeight={"500"}
              fontSize={"16px"}
              className={styles.font}
            >
              Shop
            </Poppins>
          </li>
          <li className={styles.li}>
            <Poppins
              fontWeight={"500"}
              fontSize={"16px"}
              className={styles.font}
            >
              About
            </Poppins>
          </li>
          <li className={styles.li}>
            <Poppins
              fontWeight={"500"}
              fontSize={"16px"}
              className={styles.font}
            >
              Contact
            </Poppins>
          </li>
        </ul>
        <div className={styles.icons}>
          <a href="" target="_blank">
            <Icons
              src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Header/login_icon.svg"
              alt="Login Icon"
              className={styles.img}
            />
          </a>
          <a href="" target="_blank">
            <Icons
              src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Header/cart_icon.svg"
              alt="Cart Icon"
              weight={"28px"}
              height={"28px"}
              className={styles.img}
            />
          </a>
          <button className={styles.menu} onClick={() => setMenu(!menu)}>
            <img
              src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Header/burger-menu.svg"
              alt="Menu Icon"
            />
          </button>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
