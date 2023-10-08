import React, {useState} from "react";

function Search({pokemonFilter, handlePokemonFilter}) {
  // const [pokemonFilter, setPokemonFilter] = useState("");

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
