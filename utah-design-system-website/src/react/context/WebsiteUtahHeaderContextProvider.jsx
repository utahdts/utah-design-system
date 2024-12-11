import { UtahHeaderContextProvider } from '@utahdts/utah-design-system';
import { defaultSettings } from '@utahdts/utah-design-system-header';
import React from 'react';
import { useWebsiteUtahHeaderSettings } from '../../useWebsiteUtahHeaderSettings';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @returns {React.JSX.Element}
 */
export function WebsiteUtahHeaderContextProvider({ children }) {
  const websiteUtahHeaderSettings = useWebsiteUtahHeaderSettings();
  return (
    <UtahHeaderContextProvider defaultSettings={{ ...defaultSettings, ...websiteUtahHeaderSettings }}>
      {children}
    </UtahHeaderContextProvider>
  );
}
