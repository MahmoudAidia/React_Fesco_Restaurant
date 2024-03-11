import styles from "./ReservationBtn.module.css";

function ReservationBtn({ children }) {
  return (
    <div className={styles.btnContainer}>
      <button>{children}</button>
    </div>
  );
}

export default ReservationBtn;
