import { UtahHeaderContextProvider } from '@utahdts/utah-design-system';
import { defaultSettings } from '@utahdts/utah-design-system-header';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppContextProvider from './react/context/AppContext/AppContextProvider';
import CssContextProvider from './react/context/cssContext/CssContextProvider';
import websiteUtahHeaderSettings from './websiteUtahHeaderSettings';

const baseName = '';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssContextProvider>
      <BrowserRouter basename={baseName}>
        <UtahHeaderContextProvider defaultSettings={{ ...defaultSettings, ...websiteUtahHeaderSettings }}>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </UtahHeaderContextProvider>
      </BrowserRouter>
    </CssContextProvider>
  </React.StrictMode>
);
