


function CurrentPage(props){


  return (
    <>
      <p>The current page is {props.page}</p>
      <a onClick={props.handleAnchorClick} href="about">About</a>
      <a onClick={props.handleAnchorClick} href="portfolio">Portfolio</a>
      <a onClick={props.handleAnchorClick} href="resume">Resume</a>
      <a onClick={props.handleAnchorClick} href="contact">Contact</a>
    </>
  )
}

export default CurrentPage