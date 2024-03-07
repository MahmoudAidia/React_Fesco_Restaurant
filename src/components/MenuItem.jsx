import styles from "./MenuItem.module.css";

function MenuItem({ name, text, price }) {
  return (
    <li className={styles.item}>
      <h3>{name}</h3>
      <div className={styles.flex}>
        <p>{text}</p>
        <p className={styles.price}>{price}$</p>
      </div>
    </li>
  );
}

export default MenuItem;
