import React from 'react';

function Input({ onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={handleChange}
    />
  );
}

export default Input;
