import { getUtahHeaderSettings } from '@utahdts/utah-design-system-header';
import { createContext } from 'react';

/** @typedef {import('@utahdts/utah-design-system-header').Settings} Settings */

// The global context object that tracks the context's state and provides components like the <UtahHeaderContext.Provider/>
export const UtahHeaderContext = createContext({
  settings: getUtahHeaderSettings(),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSettings: /** @type {import('use-immer').Updater<Settings>} */(() => { }),
  settingsRef: /** @type {import('react').RefObject<Settings>} */({ current: null }),
});
