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
            <Nav className="nav-link" activeClassName="active-link">
              <NavLink href="/about">About</NavLink>
              <NavLink href="/portfolio">Portfolio</NavLink>
              <NavLink href="/resume">Resume</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </header>
  )
}

export default Header; 