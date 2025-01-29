import Quote from './Quote.jsx'

const MainContent = (props) => {
  return (
    <div className="main">
      <h1>Quotes</h1>
      {props.quotes.map((quote) => (
        <Quote
          key={quote.id}
          text={quote.quote} // Ensure this matches the dataset
          author={quote.author}
          source={quote.source}
          year={quote.year}
        />
      ))}
    </div>
  )
}

export default MainContent
