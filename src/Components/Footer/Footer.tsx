import Fonts from "../../fonts/fonts.ts";
import styles from "./Footer.module.css";
import Components from "./style.ts";

const { InputNews, ButtonSub, LineTopF, LineF, PreFooter, Icons } = Components;
const { Poppins } = Fonts;

interface Props {
  showPreFooter?: boolean;
}

const Footer = (props: Props) => {
  return (
    <>
      {props.showPreFooter ? (
        <PreFooter className={styles.preFooter}>
          <Icons
            src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Pre+Folder/trophy.svg"
            alt="Trophy Icon"
            MarginLeft={"0"}
          />
          <div className={styles.separation}>
            <Poppins fontWeight={"600"} fontSize={"25px"}>
              High Quality
            </Poppins>
            <Poppins fontWeight={"500"} fontSize={"20px"} color={"#898989"}>
              crafted from top materials
            </Poppins>
          </div>
          <Icons
            src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Pre+Folder/protection.svg"
            alt="Protection Icon"
          />
          <div className={styles.separation}>
            <Poppins fontWeight={"600"} fontSize={"25px"}>
              Warranty Protection
            </Poppins>
            <Poppins fontWeight={"500"} fontSize={"20px"} color={"#898989"}>
              Over 2 years
            </Poppins>
          </div>
          <Icons
            src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Pre+Folder/shipping.svg"
            alt="Shipping Icon"
          />
          <div className={styles.separation}>
            <Poppins fontWeight={"600"} fontSize={"25px"}>
              Free Shipping
            </Poppins>
            <Poppins fontWeight={"500"} fontSize={"20px"} color={"#898989"}>
              Order over 150$
            </Poppins>
          </div>
          <Icons
            src="https://imagensdesafio3.s3.us-east-2.amazonaws.com/svg/Pre+Folder/support.svg"
            alt="Support Icon"
            MarginLeft={"4%"}
          />
          <div className={styles.separation}>
            <Poppins fontWeight={"600"} fontSize={"25px"}>
              24 / 7 Support
            </Poppins>
            <Poppins fontWeight={"500"} fontSize={"20px"} color={"#898989"}>
              Dedicated support
            </Poppins>
          </div>
        </PreFooter>
      ) : (
        ""
      )}
      <footer>
        <LineTopF></LineTopF>
        <div className={styles.footer}>
          <div className={styles.body}>
            <div>
              <div className={styles.div}>
                <Poppins
                  fontWeight={"700"}
                  fontSize={"24px"}
                  paddingBottom={"50px"}
                >
                  Funiro.
                </Poppins>
                <Poppins color={"#9F9F9F"}>
                  400 University Drive Suite 200 Coral Gables,
                </Poppins>
                <Poppins color={"#9F9F9F"} paddingBottom={"55px"}>
                  FL 33134 USA
                </Poppins>
              </div>
              <div className={styles.links}>
                {/* links */}
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
            </div>
            <div className={styles.div}>
              <Poppins
                color={"#9F9F9F"}
                fontWeight={"500"}
                paddingBottom={"55px"}
              >
                Links
              </Poppins>
              <a href="/home" className={styles.linksF}>
                <p className={styles.p}>Home</p>
              </a>
              <a href="/shop" className={styles.linksF}>
                <p className={styles.p}>Shop</p>
              </a>
              <a href="" className={styles.linksF}>
                <p className={styles.p}>About</p>
              </a>
              <a href="/contact" className={styles.linksF}>
                <p className={styles.p}>Contact</p>
              </a>
            </div>
            <div className={styles.div}>
              <Poppins
                color={"#9F9F9F"}
                fontWeight={"500"}
                paddingBottom={"55px"}
              >
                Help
              </Poppins>
              <a href="" className={styles.linksF}>
                <p className={styles.p}>Payment Options</p>
              </a>
              <a href="" className={styles.linksF}>
                <p className={styles.p}>Returns</p>
              </a>
              <a href="" className={styles.linksF}>
                <p className={styles.p}>Privacy Policies</p>
              </a>
            </div>
            <div>
              <Poppins
                color={"#9F9F9F"}
                fontWeight={"500"}
                paddingBottom={"55px"}
              >
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
          <div>
            <LineF></LineF>
            <Poppins
              paddingBottom={"35px"}
              paddingTop={"35px"}
              fontWeight={"500"}
            >
              2023 furino. All rights reverved
            </Poppins>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
