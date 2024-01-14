import styles from "./BasketInput.module.css";

const BasketInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter an item name"
      className={styles.basketInput}
      onKeyDown={handleKeyDown}
    ></input>
  );
};

export default BasketInput;
