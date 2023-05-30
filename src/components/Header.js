// import './header.css'; <--- to be created later

function Header(props) {

// In this space you can do regular JavaScript

  return(
    <div>
        <h1>{ props.title }</h1>
        <h2>{ props.subtitle }</h2>
    </div>
  )
}

export default Header; 