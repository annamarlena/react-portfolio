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
        <img className="signature" src={signature} alt="Marlena's name in a fancier font"/>

        <Navbar bg="dark" variant="dark" expand="sm">
          <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-link">
              <NavLink className={currentPage === "/react-portfolio/about" ? "active-link" : ""} href="/react-portfolio/about">About</NavLink>
              <NavLink className={currentPage === "/react-portfolio/portfolio" ? "active-link" : ""} href="/react-portfolio/portfolio">Portfolio</NavLink>
              <NavLink className={currentPage === "/react-portfolio/resume" ? "active-link" : ""} href="/react-portfolio/resume">Resume</NavLink>
              <NavLink className={currentPage === "/react-portfolio/contact" ? "active-link" : ""} href="/react-portfolio/contact">Contact</NavLink>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  )
}

export default Header; 