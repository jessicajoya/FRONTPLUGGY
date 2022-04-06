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
          <Row xs={1} md={1} className="card mb-5">
            <Col>
              <Card >
                <Card.Header as="h5">{quote.source}</Card.Header>
                <Card.Body>
                  <Card.Title>{quote.sell_price} {quote.buy_price}</Card.Title>
                  <Card.Title>Sell price {quote.sell_price}</Card.Title>
                  <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </CardGroup>   
   </>
  )
}

