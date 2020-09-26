import React from 'react';

import HeroItem from './HeroItem';

const HeroesList = ({ heroesData, fetchHeroesData }) => {

  if(!heroesData) {
    return (
      <div>Loading...</div>
    )
  }

  if(!heroesData.length) {
    return (
      <div>No results!</div>
    )
  }

  return (
    <ul>
      {heroesData.length}
      {heroesData.map(hero => (
        <HeroItem key={hero._id} heroData={hero} fetchHeroesData={fetchHeroesData} />
      ))}
    </ul>
  );
}

export default HeroesList;