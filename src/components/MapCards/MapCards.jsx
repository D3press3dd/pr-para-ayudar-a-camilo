import React from 'react';
import json from '../../Cards.json';
import Cards from '../Cards/Cards';
const MapCards = () => {
  console.log(json);
  return (
    <div>
      {json.map(({ Imagenes }, index) => (
        <Cards Imagenes={Imagenes} key={index} />
      ))}
    </div>
  );
};
export default MapCards;
