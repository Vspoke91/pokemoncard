import './Card.css'

// getPokemon('bulbasaur')
function Card ({ pokeName, pokeTypes, pokeImgURL, pokeAbilities, pokeStats, pokeMoves }) {
  return (
    <div className='Card'>
      <div className='Main_Card'>
        <h1 className='Pokemon_Name'>{pokeName}</h1>

        <div className='Pokemon_Type'>
          <h1>Type:</h1>
          <ul>
            {pokeTypes.length &&
              pokeTypes.map((type, index) =>
                <li key={index}>{type.type.name}</li>
              )}
          </ul>
        </div>

        <img className='Pokemon_Img' src={pokeImgURL} />

        <div className='Pokemon_Abilities'>
          <h1>Abilitites:</h1>
          <ul>
            {pokeAbilities.length &&
              pokeAbilities.map((ability, index) =>
                <li key={index}>{ability.ability.name}</li>
              )}
          </ul>
        </div>

        <div className='Pokemon_Stats'>
          <h1>Stats</h1>
          <ul>
            {pokeStats.length &&
              pokeStats.map((stat, index) =>
                <li key={index}><p className='stat_name'>{stat.stat.name}</p><p className='stat_number'>{stat.base_stat}</p></li>
              )}
          </ul>
        </div>
      </div>

      <div className='Pokemon_Moves'>
        <h1>Moves</h1>
        <ul>
          {pokeMoves.length &&
            pokeMoves.map((move, index) =>
              <li key={index}>{move.move.name}</li>
            )}
        </ul>
      </div>
    </div>
  )
}
export default Card
