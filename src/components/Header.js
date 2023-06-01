// import './header.css'; <--- to be created later
import { useState } from "react"
import CurrentPage from "./CurrentPage"

function Header(props) {
// In this space you can do regular JavaScript


  return(
    <div style={{ border: "2px solid red" }}>
      <h1>{ props.title }</h1>
      <h2>{ props.subtitle }</h2>

    </div>
  )
}

export default Header; 