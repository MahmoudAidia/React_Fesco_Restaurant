import Address from "./Address";
import styles from "./ContactCard.module.css";
import OpenHours from "./OpenHours";
import ReservationBtn from "./ReservationBtn";

function ContactCard() {
  return (
    <div className={styles.contactBox}>
      <h2 className={styles.contactTitle}>Contact</h2>
      <p className={styles.contactText}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        modi obcaecati explicabo nam, quibusdam eum.
      </p>
      <Address />
      <a>View map</a>
      <OpenHours />

      <ReservationBtn>Table Reservation</ReservationBtn>
    </div>
  );
}

export default ContactCard;
