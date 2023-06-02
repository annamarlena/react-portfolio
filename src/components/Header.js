// import './header.css'; <--- to be created later

function Header() {


  return(
    <header className="header">
      <div style={{ border: "5px solid #1F8A70" }}>
        <h1>A. Marlena Keller</h1>

        <nav>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/resume">Resume</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header; 