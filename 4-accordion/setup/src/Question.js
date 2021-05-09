import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ id, title, info }) => {
  const [toggleOpen, setToggleOpen] = useState(false)
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn'>
          {toggleOpen ? (
            <AiOutlineMinus onClick={() => setToggleOpen(!toggleOpen)} />
          ) : (
            <AiOutlinePlus onClick={() => setToggleOpen(!toggleOpen)} />
          )}
        </button>
      </header>
      {toggleOpen && <p>{info}</p>}
    </article>
  )
}

export default Question
