import { useState } from 'react';
import { getAllJSDocTagsOfKind } from 'typescript';
import './App.css';
import CardQuotes from './components/CardQuotes';
import { Quote } from './interfaces/QuotesInterface';


interface AppProps {
  title: string
}



export function App({title}:AppProps) {

const [quotes, setquotes] = useState<Quote[]>([
  {
    buy_price: 140.3,
    sell_price: 144,
    source: "https://www.ambito.com/contenidos/dolar.html"
  }
])
  
  return (
    <div className='boots'>
      <h1>{title}</h1>

      <main className='container p-5'>
        <CardQuotes quotes={quotes}/>
      </main>
     
 
    </div>  
   
  );
}

