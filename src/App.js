import './App.css'
import artdeco1 from './components/artdeco1.jpg'
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

        {/* Image downloaded from Freepik.com
        www.freepik.com/free-vector/gradient-art-deco-pattern-design_14571380.htm#query=art%20deco%20background&position=14&from_view=keyword&track=ais
         */}
        <img class="artdeco1" src={artdeco1} alt="Art-deco gradient pattern background." />

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

        <Footer/>

    </div>
  );
}

export default App
