import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([])

  const pokemonAPI = "http://localhost:3001/pokemon"

  useEffect(fetchPokemon, [])

  function fetchPokemon() {
    fetch(pokemonAPI)
    .then(response => response.json())
    .then(data => setAllPokemon(data))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection allPokemon={allPokemon} />
    </Container>
  );
}

export default PokemonPage;
