import { useState } from "react"
import logo from './logo.svg';
import './App.css';
import Header from './components//Header';
import Footer from './components//Footer';
import  About from './components/About';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";


function App() {
  const [currentPage, setCurrentPage] = useState("About")

  return (
    <div>
    <header class="linkRow" >
      <Header setCurrentPage={setCurrentPage}/>
    </header>
    <main>
    {currentPage == "About" && (
      <About/>
    )}
    {currentPage == "Portfolio" && (
      <Portfolio/>
    )}
    {currentPage == "Contact" && (
      <Contact/>
    )}
    {currentPage == "Resume" && (
      <Resume/>
    )}
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
  );
}

export default App
