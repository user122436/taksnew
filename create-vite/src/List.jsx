import React from 'react';

function List({ items, onDelete }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => onDelete(item)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
