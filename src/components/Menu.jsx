import Container from "../UI/Container";
import styles from "./Menu.module.css";
import MenuType from "./MenuType";
import Button from "../UI/Button";
function Menu() {
  return (
    <section className={styles.menu}>
      <Container>
        <div className={styles.menuBox}>
          <div className={styles.menuHeader}>
            <h2>Our Menu</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              voluptatum.
            </p>

            <MenuType title="Pizza" />
            <MenuType title="Dessert" />
            <div className={styles.btnContainer}>
              <Button>View All Menu</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Menu;
