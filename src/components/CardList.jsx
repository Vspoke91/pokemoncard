import './CardList.css'

function CardList ({ savedCards, getNewCard }) {
  return (
    <div className='CardList'>

      <h1 className='CardList_Tittle'>Saved Cards</h1>

      <ul>

        {savedCards.length > 0 &&
            savedCards.map((card, index) =>
              <li onClick={() => getNewCard(card.id)} key={index}>

                <img src={card.imgURL} />

                <div className='Tittle'>
                  <h1>{card.name}</h1>

                  <div className='Types'>
                    {card.types.map((type, index) =>
                      <p key={index}>{type.type.name}</p>
                    )}
                  </div>
                </div>

              </li>
            )}
      </ul>
    </div>
  )
}

export default CardList
