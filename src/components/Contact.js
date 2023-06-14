import './contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import stackoverflow from './stackoverflow.png'
import github from './github.png'
import linkedin from './linkedin.png'

function Contact() {

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm("service_sm3otsi", "template_8c4r7zd", e.target, "YgJoL2j_wsGmHQFHr");
  alert("Your message has been sent!");
}

  return (
    <div>
      <section className="contactForm">
        <br></br><h1>Contact Me</h1>
        <p>annamarlena310@gmail.com</p><br></br>

        <Form className="formContainer" onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" name="from_name" className="from_name" placeholder="Name" />
          </Form.Group>
          <Form.Group className='mb-3' controlId="formBasicEmail">
            <Form.Control type="text" name="email_from" className="email_from" placeholder="Email Address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" name="message" className="message" placeholder="Leave a Note" rows={3} />
        </Form.Group>
          <Button variant="dark" type="submit">Send Email</Button>
        </Form><br></br>
      </section>

      <section className="profiles">
        <h1>Professional Profiles</h1>

        <a href="https://www.linkedin.com/in/a-marlena-keller-179b609b/" target="_blank">
          <img className="linkedIn" src={linkedin} alt="LinkedIn icon linking to my GitHub account." />
        </a>

        <a href="https://github.com/annamarlena" target="_blank">
          <img className="gitHub" src={github} alt="LinkedIn icon linking to my LinkedIn page." /> 
        </a>

        <a href="https://stackoverflow.com/users/4595337/marlena?tab=profile" target="_blank">
          <img className="stackOverflow" src={stackoverflow} alt="Stack Overflow icon linking to my Stack Overflow account." /> 
        </a>
      </section>
  </div>
  )
}

export default Contact