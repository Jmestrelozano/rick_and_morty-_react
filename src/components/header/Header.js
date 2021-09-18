import React from 'react'
import fondoRicky from "../../assets/img/bg.png"
import logoRicky from "../../assets/img/rick and morty.png"
import  "../header/header.css"
export const Header = ({children}) => {
    return (
        <div className="header">
            <div className="fondo">
                <img className="fondo-img" src={fondoRicky} alt="fondo background"/>
            </div>
            
            <div className="logo">
                 <img  className="logo-img" src={logoRicky} alt="fondo background"/>
            </div>
            <div className="buscador-filtro">
                {children}
            </div>
          

        </div>
    )
}
