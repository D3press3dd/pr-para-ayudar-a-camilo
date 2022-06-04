/* eslint-disable react/prop-types */
// Gracias por tomarte el tiempo de ayudarme, sea quien seas, haces feliz a un desconocido<3
import React from 'react';
// import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
const Cards = ({ imagen }) => {
  // aqui recibo el objeto que contiene el link que seria el console log de abajo de esta linea, te lo deje para que veas lo que te llega,

  // te llega algo como imagenes:"y aqui la ruta" y en el src no puedes pasar un objeto
  console.log('objeto de la imagen donde solo quieres la ruta', imagen);
  // asi que aqui abajo lo que hago es desestructurar la ruta de la imagen como tal para que te quede el string de la ruta y lo pasas al srt
  const { imagenes } = imagen;

  // la className contendor card no va aqui, recuerda que esto esta siendo renderizado por map , entonces esto siempre devolveria una card individual, que esta siendo mapeada en el componente MAP CARD

  console.log('la ruta de la imagen en un string', imagenes);
  return (
    <section id='tarjetas'>
      <div>
        <div className='card'>
          <img src={imagenes} alt='Imagen1,2,3'></img>
          <h1>Comoda</h1>
          <p>Dormitorio</p>
        </div>
      </div>
    </section>
  );
};
// Cards.propTypes = {
//   Imagenes: PropTypes.string.isRequired,
// };
export default Cards;
