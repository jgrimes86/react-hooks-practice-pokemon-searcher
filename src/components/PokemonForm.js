import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleHpChange(event) {
    setHp(event.target.value)
  }

  function handleFrontChange(event) {
    setFront(event.target.value)
  }

  function handleBackChange(event) {
    setBack(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: front,
        back: back
      },
    }
    addPokemon(newPokemon);
    setName("");
    setHp("");
    setFront("");
    setBack("")
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={handleNameChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={handleHpChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
            onChange={handleFrontChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
            onChange={handleBackChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
