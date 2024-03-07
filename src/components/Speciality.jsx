import Container from "../UI/Container";
import Meal from "./Meal";
import styles from "./Speciality.module.css";
import meal1 from "../img/meal-1.jpg";
import meal2 from "../img/meal-2.jpg";
const meals = [
  { img: meal2, name: "Mozerlla", price: 30 },
  { img: meal1, name: "Lasgan", price: 20 },
  { img: meal2, name: "Basta", price: 40 },
];

function Speciality() {
  return (
    <section className={styles.speciality}>
      <Container>
        <div className={styles.specialityBox}>
          <h2>Our Speciality</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
            repudiandae!
          </p>

          <div className={styles.meals}>
            {meals.map((meal) => (
              <Meal
                name={meal.name}
                img={meal.img}
                price={meal.price}
                key={meal.price}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Speciality;
