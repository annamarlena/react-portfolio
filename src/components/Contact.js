import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contact() {

  return (
    <div>
      <br></br><h2>Contact Me</h2><br></br>

      <Form>
        <Form.Group className='mb-3' controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
  </div>
  )
}

export default Contact