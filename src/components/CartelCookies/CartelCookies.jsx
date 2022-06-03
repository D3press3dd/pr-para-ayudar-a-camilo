import React, {useState} from "react";
import BotonAvisoDeCookies from "../BotonAvisoDeCookies";
const CartelCookies = () => {
  const dataLayer = [];
  const [,SetDesaparecer] = useState(true);
  const condicion1 =
    !localStorage.getItem("cookies-aceptadas") &&
    dataLayer.push({event: "cookies-aceptadas"}); // si no hay nada en el localstorage, aparece el cartel de cookies
  const Desapareciendo = () => {
    // con este evento, hacemos que saque las cookies queden en el localstorage y asi cuando recarguemos no se muestre mas el cartel. tmb las hacemos que desaparezca el cartel cuando clickeamos el boton.
    localStorage.setItem("cookies-aceptadas", true);
    dataLayer.push({event: "cookies-aceptadas"});
    SetDesaparecer(false);
  };
  return (
    <div>
      {condicion1 && (
        <div className="aviso-cookies" id="aviso-cookies">
          <img
            className="galleta"
            src="/imagenes/cookie.svg"
            alt="Galleta"
          ></img>
          <h3 className="titulo">Cookies</h3>
          <p className="parrafo">
            Utilizamos cookies propias y de terceros para mejorar nuestros
            servicios.
          </p>
          <button
            className="boton"
            id="btn-aceptar-cookies"
            onClick={Desapareciendo}
          >
            De acuerdo
          </button>
          <BotonAvisoDeCookies/>
        </div>
      ) }
    </div>
  );
};

CartelCookies.propTypes = {};

export default CartelCookies;
