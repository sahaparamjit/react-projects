import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [people] = useState(data)
  const [index, setIndex] = useState(1)

  const handleNavigation = (direction) => {
    setIndex((prevIndex) => {
      if (prevIndex === 0 && direction === -1) return people.length - 1
      if (prevIndex === people.length - 1 && direction === 1) return 0
      return prevIndex + direction
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      handleNavigation(1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person
          let position = 'nextSlide'
          if (personIndex === index) position = 'activeSlide'
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={() => handleNavigation(-1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => handleNavigation(1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
