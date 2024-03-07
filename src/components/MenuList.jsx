import MenuItem from "./MenuItem";
import styles from "./MenuList.module.css";
function MenuList({ menu }) {
  return (
    <ul className={styles.menuList}>
      {menu.map((item) => (
        <MenuItem
          name={item.name}
          price={item.price}
          text={item.text}
          key={item.price}
        />
      ))}
    </ul>
  );
}

export default MenuList;
