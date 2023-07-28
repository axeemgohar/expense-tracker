import "./footer.styles.css";
import { ReactComponent as FacebookSVG } from "../../assets/facebook-icon.svg";
import { ReactComponent as LinkedinSVG } from "../../assets/linkedin-icon.svg";
import { ReactComponent as InstagramSVG } from "../../assets/instagram-icon.svg";

const Footer = () => {
  return (
    <div className="footer d-flex flex-column flex-sm-row justify-content-sm-between px-5">
      <div className="d-flex align-items-center py-2 py-sm-0 justify-content-center">
        <a
          href="https://www.facebook.com/azeemgohar20/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookSVG className="social-icon" />
        </a>
        <a
          className="mx-3"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinSVG className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/azeemgohar20/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramSVG className="social-icon" />
        </a>
      </div>
      <div className="app-details d-flex flex-column justify-content-center align-items-center align-items-sm-start">
        <h4>Expense Tracker v1.0</h4>
        <h5>
          Made with{" "}
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/fluency/48/like.png"
            alt="like"
          />{" "}
          by Azeem Gohar
        </h5>
      </div>
    </div>
  );
};

export default Footer;
