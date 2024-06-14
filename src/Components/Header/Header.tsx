import Fonts from "../../fonts/fonts.ts";
import styles from "./Header.module.css";
import Components from "./style.ts";

const { Logo } = Components;
const { Poppins, Montserrat } = Fonts;

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Logo>
          <img
            src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/logo.svg"
            alt="Funiro Logo"
          />
          <Montserrat>Funiro</Montserrat>
        </Logo>
      </header>
    </>
  );
};

export default Header;
