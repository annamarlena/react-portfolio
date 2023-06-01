import logo from './logo.svg';
import './App.css';
import Header from './components//Header';
import Project from './components//Project';
import Footer from './components//Footer';

// function AboutButton(){
//   return (
//     <button>
//       About
//     </button>
//   )
// }

// function PortfolioButton(){
//   return (
//     <button>
//       Portfolio
//     </button>
//   )
// }

// function ResumeButton(){
//   return (
//     <button>
//       Resume
//     </button>
//   )
// }

// function ContactButton(){
//   return (
//     <button>
//       Contact
//     </button>
//   )
// }

const navLinks = [
  { title: "About", isCurrent: true, id: 1 },
  { title: "Portfolio", isCurrent: false, id: 2 },
  { title: "Resume", isCurrent: false, id: 3 },
  { title: "Contact", isCurrent: false, id: 4 }
]

export default function App() {

    const listLinks = navLinks.map( link =>
      <li key={link.id}
      style={{
        color: link.isCurrent ? "#116D6E" : "black"
      }}
      >
        { link.title }
      </li>
    )

  return (
    <div className="App">
      
      <ul>listLinks</ul>
      
      <Header> 
        <div>title="A. Marlena Keller" subtitle="Portfolio"</div>
       
          {/* <AboutButton about="AboutButton" />
          <PortfolioButton portfolio="PortfolioButton" />
          <ResumeButton resume="ResumeButton" />
          <ContactButton contact="ContactButton" /> */}
       
      </Header>
 
      <Project>
         {/* --- this styling will apply to each item passed through here --- */}
        <div style={{ backgroundColor: "yellow" }}>  
          <p>Image and link to project here.</p>
        </div>

      </Project><br/>

      <Footer />
    </div>
  );
}


