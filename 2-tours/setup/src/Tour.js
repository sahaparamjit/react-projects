import React, { useState } from 'react'

const Tour = ({ id, name, info, price, image, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  const handleInterest = () => {}
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200).trim()}...`}
          <button
            href='javascript: void(0)'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
