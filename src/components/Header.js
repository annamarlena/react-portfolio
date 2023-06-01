// import './header.css'; <--- to be created later
import { useState } from "react"
import CurrentPage from "./CurrentPage"

function Header(props) {
// In this space you can do regular JavaScript

// set stateful variable
// const [ currentPage, setCurrentPage ] = useState("about")

  // function to change state between "pages"
  // function handleAnchorClick(e){
  //   e.preventDefault()
  //   setCurrentPage( 
  //     if( currentPage === "about" ){
  //       setCurrentPage // Not sure how to do this yet
  //     }
  //   )
  // }

  return(
    <div>
      <h1>{ props.title }</h1>
      <h2>{ props.subtitle }</h2>
      {/* <p>{ props.about }</p> */}

      {/* <CurrentPage page={currentPage} handleAnchorClick={handleAnchorClick} /> */}

      {/* <a onClick={handleAnchorClick} href="about">About</a>
      <a onClick={handleAnchorClick} href="portfolio">Portfolio</a>
      <a onClick={handleAnchorClick} href="resume">Resume</a>
      <a onClick={handleAnchorClick} href="contact">Contact</a> */}
    </div>
  )
}

export default Header; 