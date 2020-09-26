import React from 'react';

const Menu = ({ switchModal }) => {
  const handleClick = () => {
    switchModal(true);
  }

  return (
    <div>
        <button onClick={handleClick}>Add hero</button>
    </div>
  );
}

export default Menu;
