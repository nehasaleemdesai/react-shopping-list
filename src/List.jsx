import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TbEdit } from "react-icons/tb";

function List({
  shoppingList,
  handleDelete,
  handleEdit,
  editIndex,
  handleComplete,
  completedIndexes,
  filterInput,
  isEditEnabled,
}) {
  const listStyle = (index) => {
    if (isEditEnabled) {
      if (index === editIndex) {
        console.log(index === editIndex);
        return "edit-mode";
      }
      return "all-edit-mode";
    }
  };

  const filteredList = shoppingList.filter((item) =>
    item.toLowerCase().includes(filterInput.toLowerCase())
  );

  const listItems = filteredList.map((li, index) => {
    return (
      <li
        className={listStyle(index)}
        onClick={() => handleComplete(index)}
        // className={index === editIndex ? "edit-mode" : ""}
        key={index}
      >
        <span
          className={completedIndexes.includes(index) ? "line-through" : ""}
        >
          {li}
        </span>
        <div>
          <IoIosCloseCircle onClick={(event) => handleDelete(event, index)} />
          <TbEdit onClick={(event) => handleEdit(event, index)} />
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul id="item-list" className="items">
        {listItems}
      </ul>
    </div>
  );
}

export default List;
