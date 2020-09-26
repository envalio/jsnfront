import React, {useState} from 'react';
import Menu from './Copmponents/Menu';
import List from './Copmponents/List';
import Modal from './Copmponents/Modal';
import './css/App.css';

function App() {
  const [modal, setModal] = useState(false)

  return (
    <div className="App">
      <Menu 
        setModal={setModal}
      />
      <List />
      <Modal 
        modal={modal}
        setModal={setModal}
      />
    </div>
  );
}

export default App;
