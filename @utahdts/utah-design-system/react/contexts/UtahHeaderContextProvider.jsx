// @ts-check
import { getUtahHeaderSettings, setUtahHeaderSettings } from '@utahdts/utah-design-system-header';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo } from 'react';
import useImmerRef from '../hooks/useImmerRef';
import SettingsShape from '../propTypesShapes/header/SettingsShape';
import UtahHeaderContext from './UtahHeaderContext';

/** @typedef {import('@utahdts/utah-design-system-header/src/js/misc/jsDocTypes').SettingsInput} SettingsInput */

const propTypes = {
  children: PropTypes.node.isRequired,
  defaultSettings: SettingsShape,
};
const defaultProps = {
  defaultSettings: null,
};

/**
 * provider that wraps the app at the top level
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {SettingsInput} props.defaultSettings
 * @returns {JSX.Element}
 */
function UtahHeaderContextProvider({ children, defaultSettings }) {
  const [settings, setSettings, settingsRef] = useImmerRef(() => ({ ...getUtahHeaderSettings(), ...(defaultSettings ?? {}) }));

  useEffect(
    () => {
      // these are the default settings for ANY app. Put your settings in your app (websiteUtahHeaderSettings.js for the Utah Design System Website)
      setUtahHeaderSettings(settings);
    },
    [settings]
  );

  const providedSettings = useMemo(() => ({ settings, setSettings, settingsRef }), [settings]);

  return (
    // Vite HMR was sometimes getting an "unspreadable" value for this context!
    // The above useMemo() ALWAYS returns a spreadable object, so it seems it's got to
    // be HMR's fault it's not always behaving? Why would providedSettings ever not be an object?
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UtahHeaderContext.Provider value={providedSettings || {}}>
      {children}
    </UtahHeaderContext.Provider>
  );
}
UtahHeaderContextProvider.propTypes = propTypes;
UtahHeaderContextProvider.defaultProps = defaultProps;

export default UtahHeaderContextProvider;
