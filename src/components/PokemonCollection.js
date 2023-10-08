import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({displayedPokemon}) {

  const pokemonIndex = displayedPokemon.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonIndex}
    </Card.Group>
  );
}

export default PokemonCollection;
