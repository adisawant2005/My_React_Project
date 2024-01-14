import { useState } from "react";
import Item from "./Item";

const BasketItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    if (!activeItems.includes(item)) {
      let newItems = [...activeItems, item];
      console.log("Item bought: " + item);
      console.log("ActiveBefore: " + activeItems);
      console.log("AfterActive: " + newItems);
      setActiveItems(newItems);
    } else {
      let index = -1;
      index = activeItems.indexOf(item);
      if (index > -1) {
        activeItems.splice(index, 1);
      }
      console.log("Item Removed: " + item);
      console.log("AfterRemoved: " + activeItems);
      setActiveItems(activeItems);
    }
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          basketItem={item}
          bought={activeItems.includes(item) ? true : false}
          handleBuyButton={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default BasketItems;
