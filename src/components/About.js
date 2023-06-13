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
          <Col sm={12} md={6}>
             <Image className="profilePic" src={profilePic} alt="Professional photo of me" />
          </Col>
          <Col>

            <section className="section1">
              <h4>Hi, I'm Marlena!</h4><br></br>
              <p>I'm a junior React developer with a strong technical background and leadership skills.</p>
              <p>I have a knack for analyzing and troubleshooting technical issues. I've honed my administrative and organizational skills, allowing me to manage multiple projects simultaneously with tight deadlines.</p>
              <p>Besides my technical expertise, I bring strong interpersonal and communication skills to the table.</p>
              <p>I value collaboration and enjoy working with cross-functional teams.</p>
 
            </section>
          </Col>
        </Row>
          <section className="section2">
            <h3>Education and Skills</h3>
            <p>University of Minnesota Full Stack Coding Bootcamp | June 12, 2023
            <br></br>Associate's in Computer Programming, Saint Paul College, Saint Paul, MN | May 2017</p>
            <p>Skills and technologies include: Front and back end development, responsive design, RESTful APIs, Document Object Model, JavaScript, HTML, CSS, jQuery, MERN Stack (MongoDB, Express.js, React.js, Node.js), JavaScript Object Notation (JSON), MySQL, Mongoose, Bootstrap, React Bootstrap, Bulma, Progressive Web Apps (PWA), Local Storage, Session Storage, User Authentication, Continuous Integration (CI), Model-View-Controller (MVC), Application Programming Interfaces (API), Asynchronous JavaScript and XML (AJAX), HTTP Request Methods, Agile, Heroku, Git, GitHub, Scripts, and last but not least: GIMP for photo/image editing.</p>
          </section>
        <Row>
          
        </Row>
      </Container>

    </div>
  )
}

export default About