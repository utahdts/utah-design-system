import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CssContextProvider } from './react/context/cssContext/CssContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CssContextProvider>
  </React.StrictMode>
);
