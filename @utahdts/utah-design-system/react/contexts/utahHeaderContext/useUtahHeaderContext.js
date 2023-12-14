import { useContext } from 'react';
import UtahHeaderContext from './UtahHeaderContext';

/** @typedef {import('@utahdts/utah-design-system-header').Settings} Settings */
/** @typedef {import('@utahdts/utah-design-system-header').SettingsInput} SettingsInput */

// This hook provides the context's data; most everything should just use this hook and nothing else
/**
 * @return {{ settings: Settings, setSettings: import('use-immer').Updater<Settings>, settingsRef: import('react').RefObject<Settings> }}
 */
export default function useUtahHeaderContext() {
  return useContext(UtahHeaderContext);
}
