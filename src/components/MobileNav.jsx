import styles from "./MobileNav.module.css";
import { motion } from "framer-motion";
function MobileNav() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.mobileNav}
    >
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservation</li>
        <li>Contact</li>
      </ul>
    </motion.div>
  );
}

export default MobileNav;
