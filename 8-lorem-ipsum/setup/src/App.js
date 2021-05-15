import React, { useState, useEffect } from 'react'
import data from './data'
function App() {
  const [textData, setTextData] = useState([])
  const [val, setVal] = useState(0)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(val)
    if (amount <= 0 || amount > data.length - 1) {
      setError(true)
      amount = 1
    }
    const filteredData = data.slice(0, amount)
    setTextData(filteredData)
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setError(false)
    }, 3000)
    return () => clearInterval(slider)
  }, [error])

  return (
    <section className='section-center'>
      {error && (
        <header style={{ border: '1px solid red' }}>
          Seems incorrect number of paragraphs or more than 8.
        </header>
      )}
      <form onSubmit={handleSubmit} className='lorem-form'>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {textData.length !== 0 ? (
          <span>
            {textData.map((text, index) => {
              return (
                <div className='result' key={index}>
                  <p>{text}</p>
                </div>
              )
            })}
          </span>
        ) : null}
      </article>
    </section>
  )
}

export default App
