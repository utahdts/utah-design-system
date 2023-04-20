import '@utahdts/utah-design-system-header/css';
import { setUtahHeaderSettings } from '@utahdts/utah-design-system-header';
import { useEffect } from 'react';
import './App.css';
import logo from './logo.svg';
import { ExternalLink } from '@utahdts/utah-design-system';

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
        <ExternalLink href="https://reactjs.org" className="App-link">Learn React</ExternalLink>
      </header>
    </div>
  );
}

export default App;
