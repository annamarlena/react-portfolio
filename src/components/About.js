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
              <h3>Hi, I'm Marlena!</h3>
              <p>First and foremost, I bring valuable life experience and a mature perspective to my creative endeavors. My customer service background equips me with exceptional interpersonal skills, allowing me to understand user needs and create intuitive web experiences. My creative mindset gives me a fresh approach to problem-solving, enabling me to think outside the box and innovate in the ever-evolving field of web development. Moreover, my decision to embark on a career change demonstrates courage, adaptability, and a hunger for personal growth. My diverse background brings a rich tapestry of knowledge, ideas, and perspectives to my work, allowing me to create projects that resonate with a broader audience. </p>
            </section>
          </Col>
        </Row>
          <section className="section2">
            <h3>The Technical Stuff</h3>
              <p>I'm a junior React developer with a strong technical background, a creative eye, and proven leadership skills.</p>
              <p>I have a knack for analyzing and troubleshooting technical issues. I've honed my administrative and organizational skills, allowing me to manage multiple projects simultaneously with tight deadlines.</p>
              <p>Besides my technical expertise, I bring strong interpersonal and communication skills to the table. I value collaboration and enjoy working with cross-functional teams.</p>
              <p>I also build custom websites from scratch and have a talent for branding! If you're a small business owner or self-employed and looking to expand your online presence, please reach out to me via the contact section of this site. I'll be happy to connect with you to brainstorm ways to help your business stand out and grow!</p>
          </section>
          <section className="section3">
            <h3>Education and Skills</h3>
            <p>University of Minnesota Full Stack Coding Bootcamp | June 12, 2023
            <br></br>Associate's in Computer Programming, Saint Paul College, Saint Paul, MN | May 2017</p>
            <p>Skills and technologies include: Front and back end development, responsive design, RESTful APIs, Document Object Model, JavaScript, HTML, CSS, jQuery, MERN Stack (MongoDB, Express.js, React.js, Node.js), JavaScript Object Notation (JSON), MySQL, Mongoose, Bootstrap, React Bootstrap, Bulma, Progressive Web Apps (PWA), Local Storage, Session Storage, User Authentication, Continuous Integration (CI), Model-View-Controller (MVC), Application Programming Interfaces (API), Asynchronous JavaScript and XML (AJAX), HTTP Request Methods, Agile, Heroku, Git, GitHub, Scripts, Adobe Suite, and last but not least: GIMP for some open source advanced image editing.</p>
          </section>

      </Container>

    </div>
  )
}

export default About