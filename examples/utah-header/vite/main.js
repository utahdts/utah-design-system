import { setUtahHeaderSettings } from '@utahdts/utah-design-system-header';
import '@utahdts/utah-design-system-header/css';
import './style.css';
import { setupCounter } from './counter';
import javascriptLogo from './javascript.svg';
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
`;

setUtahHeaderSettings({
  title: 'Utah Header running w/ vite!',
  mainMenu: {
    menuItems: [
      {
        actionUrl: {
          url: "/"
        },
        title: "Home"
      }
    ],
    title: "Utah Design System Main Menu"
  },
});

setupCounter(document.querySelector('#counter'));
