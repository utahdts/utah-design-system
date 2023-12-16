import { getUtahHeaderSettings, setUtahHeaderSettings } from '@utahdts/utah-design-system-header';
import { useEffect, useMemo } from 'react';
import { useImmerRef } from '../../hooks/useImmerRef';
import { UtahHeaderContext } from './UtahHeaderContext';

/** @typedef {import('@utahdts/utah-design-system-header').SettingsInput} SettingsInput */

/**
 * provider that wraps the app at the top level
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {SettingsInput} [props.defaultSettings]
 * @returns {JSX.Element}
 */
export function UtahHeaderContextProvider({ children, defaultSettings }) {
  const [settings, setSettings, settingsRef] = (
    useImmerRef(() => (/** @type {Partial<SettingsInput>} */ ({ ...getUtahHeaderSettings(), ...(defaultSettings ?? {}) })))
  );

  useEffect(
    () => {
      // these are the default settings for ANY app. Put your settings in your app (websiteUtahHeaderSettings.js for the Utah Design System Website)
      // @ts-ignore
      setUtahHeaderSettings(settings);
    },
    [settings]
  );

  const providedSettings = useMemo(() => ({ settings, setSettings, settingsRef }), [setSettings, settings, settingsRef]);

  return (
    // Vite HMR was sometimes getting an "unspreadable" value for this context!
    // The above useMemo() ALWAYS returns a spreadable object, so it seems it's got to
    // be HMR's fault it's not always behaving? Why would providedSettings ever not be an object?
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    // @ts-ignore
    <UtahHeaderContext.Provider value={providedSettings}>
      {children}
    </UtahHeaderContext.Provider>
  );
}
