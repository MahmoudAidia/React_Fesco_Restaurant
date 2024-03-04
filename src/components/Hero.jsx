import Container from "../UI/Container";
import Header from "./Header";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <Header />
      </Container>
    </section>
  );
}

export default Hero;
