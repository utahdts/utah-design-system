import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CssContextProvider } from './react/context/cssContext/CssContext';

let baseName;
if (window.location.href.includes('/dev/')) {
  baseName = 'utah-design-system/dev';
} else if (
  window.location.href.includes('localhost')
  || window.location.href.includes('127.0.0.1')
  || window.location.href.includes('.local.')
) {
  baseName = '';
} else {
  baseName = 'utah-design-system';
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssContextProvider>
      <BrowserRouter basename={baseName}>
        <App />
      </BrowserRouter>
    </CssContextProvider>
  </React.StrictMode>
);
