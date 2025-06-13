// frontend/src/components/ItemForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/items', { name, quantity });
    setName('');
    setQuantity(0);
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="number" value={quantity} onChange={(e) => setQuantity(+e.target.value)} />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
