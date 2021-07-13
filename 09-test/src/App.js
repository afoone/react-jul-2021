import logo from "./logo.svg";
import "./App.css";

function App({ thirdLink }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React
        </a>
        <a
          className="App-link"
          href="https://alfatecsistemas.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Con Alfatec
        </a>
        <a
          className="App-link"
          href="https://alfatecsistemas.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          {thirdLink}
        </a>
      </header>
    </div>
  );
}

export default App;
