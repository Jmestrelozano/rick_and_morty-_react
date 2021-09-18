import React from 'react'
import  "../header/header.css"
export const Header = ({children}) => {
    return (
        <div className="header">
            <div className="fondo">
                <img className="fondo-img" src={process.env.PUBLIC_URL+'/bg.png'} alt="fondo background"/>
            </div>
            
            <div className="logo">
                 <img  className="logo-img" src={process.env.PUBLIC_URL+'/assets/img/rick-and-morty.png'} alt="fondo background"/>
            </div>
            <div className="buscador-filtro">
                {children}
            </div>
          

        </div>
    )
}
