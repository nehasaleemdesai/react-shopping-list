import React, { Component, useState } from "react";
import Input from "./Input";
import note from "./images/note.png";
import Button from "./Button";
import List from "./List";
import "./style.css";
import { FaPlus } from "react-icons/fa6";
import { TbEdit } from "react-icons/tb";

function ShoppingList() {
  const [input, setInput] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [shoppingList, setShoppingList] = useState([
    "cereal",
    "banana",
    "apple",
  ]);
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [completedIndexes, setCompletedIndexes] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // check if empty input
    if (!input || !input.trim()) {
      alert("Enter a valid list item");
      return;
    }

    // check if editing else adding a new item

    if (isEditEnabled) {
      //      - copy existing list
      const editedList = [...shoppingList];
      //      - update edited value, to the copied array
      editedList[editIndex] = input;
      //      - update shoppinglist state
      setShoppingList(editedList);
      setIsEditEnabled(false);
      setEditIndex(null);
    } else {
      setShoppingList([...shoppingList, input]);
    }

    setInput("");
  };

  const handleClearAll = () => {
    setShoppingList([]);
  };

  const handleDelete = (event, toDeleteIndex) => {
    event.stopPropagation();
    const newList = shoppingList.filter((li, idx) => idx !== toDeleteIndex);
    setShoppingList(newList);
  };

  const handleEdit = (event, index) => {
    event.stopPropagation();
    setInput(shoppingList[index]);
    setIsEditEnabled(true);
    setEditIndex(index);
  };

  const handleComplete = (index) => {
    let indexes = [...completedIndexes];

    // if index is already part of my completed indexes list; then we remove it; else add it
    if (indexes.includes(index)) {
      indexes = indexes.filter((val) => val !== index);
    } else {
      indexes.push(index);
    }

    // Update state
    setCompletedIndexes(indexes);
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
            <Button className={isEditEnabled ? "update-btn btn" : "btn"}>
              {isEditEnabled ? <TbEdit /> : <FaPlus />}
              {isEditEnabled ? "Update Item" : "Add Item"}
            </Button>
          </div>
        </form>
      </div>

      <div>
        <Input
          onChange={(event) => setFilterInput(event.target.value)}
          value={filterInput}
          className="form-input-filter"
          placeholder="Filter Items"
        />
      </div>
      <div>
        <List
          filterInput={filterInput}
          completedIndexes={completedIndexes}
          editIndex={editIndex}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          shoppingList={shoppingList}
        />
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

/* 

- handle edit
  - eventhandler -> onclick
  - populate the trigger word into "input" field
  - after clicking -> li should gray out
  - update "add item" to "update item" button
- filter
  - eventhandler -> tracks changes
  - check -> list

*/

/* 

- copy existing list
- update edited value, to the copied array
- update shoppinglist state

*/
