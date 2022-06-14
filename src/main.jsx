import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssContextProvider } from './context/cssContext/CssContext';

ReactDOM.createRoot(document.getElementById('root')).render((
  <React.StrictMode>
    <CssContextProvider>
      <App />
    </CssContextProvider>
  </React.StrictMode>
));
