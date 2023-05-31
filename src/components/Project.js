

function Project(props) {

  const showMyAboutMe = false;
  const showMyPortfolio = true;
  const showMyContact = false;
  const showMyResume = false;

  return (
    <div style={{ border: "2px solid teal" }}>

      { showMyAboutMe ? (
        <h2>About Me</h2>
      ) : (
        <h2>My Portfolio</h2>
      )}

      { props.children }
    </div>
  )
}

export default Project