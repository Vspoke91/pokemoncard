import { useState } from 'react'
import './Card.css'

const POKEMON_CARD_URL = 'https://pokeapi.co/api/v2/pokemon'

// getPokemon('bulbasaur')
function Card () {
  const [pokeImgURL, setPokeImgURL] = useState('')
  const [pokeTypes, setPokeTypes] = useState([])
  const [pokeAbilities, setPokeAbilities] = useState([])
  const [pokeMoves, setPokeMoves] = useState([])
  const [pokeStats, setPokeStats] = useState([])
  const [pokeName, setPokeName] = useState('Name')

  function getNewCard () {
    const pokemon = Math.floor(Math.random() * 649) + 1
    getPokemonImage(pokemon, setPokeImgURL)
    getPokemonTypes(pokemon, setPokeTypes)
    getPokemonAbilities(pokemon, setPokeAbilities)
    getPokemonMoves(pokemon, setPokeMoves)
    getPokemonStats(pokemon, setPokeStats)
    getPokemonName(pokemon, setPokeName)
  }
  // {
  return (
    <div className='Card'>
      <p className='Pokemon_Name'>{pokeName}</p>
      <div className='Pokemon_Type'>
        <h1>Type</h1>
        {
          pokeTypes.length &&
          pokeTypes.map((type, index) =>
            <p key={index}>{type.type.name}</p>
          )
        }
      </div>
      <img className='Pokemon_Img' src={pokeImgURL} />
      <div className='Pokemon_Abilities'>
        <h1>Abilitites</h1>
        {
          pokeAbilities.length &&
          pokeAbilities.map((ability, index) =>
            <p key={index}>{ability.ability.name}</p>
          )
        }
      </div>
      <div className='Pokemon_Moves'>
        <h1>Moves</h1>
        {
          pokeMoves.length &&
          pokeMoves.slice(0, 5).map((move, index) =>
            <p key={index}>{move.move.name}</p>
          )
        }
      </div>
      <div className='Pokemon_Stats'>
        <h1>Stats</h1>
        {
          pokeStats.length &&
          pokeStats.map((stat, index) =>
            <p key={index}>{stat.stat.name} - {stat.base_stat}</p>
          )
        }
      </div>
      <button className='Get_Pokemon_Button' onClick={() => getNewCard()}>Get Next Card</button>
    </div>
  )
}

function getPokemonImage (pokemonName, setState) {
  fetch(`${POKEMON_CARD_URL}/${pokemonName}`)
    .then((res) => res.json())
    .then((json) => setState(json.sprites.other.dream_world.front_default))
}

function getPokemonTypes (pokemonName, setState) {
  fetch(`${POKEMON_CARD_URL}/${pokemonName}`)
    .then((res) => res.json())
    .then((json) => setState(json.types))
}

function getPokemonAbilities (pokemonName, setState) {
  fetch(`${POKEMON_CARD_URL}/${pokemonName}`)
    .then((res) => res.json())
    .then((json) => setState(json.abilities))
}
function getPokemonMoves (pokemonName, setState) {
  fetch(`${POKEMON_CARD_URL}/${pokemonName}`)
    .then((res) => res.json())
    .then((json) => setState(json.moves))
}
function getPokemonStats (pokemonName, setState) {
  fetch(`${POKEMON_CARD_URL}/${pokemonName}`)
    .then((res) => res.json())
    .then((json) => setState(json.stats))
}
function getPokemonName (pokemonName, setState) {
  fetch(`${POKEMON_CARD_URL}/${pokemonName}`)
    .then((res) => res.json())
    .then((json) => setState(json.name))
}

export default Card
