import React from "react";
import "../buscadorFiltro/buscador.css"
export const BuscadorFiltro = ({ inputValue, search, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input
          onChange={inputValue}
          name="search"
          value={search}
          type="text"
          className="form-control input-buscador"
          placeholder="Search"
        />
      </div>
    </form>
  );
};
