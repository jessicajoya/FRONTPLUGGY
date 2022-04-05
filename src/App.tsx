import { useState } from 'react';
import { getAllJSDocTagsOfKind } from 'typescript';
import './App.css';
import CardQuotes from './components/CardQuotes';
import { Quote } from './interfaces/QuotesInterface';
import { Card } from 'react-bootstrap';
import { Row} from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';




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
      <Row xs={1} md={3} className="g-3">
  {Array.from({ length: 3 }).map((_, idx) => (
    <Col>
      <Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
  ))}
</Row>
    </div>  
   
  );
}

