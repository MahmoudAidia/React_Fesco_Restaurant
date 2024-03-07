import ContactCard from "./ContactCard";
import styles from "./HeroGrid.module.css";
function HeroGrid() {
  return (
    <div className={styles.grid}>
      <div className={styles.col1}>
        <span>Icon</span>
        <h2>
          Making Food <br />
          Taste Better
        </h2>
        <p>Italian Specialities</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          mollitia maxime doloremque neque harum nisi sint. Alias minima odit
          quod!
        </p>
      </div>
      <div className={styles.col2}>
        <ContactCard />
      </div>
    </div>
  );
}

export default HeroGrid;
