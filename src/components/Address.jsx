import styles from "./Address.module.css";

function Address() {
  return (
    <div className={styles.addressBox}>
      <h3 className={styles.title}>Address</h3>
      <p className={styles.address}>17 Awesome Street, Cario</p>
    </div>
  );
}

export default Address;
