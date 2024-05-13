import Container from "../UI/Container";
import Address from "./Address";
import ReservationBtn from "./ReservationBtn";
import OpenHours from "./OpenHours";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <Container>
        <div className={styles.footer}>
          <div className={styles.colContainer}>
            <div className={styles.col1}>
              <Address />
            </div>
            <ReservationBtn>View map</ReservationBtn>
          </div>

          <div className={styles.colContainer}>
            <div className={styles.col2}>
              <OpenHours />
            </div>

            <ReservationBtn>Table Reservation</ReservationBtn>
          </div>

          <div className={styles.colContainer}>
            <div className={styles.col3}>
              <h3>We are social:</h3>
              <p>Feel free to check our social media</p>
            </div>

            <div className={styles.socialIconsContainer}>
              <div>
                <FaFacebook className={styles.icon} />
              </div>

              <div>
                <FaInstagram className={styles.icon} />
              </div>

              <div>
                <FaTwitter className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

// function Footer() {
//   return (
//     <footer className={styles.footer}>
//       <Container>
//         <div className={styles.footerContainer}>
//           <div className={styles.footerCol}>
//             <div className={styles.footerBox}>
//               <Address />
//             </div>
//             <ReservationBtn>View Map</ReservationBtn>
//           </div>

//           <div className={styles.footerCol}>
//             <div className={styles.footerBox}>
//               <OpenHours />
//             </div>
//             <ReservationBtn>View Map</ReservationBtn>
//           </div>

//           <div className={styles.social}>
//             <div>
//               <h4>We are social</h4>
//               <p>Feel free to check our social media pages.</p>
//             </div>
//             <div className={styles.socialIcons}>
//               <div>
//                 <FaFacebook />
//               </div>
//               <div>
//                 <FaInstagram />
//               </div>
//               <div>
//                 <FaTwitter />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;
