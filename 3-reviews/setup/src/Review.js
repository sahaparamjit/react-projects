import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const handleChevronButton = (dir) => {
    if (dir === 1 && index !== people.length - 1) {
      setIndex((prevIndex) => {
        return prevIndex + 1
      })
    } else if (dir === -1 && index !== 0) {
      setIndex((prevIndex) => {
        return prevIndex - 1
      })
    }
  }
  const randomPerson = () => {
    const randomInt = Math.floor(Math.random() * (4 - 0) + 0)
    if (randomInt !== index) {
      setIndex((prevIndex) => {
        return randomInt
      })
      return
    }
    randomPerson()
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={() => handleChevronButton(-1)}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => handleChevronButton(1)}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
}

export default Review
