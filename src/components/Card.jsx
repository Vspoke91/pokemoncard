import { useEffect, useState } from 'react'
import './Card.css'

// getPokemon('bulbasaur')
function Card () {
  const [imageURL, setImageURL] = useState('')

  useEffect(() => {
  }, [])

  return (
    <div className=''>

      <img src={imageURL} />
    </div>
  )
}

export default Card
