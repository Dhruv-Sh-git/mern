// frontend/src/components/ItemList.js
import React from 'react';
import axios from 'axios';

const ItemList = ({ items, onUpdate }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/items/${id}`);
    onUpdate();
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          {item.name} - Qty: {item.quantity}
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
