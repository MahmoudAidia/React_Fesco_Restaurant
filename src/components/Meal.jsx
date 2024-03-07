import styles from "./Meal.module.css";

function Meal({ img, name, price }) {
  return (
    <div className={styles.meal}>
      <img src={img} />
      <div className={styles.mealText}>
        <p>{name}</p>
        <p>{price} $</p>
      </div>
    </div>
  );
}

export default Meal;
