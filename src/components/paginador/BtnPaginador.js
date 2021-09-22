import React from 'react'
import  "../paginador/btnPaginador.css"
export const BtnPaginador = ({previous,next}) => {
    return (
        <div className="paginador-main">
        <button className="paginador-boton" onClick={previous}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="paginador-boton" onClick={next}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

    )
}
