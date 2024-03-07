import Container from "../UI/Container";
import Header from "./Header";
import styles from "./Hero.module.css";
import HeroGrid from "./HeroGrid";

function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <Header />
        <HeroGrid />
      </Container>
    </section>
  );
}

export default Hero;
