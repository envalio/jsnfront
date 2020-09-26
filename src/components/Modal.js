import React, { useState, useEffect } from 'react';

const Modal = ({ switchModal, heroData, state, fetchHeroesData }) => {

  const [nickname, setNickname] = useState(heroData?.nickname || '');
  const [realname, setRealname] = useState(heroData?.realname || '');
  const [description, setDescription] = useState(heroData?.description || '');
  const [superpower, setSuperpower] = useState(heroData?.superpower || '');
  const [catchphrase, setCatchphrase] = useState(heroData?.catchphrase || '');

  useEffect(() => {
    return () => {
      setNickname('');
      setRealname('');
      setDescription('');
      setSuperpower('');
      setCatchphrase('');
    }
  }, [])

  const renderEditHeroData = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>Nick name: 
        <input value={nickname} onChange={e => setNickname(e.currentTarget.value)} />
      </p>
      <p>Real name: 
        <input value={realname} onChange={e => setRealname(e.currentTarget.value)} />
      </p>
      <p>Description:
        <input value={description} onChange={e => setDescription(e.currentTarget.value)} />
      </p>
      <p>Super power:
        <input value={superpower} onChange={e => setSuperpower(e.currentTarget.value)} />
      </p>
      <p>Catch phrase:
        <input value={catchphrase} onChange={e => setCatchphrase(e.currentTarget.value)} />
      </p>
    </div>
  )

    const renderViewHeroData = () => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>Nick name: {heroData.nickname}</p>
        <p>Real name: {heroData.realname}</p>
        <p>Description: {heroData.description}</p>
        <p>Super power: {heroData.superpower}</p>
        <p>Catch phrase: {heroData.catchphrase}</p>
      </div>
    )

    const handleSave = async () => {
      const body = {
        nickname,
        realname,
        description,
        superpower,
        catchphrase
      }

      if (Object.values(body).includes('')) {
        alert('FILL ALL EMPTY ROWS');
        return;
      }

      if (heroData) {
        await fetch(`${process.env.REACT_APP_URL}/${heroData._id}`, {
          method: "PUT",
          body: JSON.stringify(body)
        })
      } else {
        await fetch(`${process.env.REACT_APP_URL}`, {
          method: "POST",
          body: JSON.stringify(body)
        })
      }

      fetchHeroesData();
      handleClose();
    }

    const handleClose = () => {
      switchModal(false)
    }

    const renderButtons = () => (
      <>
        <button type="button" 
          onClick={handleSave}
        >
          Save
        </button>
        <button type="button" 
          onClick={handleClose}
        >
          Close
        </button>
      </>
    )

    return (
      <div
        onClick={handleClose}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)"
        }}
      >
        <div
          onClick={e => e.stopPropagation()}
          className="modal"
          style={{
            position: "absolute",
            background: "#fff",
            top: 25,
            left: "10%",
            right: "10%",
            padding: 15,
            border: "2px solid #444"
          }}
        >
          {state === "view" ? renderViewHeroData() : renderEditHeroData()}
          {state === "edit" && renderButtons()}
        </div>
      </div>
  );
}

export default Modal;