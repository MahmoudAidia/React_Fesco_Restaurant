import Container from "../UI/Container";
import styles from "./Book.module.css";
import Form from "./Form";

function Book() {
  return (
    <section className={styles.bookSection}>
      <Container>
        <div className={styles.bookTextBox}>
          <h2>Book a Table</h2>
          <p>
            consectetur adipisicing elit. Harum quidem distinctio, deleniti
            sapiente maxime itaque.
          </p>

          <Form />
        </div>
      </Container>
    </section>
  );
}

export default Book;
