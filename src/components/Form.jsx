import Button from "../UI/Button";

import styles from "./Form.module.css";

function Form() {
  function formHandler(e) {
    e.preventDefault();
  }
  return (
    <form onClick={formHandler}>
      <div className={styles.formBox}>
        <div>
          <label>Choose a data</label>
          <input type="date" />
        </div>
        <div>
          <label>Choose Time</label>
          <input type="time" />
        </div>
        <div>
          <label>Number of people</label>
          <input type="number" />
        </div>
      </div>

      <div className={styles.btnContainer}>
        <Button>Book Now</Button>
      </div>
    </form>
  );
}

export default Form;
