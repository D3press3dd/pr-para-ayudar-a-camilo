import React, { useState } from 'react';
import FraseBoton from '../FraseBoton/FraseBoton';

const Boton = () => {
  const [Mostrar, setMostrar] = useState(true);
  return (
    <div className='boton'>
      {Mostrar ? (
        <button type='submit' name='boton' onClick={() => setMostrar(false)}>
          Ver Mas
        </button>
      ) : (
        <FraseBoton />
      )}
    </div> // si es true, mostramos el boton q tiene una funcion click q lo cambia a false. si esta en false (osea q lo clickearon, mostramos el boton)
  );
};

export default Boton;
