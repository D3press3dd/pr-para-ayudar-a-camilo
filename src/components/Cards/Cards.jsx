// Gracias por tomarte el tiempo de ayudarme, sea quien seas, haces feliz a un desconocido<3
import React from 'react';
import PropTypes from 'prop-types';
const Cards = ({ Imagenes }) => {
  return (
    <section id='tarjetas'>
      <div className='contenedor-cards'>
        <div className='card'>
          <img src={Imagenes} alt='Imagen1,2,3'></img>
          <h1>Comoda</h1>
          <p>Dormitorio</p>
        </div>
      </div>
    </section>
  );
};
Cards.propTypes = {
  Imagenes: PropTypes.string.isRequired,
};
export default Cards;
