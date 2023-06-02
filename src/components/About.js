


function About(props) {

  return (
    <>
      <li>onClick={() => props.setCurrentPage("About")}</li>
      <p>This is the About page.</p>
   
    </>
  )
}

export default About