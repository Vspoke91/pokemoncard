import { useState } from 'react'
import './Card.css'

const POKEMON_CARD_URL = 'https://pokeapi.co/api/v2/pokemon'

// getPokemon('bulbasaur')
function Card () {
  const [pokeImgURL, setPokeImgURL] = useState('')
  const [pokeType, setPokeType] = useState('')
  const [pokeAbilities, setPokeAbilities] = useState([])
  const [pokeMoves, setPokeMoves] = useState([])
  const [pokeStats, setPokeStats] = useState([])

  function getNewCard () {
    const pokemon = 'clefairy' // TODO: change this to a random id
    getPokemonImage(pokemon, setPokeImgURL)
    getPokemonType(pokemon, setPokeType)// TODO: type is an erray make it so it displays an erra in DOM
    getPokemonAbilities(pokemon, setPokeAbilities)
    getPokemonMoves(pokemon, setPokeMoves)
    getPokemonStats(pokemon, setPokeStats)
  }
  // {
  return (
    <div className='Card'>
      <p className='Pokemon_Name'>Pokemon Name</p>
      <p className='Pokemon_Type'>Type {pokeType}</p>
      <img src={pokeImgURL} height='100px' width='100px' />
      <div className='Pokemon_Abilities'>
        Abilities
        {
          pokeAbilities.length &&
          pokeAbilities.map((ability, index) =>
            <p key={index}>{ability.ability.name}</p>
          )
        }
      </div>
      <div className='Pokemon_Moves'>
        Moves
        {
          pokeMoves.length &&
          pokeMoves.slice(0, 5).map((move, index) =>
            <p key={index}>{move.move.name}</p>
          )
        }
      </div>
      <div className='Pokemon_Stats'>
        {
          pokeStats.length &&
          pokeStats.map((stat, index) =>
            <p key={index}>{stat.stat.name} - {stat.base_stat}</p>
          )
        }
      </div>
      <button onClick={() => getNewCard()}>Get New Card</button>
    </div>
  )
}

function getPokemonImage (pokemonName, setState) {
  fetch(`${POKEMON_CARD_URL}/${pokemonName}`)
    .then((res) => res.json())
    .then((json) => setState(json.sprites.other.dream_world.front_default))
}

function getPokemonType (pokemonName, setState) {
  fetch(`${POKEMON_CARD_URL}/${pokemonName}`)
    .then((res) => res.json())
    .then((json) => setState(json.types[0].type.name))
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
export default Card
