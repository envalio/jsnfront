import React, { useState } from 'react';
import Modal from './Modal';

const HeroItem = ({ heroData, fetchHeroesData }) => {

  const [isInfoOpened, switchInfo] = useState(false);
  const [modalState, setModalState] = useState("view");
  
  const openViewHero = () => {
    setModalState("view");
    switchInfo(true);
  }

  const handleEditHero = () => {
    setModalState("edit");
    switchInfo(true);
  }

  const handleDeleteHero = async () => {
    await fetch(`${process.env.REACT_APP_URL}/${heroData._id}`, {
      method: 'DELETE'
    })

    await fetchHeroesData();
  }

  return (
    <li style={{ display: 'flex' }}>
      <p onClick={openViewHero}>
        Nick name: {heroData.nickname}
      </p>

      <button onClick={handleEditHero}>Edit</button>
      <button onClick={handleDeleteHero}>Delete</button>

      {isInfoOpened && (
        <Modal
          state={modalState}
          switchModal={switchInfo}
          heroData={heroData}
          fetchHeroesData={fetchHeroesData}
        />
      )}
    </li>
  )
}

export default HeroItem;