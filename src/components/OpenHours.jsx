import styles from "./OpenHours.module.css";

function OpenHours() {
  return (
    <div className={styles.openHoursBox}>
      <h3>opening hours</h3>
      <p>
        <p>Monday - Friday..........8:00am - 11pm</p>
        <p>Saturday - Sunday..........8:00am - 7pm</p>
      </p>
    </div>
  );
}

export default OpenHours;
