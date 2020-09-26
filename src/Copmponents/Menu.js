import React from 'react';

function Menu(props) {
    let {setModal} = props
  return (
    <div>
        <button onClick={() => setModal(true)}>Add hero</button>
    </div>
  );
}

export default Menu;
