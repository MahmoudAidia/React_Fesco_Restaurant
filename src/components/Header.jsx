import styles from "./Header.module.css";

import { HiViewList } from "react-icons/hi";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1>Fesco</h1>
        <ul className={styles.links}>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>About</span>
          </li>
          <li>
            <span>Menu</span>
          </li>
          <li>
            <span>Reservation</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul>

        <HiViewList className={styles.listIcon} />
      </nav>
    </header>
  );
}

export default Header;
