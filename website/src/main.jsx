import { UtahHeaderContextProvider } from '@utahdts/utah-design-system';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CssContextProvider } from './react/context/cssContext/CssContext';

const baseName = '';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssContextProvider>
      <BrowserRouter basename={baseName}>
        <UtahHeaderContextProvider>
          <App />
        </UtahHeaderContextProvider>
      </BrowserRouter>
    </CssContextProvider>
  </React.StrictMode>
);
