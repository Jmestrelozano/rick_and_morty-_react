import React from 'react'

export const CardBody = ({personaje}) => {
    return (
        <>
              <p className="gender">
          {personaje.status} - {personaje.species}
        </p>
        <h4 className="titulo">{personaje.name}</h4>

        <p className="titulo-contenido">first seen in</p>
        <p className="descripcion truncar-texto">{personaje.origin.name}</p>

        <p className="titulo-contenido">last know location</p>
        <p className="descripcion truncar-texto">{personaje.location.name}</p>
        </>
    )
}
