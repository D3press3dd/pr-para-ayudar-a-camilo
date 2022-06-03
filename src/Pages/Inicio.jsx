import React from 'react';
import Menu from '../components/Menu';
import Slider from "../components/Slider";
import Banner from '../components/Banner';
import Boton from "../components/BotonCards";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Sillon from "../components/Sillon";
import DerechosReservados from "../components/DerechosReservados";
import CartelCookies from "../components/CartelCookies"
import FondoCookies from '../components/FondoCookies';
import "../components/Menu/Menu.css"
import "../components/Slider/Slider.css"
import "../components/Banner/Banner.css"
import "../components/BotonCards/Boton.css"
import "../components/Cards/Cards.css"
import "../components/Footer/Footer.css"
import "../components/Sillon/Sillon.css"
import "../components/DerechosReservados/DerechosReservados.css"
import "../components/FraseBoton/FraseBoton.css"
import "../components/CartelCookies/CartelCookies.css"
import "../components/BotonAvisoDeCookies/BotonAvisoDeCookies.css"
import "../components/FondoCookies/FondoCookies.css"

const Inicio = () => {
return(
    <div>
        <Menu/>
        <Slider/>
        <Sillon/>
        <Banner/>
        <Cards/>
        <Boton/>
        <Footer/>
        <DerechosReservados/>
        <CartelCookies/>
        <FondoCookies/>
     </div>
    ) 
}

export default Inicio;