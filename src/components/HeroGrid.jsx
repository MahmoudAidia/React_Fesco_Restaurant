import ContactCard from "./ContactCard";
import styles from "./HeroGrid.module.css";
import { motion } from "framer-motion";
import { GiWheat } from "react-icons/gi";

function HeroGrid() {
  return (
    <div className={styles.grid}>
      <motion.div
        className={styles.col1}
        initial={{ x: -400 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <GiWheat className={styles.logo} />
        </motion.span>
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
      </motion.div>
      <motion.div
        className={styles.col2}
        initial={{ y: 400 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <ContactCard />
      </motion.div>
    </div>
  );
}

export default HeroGrid;
