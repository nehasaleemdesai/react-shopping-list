import React from "react";

function List({ shoppingList }) {
  const listItems = shoppingList.map((li) => {
    return <li>{li}</li>;
  });
  return (
    <div>
      <ul id="item-list" class="items">
        {listItems}
      </ul>
    </div>
  );
}

export default List;
