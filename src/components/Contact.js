import './contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import stackoverflow from './stackoverflow.png'
import github from './github.png'
import linkedin from './linkedin.png'


function Contact() {

  return (
    <div>

      <section className="contactForm">
        <br></br><h1>Contact Me</h1>

        <Form>
          <Form.Label>Please note: this form is not currently functional. The submit button will reroute you to the "About Me" page.</Form.Label>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {/* <Form.Label>Name</Form.Label> */}
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className='mb-3' controlId="formBasicEmail">
            {/* <Form.Label>Email Address</Form.Label> */}
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Leave a Note</Form.Label> */}
          <Form.Control as="textarea" placeholder="Leave a Note" rows={3} />
        </Form.Group>
          <Button variant="dark" type="submit">Submit</Button>
        </Form>
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