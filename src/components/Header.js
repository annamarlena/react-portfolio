import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';

function Header() {


  return(
    <header className="header">
      <div>
       <br></br> <h1>A. Marlena Keller</h1><br></br>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="justify-content-end">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </header>
  )
}

export default Header; 