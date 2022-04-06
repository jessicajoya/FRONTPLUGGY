import { useState } from 'react';
import './App.css';

import { Quote } from './interfaces/QuotesInterface';

import CardQuotes from './components/CardQuotes';




interface AppProps {
  title: string
}



export function App({title}:AppProps) {

const [quotes, setquotes] = useState<Quote[]>([
  {
    buy_price: 140.3,
    sell_price: 144,
    source: "https://www.ambito.com/contenidos/dolar.html"
  },
  {
    buy_price: 111.3,
    sell_price: 224,
    source: "https://aaaaaaa/dolar.html"
  },
  {
    buy_price: 3,
    sell_price: 3,
    source: "https:/3/dolar.html"
  },
  
])

console.log('*******************'+quotes.length)
  
  return (
    <div className='boots'>
      <h1>{title}</h1>
      <main>
        <CardQuotes quotes={quotes}/>
      </main>
    </div>  
   
  );
}

