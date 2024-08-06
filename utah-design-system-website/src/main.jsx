import { UtahDesignSystemContextProvider } from '@utahdts/utah-design-system';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AppContextProvider } from './react/context/AppContext/AppContextProvider';
import { CssContextProvider } from './react/context/cssContext/CssContextProvider';
import { WebsiteUtahHeaderContextProvider } from './react/context/WebsiteUtahHeaderContextProvider';
import { notNull } from './react/util/notNull/notNull';

const baseName = '';

ReactDOM.createRoot(notNull(document.getElementById('root'), 'main.jsx: root not found')).render(
  <React.StrictMode>
    <BrowserRouter basename={baseName}>
      <UtahDesignSystemContextProvider defaultSettings={{ bannerDuration: 3500 }}>
        <AppContextProvider>
          <CssContextProvider>
            <WebsiteUtahHeaderContextProvider>
              <App />
            </WebsiteUtahHeaderContextProvider>
          </CssContextProvider>
        </AppContextProvider>
      </UtahDesignSystemContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
