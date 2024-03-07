import styles from "./OpenHours.module.css";

function OpenHours() {
  return (
    <div className={styles.openHoursBox}>
      <h3>opening hours</h3>
      <p>
        <span>Monday - Friday..........8:00am - 11pm</span>
        <span>Saturday - Sunday..........8:00am - 7pm</span>
      </p>
    </div>
  );
}

export default OpenHours;
