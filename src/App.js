import logo from './logo.svg';
import './App.css';

// Environment Variables
const REACT_APP_KEY_VERSION = process.env.REACT_APP_KEY_VERSION || '2.0';
const REACT_APP_KEY_TIME = process.env.REACT_APP_KEY_TIME || '2:00';
const REACT_APP_KEY_DATE = process.env.REACT_APP_KEY_DATE || '2026-05-10';
const REACT_APP_KEY_PORTAL = process.env.REACT_APP_KEY_PORTAL || 'STUDENT';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h3>Environment Variable Values:</h3>
          <p><strong>{REACT_APP_KEY_PORTAL}</strong></p>
          <p>{REACT_APP_KEY_VERSION}</p>
          <p>{REACT_APP_KEY_TIME}</p>
          <p>{REACT_APP_KEY_DATE}</p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
