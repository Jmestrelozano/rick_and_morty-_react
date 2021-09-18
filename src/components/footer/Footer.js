import React from 'react'

import "../footer/footer.css"
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="fondo-footer">
                <img className="fondo-footer-img"src={process.env.PUBLIC_URL+'/assets/img/suazo.png'} alt="fondo-footer" />
            </div>

            <div className="logo-footer">
                <img className="logo-footer-img" src={process.env.PUBLIC_URL+'/assets/img/portal-morty-smith-rick.png'} alt="logo-footer" />
            </div>
        </footer>
    )
}
