import Container from "../UI/Container";
import aboutImg from "../img/about.jpg";
import styles from "./About.module.css";
function About() {
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.aboutBox}>
          <div className={styles.aboutTextBox}>
            <div className={styles.aboutText}>
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis, optio!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, aliquam suscipit. Consequatur quibusdam maxime
                provident incidunt inventore doloremque culpa fugit neque, rerum
                nulla, quos aut voluptates magnam iste natus cum!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis, optio!
              </p>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <img src={aboutImg} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
