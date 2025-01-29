const Quote = (props) => {
  return (
    <li className="quote" id={props.id}>
      <div className="quote-info">
        <h3>{props.text}</h3>
        <h4>Author: {props.author}</h4>
        <h5>Source: {props.source}</h5>
        <h6>Year Published: {props.year}</h6>
      </div>
    </li>
  )
}

export default Quote
