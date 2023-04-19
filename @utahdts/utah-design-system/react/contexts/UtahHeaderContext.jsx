import PropTypes from 'prop-types';
import React, { useContext, useEffect, useMemo } from 'react';
import { useImmer } from 'use-immer';
import { getUtahHeaderSettings, setUtahHeaderSettings } from '@utahdts/utah-design-system-header';

// The global context object that tracks the context's state and provides components like the <UtahHeaderContext.Provider/>
const UtahHeaderContext = React.createContext();

// This hook provides the context's data; most everything should just use this hook and nothing else
/**
 * @return {settings, setSettings}
 */
export default function useUtahHeaderContext() {
  return useContext(UtahHeaderContext);
}

const propTypes = { children: PropTypes.node.isRequired };
const defaultProps = {};

// provider that wraps the app at the top level
export function UtahHeaderContextProvider({ children }) {
  const [settings, setSettings] = useImmer(() => getUtahHeaderSettings());

  useEffect(
    () => {
      setUtahHeaderSettings(settings);
    },
    [settings]
  );

  const providedSettings = useMemo(() => ({ settings, setSettings }), [settings]);

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
