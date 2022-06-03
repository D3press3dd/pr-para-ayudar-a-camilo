import React from 'react'
import { useNavigate } from 'react-router-dom'
const BotonAvisoDeCookies = () => { // usamos Navigate xq asi cambiamos la url al clickear el boton.. no se si tiene sentido revisa cuando sepas mas, ahi podria ir un link.
const IrAPoliticasDeCookies= useNavigate()
const Enlace = ()=>{ // sino es asi tenemos q poner la ruta del componente al q queremos ir
    IrAPoliticasDeCookies("/PoliticasDeCookies") 
}

return (
    <a className="enlace" onClick={Enlace}>Aviso de Cookies</a>
  )
}

export default BotonAvisoDeCookies