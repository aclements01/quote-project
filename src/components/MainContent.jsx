import { useState } from 'react'
import Quote from './Quote.jsx'

const MainContent = ({ quotes }) => {
  const [index, setIndex] = useState(0)

  const nextQuote = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length)
  }

  return (
    <div className="main">
      <img src={quotes[index].image} alt="Book Cover" className="book-cover" />
      <Quote
        key={quotes[index].id}
        text={quotes[index].quote}
        author={quotes[index].author}
        source={quotes[index].source}
        year={quotes[index].year}
      />
      <button className="next-quote" onClick={nextQuote}>
        Next Quote
      </button>
    </div>
  )
}

export default MainContent
