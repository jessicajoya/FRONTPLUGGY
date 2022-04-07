
import './App.css';
import CardQuotes from './components/CardQuotes';
import React from 'react';

interface AppProps {
  title: string
}

export function App({ title }: AppProps) {
  const [quotes, setQuotes] = React.useState([])

  React.useEffect(() => {
    getValues()
  }, [])

  const getValues = async () => {
    const data = await fetch('/quotes')
    const DataQuotes = await data.json()
    setQuotes(DataQuotes)

  }


  return (
    <div >
      <div className="bg-dark text-white" >
        <h1>{title}</h1>
      </div>
      <main>
        <CardQuotes quotes={quotes} />
      </main>
    </div>

  );
}

