import MenuList from "./MenuList";
import styles from "./MenuType.module.css";
const menu = [
  {
    name: "Italian",
    price: Math.trunc(Math.random() * 100) + 10,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    name: "Egyptian",
    price: Math.trunc(Math.random() * 100) + 10,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    name: "German",
    price: Math.trunc(Math.random() * 100) + 10,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    name: "Spanish",
    price: Math.trunc(Math.random() * 100) + 10,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];
function MenuType({ title }) {
  return (
    <div className={styles.menuType}>
      <h2>..... {title} .....</h2>
      <div className={styles.listContainer}>
        <MenuList menu={menu} />
        <MenuList menu={menu} />
      </div>
    </div>
  );
}

export default MenuType;
