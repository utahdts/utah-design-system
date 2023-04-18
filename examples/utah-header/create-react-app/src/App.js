import '@utahdts/utah-design-system-header/css';
import { setUtahHeaderSettings } from '@utahdts/utah-design-system-header';
import { useEffect } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  useEffect(
    () => {
      setUtahHeaderSettings({});
    },
    []
  );

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
