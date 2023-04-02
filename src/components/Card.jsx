import { useState } from 'react'
import './Card.css'

const POKEMON_CARD_URL = 'https://pokeapi.co/api/v2/pokemon'

// getPokemon('bulbasaur')
function Card () {
  const [imageURL, setImageURL] = useState('')

  return (
    <div className='Card'>
      <p className='Pokemon_Name'>Pokemon Name</p>
      <p className='Pokemon_Type'>Type</p>
      <img src={imageURL} />
      <div className='Pokemon_Abilities'>Abilities</div>
      <div className='Pokemon_Moves'>Moves</div>
      <div className='Pokemon_Stats'>
        <p className='Stat_HP'>hp</p>
        <p className='Stat_Attack'>attack</p>
        <p className='Stat_Defence'>defence</p>
        <p className='Stat_Specia-Attack'>special-attack</p>
        <p className='Stat_Special-defence'>special-defense</p>
        <p className='Stat_Speed'>speed</p>
      </div>
      <button onClick={() => getPokemonImage('clefairy', setImageURL)}>Get New Card</button>
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
