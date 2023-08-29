// @ts-check
import { getUtahHeaderSettings } from '@utahdts/utah-design-system-header';
import React from 'react';

/** @typedef {import('@utahdts/utah-design-system-header/src/js/misc/jsDocTypes').Settings} Settings */

// The global context object that tracks the context's state and provides components like the <UtahHeaderContext.Provider/>
const UtahHeaderContext = React.createContext({
  settings: getUtahHeaderSettings(),
  setSettings: /** @type {import('use-immer').Updater<Settings>} */(() => { }),
  settingsRef: /** @type {import('react').RefObject<Settings>} */({ current: null }),
});
export default UtahHeaderContext;
