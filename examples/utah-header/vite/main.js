import { setUtahHeaderSettings } from '@utahdts/utah-design-system-header';
import '@utahdts/utah-design-system-header/css';
import { setupCounter } from './counter';
import javascriptLogo from './javascript.svg';
import './style.css';
import viteLogo from '/vite.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>

  <!-- 
  The default style sets body's display to flex. 
  There are many ways to make the state of Utah Header work with a flexed body.
  Setting body's display to block is a quick hack to prove the proof of concept of importing the state of Utah Header.
  -->
  <style>body { display: block }</style>
`;

setUtahHeaderSettings({});

setupCounter(document.querySelector('#counter'));
