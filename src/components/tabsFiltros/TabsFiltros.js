import React from 'react'
import "../tabsFiltros/tabs.css"
export const TabsFiltros = ({selectFilter}) => {
    return (
        <div className="tabs-filtro">
            <ul onClick={selectFilter} className="tabs-listado">
                <li>All</li>
                <li>Unknown</li>
                <li>Female</li>
                <li>Male</li>
                <li>Genderless</li>
            </ul>
        </div>
    )
}
