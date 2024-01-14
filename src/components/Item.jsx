import styles from "./Item.module.css";

const Item = ({ basketItem, bought, handleBuyButton }) => {
  let status = bought ? "Remove" : "Buy";
  return (
    <li
      className={`${styles["list-box"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["item-text-color"]}>{basketItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        {status}
      </button>
    </li>
  );
};

export default Item;
