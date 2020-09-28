import React, { useState } from 'react';
import Modal from './Modal';

const HeroItem = ({ heroData, fetchHeroesData }) => {

  const [isInfoOpened, switchInfo] = useState(false);
  const [modalState, setModalState] = useState("view"); //View or edit. And view defualt
  
  const openViewHero = () => {
    setModalState("view");
    switchInfo(true);
  }

  const openEditHero = () => {
    setModalState("edit");
    switchInfo(true);
  }

  const handleDeleteHero = async () => {
    await fetch(`${process.env.REACT_APP_URL}/${heroData._id}`, {
      method: 'DELETE'
    })

    await fetchHeroesData(); // refetching
  }

  return (
    <li className="HeroItemLi">
      <p onClick={openViewHero}>
        Nick name: {heroData.nickname}
      </p>

      <button onClick={openEditHero}>Edit</button>
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