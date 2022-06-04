import React from 'react';
// import Menu from '../components/Menu';
// import Slider from '../components/Slider';
// import Banner from '../components/index';
// import Boton from '../components/BotonCards';
// import Footer from '../components/Footer';
// import Sillon from '../components/Sillon';
// import DerechosReservados from '../components/DerechosReservados';
// import CartelCookies from '../components/CartelCookies';
// import FondoCookies from '../components/FondoCookies';
// MIRA LA CANTIDAD DE EXPORT QUE SE ELIMINA AQUI, EL INDEX QUE ESTABAS HACIENDO EN CADA CARPETA DE COMPONENTE TIENES QUE HACERLO ES EN LA CARPETA "COMPONENTS", Y AHI ES QUE IMPORTAS Y EXPORTAS
import {
  Banner,
  Boton,
  CartelCookies,
  DerechosReservados,
  FondoCookies,
  Footer,
  Menu,
  Sillon,
  Slider,
} from '../components';

import '../components/Menu/Menu.css';
import '../components/Slider/Slider.css';
import '../components/Banner/Banner.css';
import '../components/BotonCards/Boton.css';
import '../components/Cards/Cards.css';
import '../components/Footer/Footer.css';
import '../components/Sillon/Sillon.css';
import '../components/DerechosReservados/DerechosReservados.css';
import '../components/FraseBoton/FraseBoton.css';
import '../components/CartelCookies/CartelCookies.css';
import '../components/BotonAvisoDeCookies/BotonAvisoDeCookies.css';
import '../components/FondoCookies/FondoCookies.css';
import MapCards from '../components/MapCards/MapCards';

const Inicio = () => {
  return (
    <div>
      <Menu />
      <Slider />
      <Sillon />
      <Banner />
      <MapCards />{' '}
      {/* AQUI ESTABAS MANDADO EL COMPONENTE CARD Y NO TE SERVIA PORQUE NO TENIA NADA, RECUERDA QUE TIENES QUE PONER EL COMPONENTE DONDE ESTAS MAPEANDO LAS CARDAS PORQUE ES LO QUE TE DEVUELVE CADA CARD */}
      <Boton />
      <Footer />
      <DerechosReservados />
      <CartelCookies />
      <FondoCookies />
    </div>
  );
};

export default Inicio;
