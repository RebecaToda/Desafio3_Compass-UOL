import Poppins from "../../fonts/fonts.ts";
import styles from "./Footer.module.css";
import Components from "./style.ts";

const { InputNews, ButtonSub, LineTopF, LineF } = Components;

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <LineTopF></LineTopF>
      <div className={styles.body}>
        <div className={styles.div}>
          <Poppins fontWeight={"700"} fontSize={"24px"}>
            Funiro.
          </Poppins>
          <Poppins color={"#9F9F9F"}>
            400 University Drive Suite 200 Coral Gables,
          </Poppins>
          <Poppins color={"#9F9F9F"}>FL 33134 USA</Poppins>
        </div>
        <div>
          <a href="https://www.facebook.com/" target="_blank">
            <img
              src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Social+Icons/facebook_icon.svg"
              alt="Facebook Icon"
              className={styles.img}
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img
              src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Social+Icons/instagram_icon.svg"
              alt="Instagram Icon"
              className={styles.img}
            />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img
              src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Social+Icons/twitter_icon.svg"
              alt="Twitter Icon"
              className={styles.img}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rebeca-toda-barbosa/"
            target="_blank"
          >
            <img
              src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Social+Icons/linkedin_icon.svg"
              alt="LinkedIn Icon"
              className={styles.img}
            />
          </a>
        </div>
        <div className={styles.div}>
          <Poppins color={"#9F9F9F"} fontWeight={"500"}>
            Links
          </Poppins>
          <a href="" className={styles.linksF}>
            Home
          </a>
          <a href="" className={styles.linksF}>
            Shop
          </a>
          <a href="" className={styles.linksF}>
            About
          </a>
          <a href="" className={styles.linksF}>
            Contact
          </a>
        </div>
        <div className={styles.div}>
          <Poppins color={"#9F9F9F"} fontWeight={"500"}>
            Help
          </Poppins>
          <a href="" className={styles.linksF}>
            Payment Options
          </a>
          <a href="" className={styles.linksF}>
            Returns
          </a>
          <a href="" className={styles.linksF}>
            Privacy Policies
          </a>
        </div>
        <div>
          <Poppins color={"#9F9F9F"} fontWeight={"500"}>
            Newsletter
          </Poppins>
          <div>
            <InputNews
              type="text"
              placeholder="Enter Your Email Address"
            ></InputNews>
            <ButtonSub>SUBSCRIBE</ButtonSub>
          </div>
        </div>
      </div>
      <LineF></LineF>
    </footer>
  );
};

export default Footer;
