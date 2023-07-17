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

  const allPages = [ "/react-portfolio/about", "/react-portfolio/portfolio", "/react-portfolio/contact", "/react-portfolio/resume" ]

  useEffect(() => {
    const page = window.location.href.split(window.location.host)[1].toLowerCase()
    if( !allPages.includes(page) ){
      setCurrentPage("/react-portfolio/about") 
    } else {
      setCurrentPage(page)
    }
 
  }, [window.location.href])

  return (
    <div className="App">

      <Header setCurrentPage={setCurrentPage} currentPage={currentPage}/>

      <main className="main">

        {/* Image downloaded from Freepik.com
        www.freepik.com/free-vector/gradient-art-deco-pattern-design_14571380.htm#query=art%20deco%20background&position=14&from_view=keyword&track=ais
         */}
        <img class="artdeco1" src={artdeco1} alt="Art-deco gradient pattern background." />

        {currentPage === "/react-portfolio/about" && (
          <About/>
        )}
        {currentPage === "/react-portfolio/portfolio" && (
          <Portfolio/>
        )}
        {currentPage === "/react-portfolio/contact" && (
          <Contact/>
        )}
        {currentPage === "/react-portfolio/resume" && (
          <Resume/>
        )}

      </main>

        <Footer/>

    </div>
  );
}

export default App
