import Facebook from "../../assets/svg/Social Icons/facebook_icon.svg";
import Instagram from "../../assets/svg/Social Icons/instagram_icon.svg";
import Twitter from "../../assets/svg/Social Icons/twitter_icon.svg";
import LinkedIn from "../../assets/svg/Social Icons/linkedin_icon.svg";

const Footer = () => {
  return (
    <footer>
      <h2>Funiro.</h2>
      <p>400 University Drive Suite 200 Coral Gables,</p>
      <p>FL 33134 USA</p>
      <img src={Facebook} alt="Facebook Icon" />
      <img src={Instagram} alt="Instagram Icon" />
      <img src={Twitter} alt="Twitter Icon" />
      <img src={LinkedIn} alt="LinkedIn Icon" />
    </footer>
  );
};

export default Footer;
