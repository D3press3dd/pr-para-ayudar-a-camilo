import React from 'react';
import Cards from '../Cards/Cards';
import imagenes from '../../Cards.json';

const MapCards = () => {
  // aqui nunca ibas a ver nada porque estabas renderizando el componente card, no este que era el que te devuelve las cards

  // no uses la palabra "json" para importar algo porque javascript la confunde con una variable de lenguaje

  // en el div abajo estoy mapeando cada card y estoy pasando la prop "imagen" en minuscula, mas facil de debuggear, recuerda que es una propertie, no hace falta enviarla en mayuscula
  console.log(imagenes);
  return (
    <div className='contenedor-cards'>
      {imagenes.map((imagen, index) => (
        <Cards imagen={imagen} key={index} />
      ))}
    </div>
  );
};
export default MapCards;
