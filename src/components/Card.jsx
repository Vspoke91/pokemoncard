import { useEffect, useState } from 'react'
import './Card.css'

const POKEMON_CARD_URL = 'https://pokeapi.co/api/v2/pokemon'

// getPokemon('bulbasaur')
function Card () {
  const [imageURL, setImageURL] = useState('')

  useEffect(() => {
  }, [])

  return (
    <div className=''>
      <button onClick={() => getPokemonImage('bulbasaur', setImageURL)}>Test</button>
      <img src={imageURL} />
    </div>
  )
}

function getPokemonImage (pokemonName, setState) {
  fetch(`${POKEMON_CARD_URL}/${pokemonName}`)
    .then((res) => res.json())
    .then((json) => json.sprites)
    .then((sprites) => sprites.other)
    .then((other) => other.dream_world)
    .then((dreamWorld) => {
      setState(dreamWorld.front_default)
    })
}
export default Card
