import './portfolio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import placeholder from './placeholder.png'
import notetaker from './notetaker.jpg'
import petopia from './petopia.png'
import kitchen from './kitchen.png'
import skyInvaders from './skyInvaders.jpg'
import discomania from './discomania.jpg'
import eat from './eat.png'

function Portfolio() {

  return (
    <div>
      <br></br><h1>My Portfolio</h1><br></br>
      <section>
      <Container className="background">
          <Row>
          <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="eat" src={eat} />
                  <Card.Body>
                    <Card.Title>What to Eat</Card.Title>
                    <Card.Text>
                      Collaborative project using a recipe API, local storage, and Bulma for responsive styling. 
                    </Card.Text>
                    <Button href="https://hayessea000.github.io/what-to-eat/" target="_blank" variant="dark">Deployed App</Button>
                    <Button href="https://github.com/hayessea000/what-to-eat" target="_blank" variant="dark">GitHub Repo</Button>
                  </Card.Body>
                </Card>
            </Col>
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="notetaker" src={notetaker} />
                  <Card.Body>
                    <Card.Title>Note Taker</Card.Title>
                    <Card.Text>
                      This application uses Express on the back end and saves and retrieves notes from a JSON file.
                    </Card.Text>
                    <Button href="https://marlenas-note-taker.herokuapp.com/" target="_blank" variant="dark">Deployed App</Button>
                    <Button href="https://github.com/annamarlena/note-taker" target="_blank" variant="dark">GitHub Repo</Button>
                  </Card.Body>
                </Card>
            </Col>
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="petopia" src={petopia} />
                  <Card.Body>
                    <Card.Title>Petopia</Card.Title>
                    <Card.Text>
                      Collaborative project using Express, MySQL, and Sequelize, with an MVC file structure.
                    </Card.Text>
                    <Button href="https://petopia.herokuapp.com/" target="_blank" variant="dark">Deployed App</Button>
                    <Button href="https://github.com/annamarlena/petopia" target="_blank" variant="dark">GitHub Repo</Button>
                  </Card.Body>
                </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="skyInvaders" src={skyInvaders} />
                  <Card.Body>
                    <Card.Title>Sky Invaders</Card.Title>
                      <Card.Text>
                        A simple JavaScript/Tumult Hype game. This is a bird-themed version of Space Invaders.
                     </Card.Text>
                    <Button href="https://annamarlena.github.io/SpaceInvaders/" target="_blank" variant="dark">GitHub Pages</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" class="discomania" src={discomania} />
                  <Card.Body>
                    <Card.Title>Disco Mania</Card.Title>
                    <Card.Text>
                    JavaScript/Tumult Hype disco-themed slot machine game. Loads slowly but worth the wait!
                    </Card.Text>
                    <Button href="https://annamarlena.github.io/DiscoMania/" target="_blank" variant="dark">GitHub Pages</Button>
                  </Card.Body>
                </Card>
            </Col>
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="kitchen" src={kitchen} />
                  <Card.Body>
                    <Card.Title>H & H Contractors</Card.Title>
                    <Card.Text>
                      A bilingual website I built for a Canadian client a few years ago using a template from HTML5UP.
                    </Card.Text>
                    <Button href="https://www.contracteurshh.ca/indexEng.html" target="_blank" variant="dark">Live Site</Button>
                  </Card.Body>
                </Card>
            </Col>
          </Row>

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
                    <Button variant="dark">Deployed App</Button>
                    <Button variant="dark">GitHub Repo</Button>
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
                    <Button variant="dark">Deployed App</Button>
                    <Button variant="dark">GitHub Repo</Button>
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
                    <Button variant="dark">Deployed App</Button>
                    <Button variant="dark">GitHub Repo</Button>
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