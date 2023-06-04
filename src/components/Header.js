import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';
import signature from './signature.png'

function Header({currentPage}) {
  console.log(currentPage)

  return(
    <header className="header">
      <div>
        <img className="signature" src={signature} />

        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="nav-link">
              <NavLink className={currentPage === "/about" ? "active-link" : ""} href="/about">About</NavLink>
              <NavLink className={currentPage === "/portfolio" ? "active-link" : ""} href="/portfolio">Portfolio</NavLink>
              <NavLink className={currentPage === "/resume" ? "active-link" : ""} href="/resume">Resume</NavLink>
              <NavLink className={currentPage === "/contact" ? "active-link" : ""} href="/contact">Contact</NavLink>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </header>
  )
}

export default Header; 