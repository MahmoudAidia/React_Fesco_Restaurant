import Container from "../UI/Container";
import Address from "./Address";
import ReservationBtn from "./ReservationBtn";
import OpenHours from "./OpenHours";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContainer}>
          <div className={styles.footerCol}>
            <Address />
            <ReservationBtn>View Map</ReservationBtn>
          </div>

          <div className={styles.footerCol}>
            <OpenHours />
            <ReservationBtn>View Map</ReservationBtn>
          </div>

          <div className={styles.social}>
            <div>
              <h4>We are social</h4>
              <p>Feel free to check our social media pages.</p>
            </div>
            <div className={styles.socialIcons}>
              <div>
                <FaFacebook />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
