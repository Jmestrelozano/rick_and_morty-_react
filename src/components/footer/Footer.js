import React from 'react'
import fondoFooter from "../../assets/img/portal-morty-smith-rick.png"
import logo from "../..//assets/img/suazo.png"
import "../footer/footer.css"
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="fondo-footer">
                <img className="fondo-footer-img"src={fondoFooter} alt="fondo-footer" />
            </div>

            <div className="logo-footer">
                <img className="logo-footer-img" src={logo} alt="logo-footer" />
            </div>
        </footer>
    )
}
