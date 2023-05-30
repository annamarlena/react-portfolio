

function Project(props) {

  const showMyAboutMe = true;
  const showMyPortfolio = false;
  const showMyContact = false;
  const showMyResume = false;

  return (
    <div style={{ border: "2px solid teal" }}>

      { showMyAboutMe === true && (
        <h2>About Me</h2>
      )}

      { props.children }
    </div>
  )
}

export default Project