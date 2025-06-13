// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

const App = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/items');
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Inventory CRUD</h1>
      <ItemForm onAdd={fetchItems} />
      <ItemList items={items} onUpdate={fetchItems} />
    </div>
  );
};

export default App;
