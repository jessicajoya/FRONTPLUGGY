import { Quote } from "../interfaces/QuotesInterface";
import { Card } from 'react-bootstrap';
import { Row} from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';



interface PropsQuotes{
  quotes: Quote[] ;
}

export default function CardQuotes({quotes}:PropsQuotes) {
  return (
   <>
      <CardGroup>
      {quotes.map((quote) => (
          <Row xs={1} md={1} className="card mb-5" >
            <Col>
              <Card className="card p-5">
               <Card.Header as="h5">Informacion obtenida de:</Card.Header>
                <Card.Header as="h5">{quote.source}</Card.Header>
                <Card.Body>
                  <Card.Title>buy price {quote.buy_price}</Card.Title>
                  <Card.Title>Sell price {quote.sell_price}</Card.Title>
                  <Card.Text>
                  Estos valores se encuentran actualizados.
                  </Card.Text>
                  <Button variant="primary">Ir a la fuente</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </CardGroup>   
   </>
  )
}

