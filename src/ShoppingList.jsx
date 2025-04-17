import React, { useState } from "react";
import Input from "./Input";
import note from "./images/note.png";
import Button from "./Button";
import List from "./List";
import "./style.css";

function ShoppingList() {
  const [input, setInput] = useState("");
  const [shoppingList, setShoppingList] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input || !input.trim()) {
      alert("Enter a valid list item");
    } else {
      setShoppingList([...shoppingList, input]);
    }
    setInput("");
  };

  const handleClick = () => {};

  const handleClearAll = () => {
    setShoppingList([]);
  };

  return (
    <div className="container">
      <header>
        <img src={note} alt="" />
        <h1>Shopping List</h1>
      </header>
      <div>
        <form id="item-form" onSubmit={handleSubmit}>
          <Input
            placeholder="Enter Item"
            type="text"
            value={input}
            onChange={handleChange}
            className="form-input"
          />
          <div className="form-control">
            <Button onClick={handleClick} className="btn">
              Add Item
            </Button>
          </div>
        </form>
      </div>

      <div>
        <Input className="form-input-filter" placeholder="Filter Items" />
      </div>
      <div>
        <List shoppingList={shoppingList} />
      </div>
      <div>
        <Button className="btn-clear" onClick={handleClearAll}>
          Clear All
        </Button>
      </div>
    </div>
  );
}

export default ShoppingList;

/* 
 - input component
 - button component
 - item component
*/
