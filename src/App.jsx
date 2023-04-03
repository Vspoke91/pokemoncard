import './App.css'
import { useState, useEffect } from 'react'
import Card from './components/Card'
import CardList from './components/CardList'

const POKEMON_CARD_URL = 'https://pokeapi.co/api/v2/pokemon'

function App () {
  const [currentPokemon, setCurrentPokemon] = useState(0)

  const [pokeImgURL, setPokeImgURL] = useState('')
  const [pokeTypes, setPokeTypes] = useState([])
  const [pokeAbilities, setPokeAbilities] = useState([])
  const [pokeMoves, setPokeMoves] = useState([])
  const [pokeStats, setPokeStats] = useState([])
  const [pokeName, setPokeName] = useState('Name')

  function getNewCard (pokemon) {
    setCurrentPokemon(pokemon)
    getPokemonImage(pokemon, setPokeImgURL)
    getPokemonTypes(pokemon, setPokeTypes)
    getPokemonAbilities(pokemon, setPokeAbilities)
    getPokemonMoves(pokemon, setPokeMoves)
    getPokemonStats(pokemon, setPokeStats)
    getPokemonName(pokemon, setPokeName)
  }

  const [savedCards, setSavedCards] = useState([])

  function saveCard () {
    if (!savedCards.some((card) => card.id === currentPokemon)) {
      setSavedCards([...savedCards,
        {
          id: currentPokemon,
          name: pokeName,
          types: pokeTypes,
          imgURL: pokeImgURL
        }])
    }
  }

  useEffect(() => getNewCard(getRandomID()), [])

  return (
    <div className='App'>
      <h1 className='App_Tittle'>Pokemon Card</h1>

      <Card
        pokeImgURL={pokeImgURL}
        pokeTypes={pokeTypes}
        pokeAbilities={pokeAbilities}
        pokeMoves={pokeMoves}
        pokeStats={pokeStats}
        pokeName={pokeName}
      />

      <div className='Nav_Buttons'>
        <button className='Save_Pokemon_Button' onClick={() => saveCard()}>Save Card</button>
        <button className='Get_Pokemon_Button' onClick={() => getNewCard(getRandomID())}>Get Next Card</button>
      </div>

      <CardList savedCards={savedCards} getNewCard={getNewCard} />
    </div>
  )
}

function getRandomID () {
  return Math.floor(Math.random() * 649) + 1
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

export default App
