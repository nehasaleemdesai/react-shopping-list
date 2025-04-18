import React, { useState } from "react";
import Input from "./Input";
import note from "./images/note.png";
import Button from "./Button";
import List from "./List";
import "./style.css";
import { FaPlus } from "react-icons/fa6";

function ShoppingList() {
  const [input, setInput] = useState("");
  const [shoppingList, setShoppingList] = useState([
    "cereal",
    "banana",
    "apple",
  ]);

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

  const handleClearAll = () => {
    setShoppingList([]);
  };

  const handleDelete = (toDeleteIndex) => {
    const newList = shoppingList.filter((li, idx) => idx !== toDeleteIndex);
    setShoppingList(newList);
  };

  const handleEdit = (index) => {};

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
            <Button className="btn">
              <FaPlus />
              Add Item
            </Button>
          </div>
        </form>
      </div>

      <div>
        <Input className="form-input-filter" placeholder="Filter Items" />
      </div>
      <div>
        <List handleDelete={handleDelete} shoppingList={shoppingList} />
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
