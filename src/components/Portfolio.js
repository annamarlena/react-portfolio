import './portfolio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import placeholder from './placeholder.png'


function Portfolio() {

  return (
    <div>
      <br></br><h2>My Portfolio</h2><br></br>
      <section className="addPadding">
      <Container className="background">
          <Row>
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={placeholder} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
            </Col>
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={placeholder} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
            </Col>
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={placeholder} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
            </Col>
          </Row><br></br>

          <Row>
          <Col lg={true}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="dark">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={placeholder} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
            </Col>
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={placeholder} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
        </section>
    </div>
  )
}

export default Portfolio