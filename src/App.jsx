import Container from "./components/Container";
import BasketItem from "./components/BasketItem";
import BasketInput from "./components/BasketInput";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  let [basketItems, setBasketIteams] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newBasketItem = event.target.value;
      event.target.value = "";
      let newBasketItems = [...basketItems, newBasketItem];
      setBasketIteams(newBasketItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="basket-heading">Basket</h1>
        <BasketInput handleKeyDown={onKeyDown}></BasketInput>
        <ErrorMessage items={basketItems}></ErrorMessage>
      </Container>
      <Container>
        <BasketItem items={basketItems}></BasketItem>
      </Container>
    </>
  );
}

export default App;
