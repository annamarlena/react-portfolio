// import './header.css'; <--- to be created later
import { useState } from "react"
import CurrentPage from "./CurrentPage"

function Header(props) {
// In this space you can do regular JavaScript


  return(
    <div style={{ border: "5px #1F8A70" }}>
      <h1>{ props.title }</h1>
      <h2>{ props.subtitle }</h2>
      <ul>{ props.navigation }</ul>

    </div>
  )
}

export default Header; 