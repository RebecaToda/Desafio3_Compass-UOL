import { useState } from "react";
import Fonts from "../../fonts/fonts.ts";
import styles from "./Header.module.css";
import Components from "./style.ts";

const { HeaderWrapper, Logo, Icon, Title, Links } = Components;
const { Poppins } = Fonts;

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <HeaderWrapper menuActive={menu}>
      <a href="/home">
        <Logo>
          <img
            src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/logo.svg"
            alt="Funiro Logo"
            className={styles.logo}
          />
          <Title>Funiro</Title>
        </Logo>
      </a>
      <Links className={styles.ul} menuActive={menu}>
        <li className={styles.li}>
          <a href="/home" className={styles.links}>
            <Poppins
              fontWeight={"500"}
              fontSize={"16px"}
              className={styles.font}
            >
              Home
            </Poppins>
          </a>
        </li>
        <li className={styles.li}>
          <a href="/shop" className={styles.links}>
            <Poppins
              fontWeight={"500"}
              fontSize={"16px"}
              className={styles.font}
            >
              Shop
            </Poppins>
          </a>
        </li>
        <li className={styles.li}>
          <a href="/" className={styles.links}>
            <Poppins
              fontWeight={"500"}
              fontSize={"16px"}
              className={styles.font}
            >
              About
            </Poppins>
          </a>
        </li>
        <li className={styles.li}>
          <a href="/contact" className={styles.links}>
            <Poppins
              fontWeight={"500"}
              fontSize={"16px"}
              className={styles.font}
            >
              Contact
            </Poppins>
          </a>
        </li>
      </Links>
      <div className={styles.icons}>
        <a href="" target="_blank">
          <Icon menuActive={menu}
            src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Header/login_icon.svg"
            alt="Login Icon"
          />
        </a>
        <a href="" target="_blank">
          <Icon menuActive={menu}
            src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Header/cart_icon.svg"
            alt="Cart Icon"
            width={"28px"}
            height={"28px"}
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
  );
};

export default Header;
