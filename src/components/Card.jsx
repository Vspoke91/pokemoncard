import { useState } from 'react'
import './Card.css'

const POKEMON_CARD_URL = 'https://pokeapi.co/api/v2/pokemon'

// getPokemon('bulbasaur')
function Card () {
  const [imageURL, setImageURL] = useState('')

  return (
    <div className='Card'>
      <p>Pokemon Name</p>

      <button onClick={() => getPokemonImage('clefairy', setImageURL)}>Get New Card</button>
      <img src={imageURL} />
    </div>
  )
}

function getPokemonImage (pokemonName, setImageURL) {
  fetch(`${POKEMON_CARD_URL}/${pokemonName}`)
    .then((res) => res.json())
    .then((json) => json.sprites)
    .then((sprites) => sprites.other)
    .then((other) => other.dream_world)
    .then((dreamWorld) => {
      setImageURL(dreamWorld.front_default)
    })
}
export default Card
