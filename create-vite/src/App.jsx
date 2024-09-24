import React, { useState } from 'react';
import Input from './Input';
import List from './List';

function App() {
  const [items, setItems] = useState([
    'Apple',
    'Banana',
    'Orange',
    'Grape',
    'Pineapple',
  ]);
  
  const [search, setSearch] = useState('');


  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  const handleDelete = (itemToDelete) => {
    setItems(items.filter(item => item !== itemToDelete));
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Input onSearch={handleSearch} />
      <List items={filteredItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
