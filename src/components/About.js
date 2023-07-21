import './about.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilePic from './assets/profilePic.jpg'
import fullProfilePic from './assets/fullProfilePic.jpg'
// import fullProfilePic2 from './fullProfilePic2.jpg'

function About() {

  return (
    <div>
      <br></br><h1>About Me</h1>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6}>
             <Image className="fullProfilePic" src={fullProfilePic} alt="Professional photo of me" />
          </Col>
          <Col sm={12} md={12} lg={6}>
            <section className="section1">
              <h3>Hi, I'm Marlena!</h3><br></br>
              <p>I bring valuable life experience to my creative endeavors.</p> 
              {/* <p>My creative mindset gives me a fresh approach to problem-solving, enabling me to think outside the box and innovate in the ever-evolving field of web development.</p> */}
                {/* Moreover, my decision to embark on a career change demonstrates courage, adaptability, and a hunger for personal growth.  */}
              <p>My diverse background brings a rich tapestry of knowledge, ideas, and perspectives to my work, allowing me to create projects that resonate with a broader audience. </p> 
              <p>My customer service background equips me with exceptional interpersonal skills, allowing me to understand user needs and create intuitive web experiences.</p>
              <p>As a lifelong learner, I embrace new and emerging technologies, and am currently learning AI Prompt Engineering through online coursework.</p>
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <section className="section2">
              <h3>The Technical Stuff</h3>
                <p>I'm a junior React developer with a strong technical background, a creative eye, and proven leadership skills.</p>
                <p>I have a knack for analyzing and troubleshooting technical issues. I've honed my administrative and organizational skills, allowing me to manage multiple projects simultaneously with tight deadlines.</p>
                <p>Besides my technical expertise, I bring strong interpersonal and communication skills to the table. I value collaboration and enjoy working with cross-functional teams.</p>
                <p>I also build custom websites from scratch and have a talent for branding! If you're a small business owner or self-employed and looking to expand your online presence, please reach out to me via the contact section of this site. I'll be happy to connect with you to brainstorm ways to help your business stand out and grow!</p>
            </section>
          </Col>
        </Row>
          <section className="section3">
            <h3>Education and Skills</h3>
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="b65db092-87a5-4463-8d66-f6c32b73ea3a" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
            <p>University of Minnesota Full Stack Coding Bootcamp | June 12, 2023
            <br></br>Associate's in Computer Programming, Saint Paul College, Saint Paul, MN | May 2017</p>
            <p>Skills and technologies include: Front and Back End Development, Responsive Design, Debugging, Prompt Engineering, RESTful APIs, Document Object Model, JavaScript, HTML, CSS, jQuery, MERN Stack (MongoDB, Express.js, React.js, Node.js), JavaScript Object Notation (JSON), MySQL, Mongoose, Bootstrap, React Bootstrap, Bulma, Progressive Web Apps (PWA), Local Storage, Session Storage, User Authentication, Continuous Integration (CI), Model-View-Controller (MVC), Application Programming Interfaces (API), Asynchronous JavaScript and XML (AJAX), HTTP Request Methods, Agile, SCRUM, Heroku, Git, GitHub, Visual Studio Code, Scripts, Java, Python, and GIMP.</p>
          </section>
      </Container>
    </div>
  )
}

export default About