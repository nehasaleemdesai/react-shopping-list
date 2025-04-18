import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TbEdit } from "react-icons/tb";

function List({ shoppingList, handleDelete, handleEdit }) {
  const listItems = shoppingList.map((li, index) => {
    return (
      <li>
        {li}
        <IoIosCloseCircle onClick={() => handleDelete(index)} />
        <TbEdit onClick={() => handleEdit(index)} />
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
