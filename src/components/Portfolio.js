import './portfolio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import notetaker from './assets/notetaker.jpg'
import petopia from './assets/petopia.png'
import kitchen from './assets/kitchen.png'
import skyInvaders from './assets/skyInvaders.jpg'
import discomania from './assets/discomania.jpg'
import eat from './assets/eat.png'
import eCommerce from './assets/eCommerce.png'
import tracker from './assets/tracker.png'
import socialGarden from './assets/socialGarden.png'
// import insomnia from './assets/insomnia.png'

function Portfolio() {

  return (
    <div>
      <br></br><h1>My Portfolio</h1><br></br>
      <section>
       <Container className="background">
        <h2>Projects I've Collaborated On</h2><br></br>
        <Row>
          <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="socialGarden" src={socialGarden} />
                  <Card.Body>
                   <Card.Title>Social Garden</Card.Title>
                    <Card.Text>
                      Collaborative project. Full stack MERN application using React and MongoDB. Design is mine.
                    </Card.Text>
                    <Button href="https://social-garden.herokuapp.com/login" target="_blank" variant="dark">Live Site</Button>
                    <Button href="https://github.com/buster35/social-garden" target="_blank" variant="dark">GitHub Repo</Button>
                </Card.Body>
              </Card>
          </Col>
          <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="eat" src={eat} />
                  <Card.Body>
                    <Card.Title>What to Eat</Card.Title>
                    <Card.Text>
                      Collaborative project. Uses a recipe API, plus Bulma for responsive styling. Design is mine.
                    </Card.Text>
                    <Button href="https://hayessea000.github.io/what-to-eat/" target="_blank" variant="dark">Live Site</Button>
                    <Button href="https://github.com/hayessea000/what-to-eat" target="_blank" variant="dark">GitHub Repo</Button>
                  </Card.Body>
                </Card>
            </Col>
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="petopia" src={petopia} />
                  <Card.Body>
                    <Card.Title>Petopia</Card.Title>
                    <Card.Text>
                      Collaboration. Uses Express, MySQL, & Sequelize, with an MVC file structure. Work in progress.
                    </Card.Text>
                    <Button href="https://petopia.herokuapp.com/" target="_blank" variant="dark">Live site</Button>
                    <Button href="https://github.com/annamarlena/petopia" target="_blank" variant="dark">GitHub Repo</Button>
                  </Card.Body>
                </Card>
            </Col>
          </Row>
          <br></br><h2>Back End/Database Projects</h2><br></br>
          <Row>
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="eCommerce" src={eCommerce} />
                  <Card.Body>
                    <Card.Title>E-Commerce Backend</Card.Title>
                    <Card.Text>
                      Uses a working Express API to use Sequelize & interact with a MySQL database.
                    </Card.Text>
                    <Button href="https://drive.google.com/file/d/1dOGxgQvmgPRIj91eN3BvF9RdHSbKuVrt/view" target="_blank" variant="dark">Demo Video</Button> 
                    <Button href="https://github.com/annamarlena/e-commerce-back-end" target="_blank" variant="dark">GitHub Repo</Button>
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
                    <Button href="https://marlenas-note-taker.herokuapp.com/" target="_blank" variant="dark">Live Site</Button>
                    <Button href="https://github.com/annamarlena/note-taker" target="_blank" variant="dark">GitHub Repo</Button>
                  </Card.Body>
                </Card>
            </Col>
            {/* <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="insomnia" src={insomnia} />
                  <Card.Body>
                    <Card.Title>Social Network API</Card.Title>
                    <Card.Text>
                      Backend of a social network using MongoDB. Users share thoughts, comment, & react.
                    </Card.Text>
                    {/* <Button href="" target="_blank" variant="dark">Demo Video</Button>  to be added later */}
                    {/* <Button href="https://github.com/annamarlena/social-network-api" target="_blank" variant="dark">GitHub Repo</Button>
                  </Card.Body>
                </Card>
            </Col> */} 
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="tracker" src={tracker} />
                  <Card.Body>
                    <Card.Title>Employee Tracker</Card.Title>
                    <Card.Text>
                      Command-line app using Node.js, Inquirer, and MySQL to track/add/change a database.
                    </Card.Text>
                    <Button href="https://drive.google.com/file/d/1--e8EtRQme6PbJlvvslS4Tzusc5utrij/view" target="_blank" variant="dark">Demo Video</Button>
                    <Button href="https://github.com/annamarlena/employee-tracker" target="_blank" variant="dark">GitHub Repo</Button>
                  </Card.Body>
                </Card>
            </Col>
          </Row>
          <br></br><h2>Front End Projects/My Design</h2><br></br>
          <Row>
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="skyInvaders" src={skyInvaders} />
                  <Card.Body>
                    <Card.Title>Sky Invaders</Card.Title>
                      <Card.Text>
                        A simple JavaScript/Tumult Hype game. This is a bird-themed version of Space Invaders.
                     </Card.Text>
                    <Button href="https://annamarlena.github.io/SpaceInvaders/" target="_blank" variant="dark">Play Game!</Button>
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
                    <Button href="https://annamarlena.github.io/DiscoMania/" target="_blank" variant="dark">Play Game!</Button>
                  </Card.Body>
                </Card>
            </Col>
            <Col lg={true}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="kitchen" src={kitchen} />
                  <Card.Body>
                    <Card.Title>H & H Contractors</Card.Title>
                    <Card.Text>
                      A bilingual website I built for a Canadian client using a template from HTML5UP.
                    </Card.Text>
                    <Button href="https://www.contracteurshh.ca/indexEng.html" target="_blank" variant="dark">Visit Website</Button>
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