import styles from "./Header.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiViewList } from "react-icons/hi";
import MobileNav from "./MobileNav";

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <motion.h1 initial={{ y: 200 }} animate={{ y: 0 }}>
          Fesco
        </motion.h1>
        <ul className={styles.links}>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <span>Home</span>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span>About</span>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span>Menu</span>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span>Reservation</span>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span>Contact</span>
          </motion.li>
        </ul>

        <HiViewList
          className={styles.listIcon}
          onClick={() => setShowMobileNav((prev) => !prev)}
        />

        {showMobileNav && <MobileNav />}
      </nav>
    </header>
  );
}

export default Header;
