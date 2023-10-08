import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemonFilter, setPokemonFilter] = useState("");

  const pokemonAPI = "http://localhost:3001/pokemon"

  useEffect(fetchPokemon, [])

  function fetchPokemon() {
    fetch(pokemonAPI)
    .then(response => response.json())
    .then(data => {setAllPokemon(data)})
  }

  function handlePokemonFilter(searchValue) {
    setPokemonFilter(searchValue)
  }

  const searchedPokemon = allPokemon.filter((pokemon) => {
    if (pokemon.name.includes(pokemonFilter.toLowerCase())) {
      return true
    }
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search pokemonFilter={pokemonFilter} handlePokemonFilter={handlePokemonFilter} />
      <br />
      <PokemonCollection displayedPokemon={searchedPokemon} />
    </Container>
  );
}

export default PokemonPage;
