import './about.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilePic from './profilePic.jpg'


function About() {

  return (
    <div>
      <br></br><h1>About Me</h1>
      <Container>
        <Row>
          <Col lg={true}>
            {/* <section> */}
             <Image className="profilePic" src={profilePic} alt="Professional photo of me" />
            {/* </section> */}
          </Col>
          <Col lg={true}>

            <section className="section1">
              <h4>Hi, I'm Marlena!</h4><br></br>
              <p>I'm a junior React developer and recent graduate of the University of Minnesota Full Stack Coding Bootcamp. I also have an associate's degree in Computer Programming from Saint Paul College in Saint Paul, MN.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias esse architecto pariatur velit consequatur eaque est quos, saepe maxime optio sapiente ea. At unde quod iusto dignissimos sunt perferendis id, provident voluptatem mollitia deserunt ipsam voluptates nisi dolorum cupiditate maxime.</p>
            </section>
          </Col>
        </Row>
          <section className="section2">
            <h3>Some More Info</h3>
            <p>Skills include: JavaScript, HTML, CSS, jQuery, React, Node, MySQL, MongoDB, Mongoose, Bootstrap, Bulma, Express, PWA, Responsive Design, Local Storage, Session Storage, User Authentication, MERN Stack, CI, MVC, API, Rest, JSON, AJAX, HTTP Request Methods, Agile, Heroku, Git, GitHub, Scripts, and GIMP for photo editing. I also have some past experience with Python and Java, but it's been years.</p>
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