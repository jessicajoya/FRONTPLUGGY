import { Quote } from "../interfaces/QuotesInterface";
import { FlippingCard } from 'react-ui-cards';


interface PropsQuotes{
  quotes: Quote[] ;
}

export default function CardQuotes({quotes}:PropsQuotes) {
  return (
   <>
     {quotes.map((quote) => (

<h1></h1>

    ))}
   </>
  )
}
