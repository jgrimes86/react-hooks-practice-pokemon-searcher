import React from "react";

function Search({pokemonFilter, handlePokemonFilter}) {

  function handleChange(event) {
    handlePokemonFilter(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={pokemonFilter} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
