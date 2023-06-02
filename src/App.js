import './App.css'
import Header from './components//Header'
import About from './components/About'
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Footer from './components//Footer'
import { useState, useEffect } from "react"

function App() {
  const [currentPage, setCurrentPage] = useState("")

  const allPages = [ "/about", "/portfolio", "/contact", "/resume" ]

  useEffect(() => {
    // http://localhost:3000/About

    const page = window.location.href.split(window.location.host)[1].toLowerCase()

    if( !allPages.includes(page) ){
      setCurrentPage("/about") 
    } else {
      setCurrentPage(page)
    }

  }, [window.location.href])

  return (
    <div className="App">

      <Header setCurrentPage={setCurrentPage}/>

      <main className="main">

        {currentPage === "/about" && (
          <About/>
        )}
        {currentPage === "/portfolio" && (
          <Portfolio/>
        )}
        {currentPage === "/contact" && (
          <Contact/>
        )}
        {currentPage === "/resume" && (
          <Resume/>
        )}

      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App
