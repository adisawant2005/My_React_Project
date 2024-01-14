import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h1>The basket is empty</h1>}</>;
};

export default ErrorMessage;
