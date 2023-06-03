import './about.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilePic from './profilePic.jpg'


function About() {

  return (
    <div>
      <br></br><h2>About Me</h2>
      <Container>
        <Row>
          <Col lg={true}>
            <section>
             <img className="profilePic" src={profilePic} alt="Professional photo of me" />
            </section>
          </Col>
          <Col lg={true}>

            <section className="section1">
              <h3>Some Info</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias esse architecto pariatur velit consequatur eaque est quos, saepe maxime optio sapiente ea. At unde quod iusto dignissimos sunt perferendis id, provident voluptatem mollitia deserunt ipsam voluptates nisi dolorum cupiditate maxime.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias esse architecto pariatur velit consequatur eaque est quos, saepe maxime optio sapiente ea. At unde quod iusto dignissimos sunt perferendis id, provident voluptatem mollitia deserunt ipsam voluptates nisi dolorum cupiditate maxime.</p>
            </section>
          </Col>
        </Row>
          <section className="section2">
            <h3>Some More Info</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias esse architecto pariatur velit consequatur eaque est quos, saepe maxime optio sapiente ea. At unde quod iusto dignissimos sunt perferendis id, provident voluptatem mollitia deserunt ipsam voluptates nisi dolorum cupiditate maxime.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias esse architecto pariatur velit consequatur eaque est quos, saepe maxime optio sapiente ea. At unde quod iusto dignissimos sunt perferendis id, provident voluptatem mollitia deserunt ipsam voluptates nisi dolorum cupiditate maxime.</p>
          </section>
        <Row>
          
        </Row>
      </Container>

    </div>
  )
}

export default About