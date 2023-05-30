import logo from './logo.svg';
import './App.css';
import Header from './components//Header';
import Project from './components//Project';
import Footer from './components//Footer';

function App() {
  return (
    <div className="App">
      
      <Header title="A. Marlena Keller" subtitle="Portfolio"/>

      <Project>
         {/* --- this styling will apply to each item passed through here --- */}
        <div style={{ backgroundColor: "yellow" }}>  
          <p>Image and link to project here.</p>
        </div>

      </Project><br/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. React is awesome!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header> */}

      <Footer />
    </div>
  );
}

export default App;
