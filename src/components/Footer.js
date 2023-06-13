import './footer.css';
import stackoverflow from './stackoverflow.png'
import github from './github.png'
import linkedin from './linkedin.png'

function Footer() {

  return (

// Icon images downloaded from www.flaticon.com/free-icons. LinkedIn and GitHub icons created by 
// riajulislam. Stack Overflow icon created by Xinh Studio.

    <footer className="footer">
      <div>
        <br></br><p>A portfolio website built using React.js and React Bootstrap</p>
      </div>

      <a href="https://www.linkedin.com/in/a-marlena-keller-179b609b/" target="_blank">
        <img className="linkedin" src={linkedin} alt="LinkedIn icon linking to my GitHub account." />
      </a>

      <a href="https://github.com/annamarlena" target="_blank">
        <img className="github" src={github} alt="LinkedIn icon linking to my LinkedIn page." /> 
      </a>

      <a href="https://stackoverflow.com/users/4595337/marlena?tab=profile" target="_blank">
        <img className="stackoverflow" src={stackoverflow} alt="Stack Overflow icon linking to my Stack Overflow account." /> 
      </a>
    </footer>
  )
}

export default Footer