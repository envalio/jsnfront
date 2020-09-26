import React, { useState, useEffect } from 'react';

import Menu from './components/Menu';
import HeroesList from './components/HeroesList';
import Modal from './components/Modal';

import './css/App.css';

const App = () => {

  const [heroesData, setHeroesData] = useState(null);
  const [isModalOpened, switchModal] = useState(false);

  useEffect(() => {
    fetchHeroesData();
  }, [])

  const fetchHeroesData = () => {
    fetch(`${process.env.REACT_APP_URL}`)
      .then(res => res.json())
      .then(res => setHeroesData(res))
      .catch(error => console.error(error))
  }

  return (
    <div className="App">
      <Menu
        switchModal={switchModal}
      />
      <HeroesList heroesData={heroesData} fetchHeroesData={fetchHeroesData} />
      {isModalOpened && (
        <Modal
          state="edit"
          switchModal={switchModal}
          fetchHeroesData={fetchHeroesData}
        />
      )}
    </div>
  );
}

export default App;
