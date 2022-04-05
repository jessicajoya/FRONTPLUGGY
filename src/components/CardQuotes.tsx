import { Quote } from "../interfaces/QuotesInterface";


interface PropsQuotes{
  quotes: Quote[] ;
}

export default function CardQuotes({quotes}:PropsQuotes) {
  return (
   <>
     {quotes.map((quote) => (
      <div>
        <h1>{quote.source}</h1>
      </div>
    ))}
   </>
  )
}
