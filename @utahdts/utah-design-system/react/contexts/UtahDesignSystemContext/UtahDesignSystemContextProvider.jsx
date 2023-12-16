import { useImmer } from 'use-immer';
import { ariaLiveTypes } from '../../enums/ariaLiveTypes';
import { UtahDesignSystemContext } from './UtahDesignSystemContext';
import { AriaLiveMessages } from './components/AriaLiveMessages';
import { BannersGlobal } from './components/BannersGlobal';

/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemDefaultSettings} UtahDesignSystemDefaultSettings */
/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemContextValue} UtahDesignSystemContextValue */

/**
 * provider that wraps the app at the top level
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {UtahDesignSystemDefaultSettings} props.defaultSettings
 * @returns {JSX.Element}
 */
export function UtahDesignSystemContextProvider({ children, defaultSettings }) {
  const immerHook = /** @type {typeof useImmer<UtahDesignSystemContextValue>} */ (useImmer)(() => ({
    ariaLive: {
      assertiveMessages: [],
      politeMessages: [],
    },
    banners: [],
  }));

  return (
    <UtahDesignSystemContext.Provider value={immerHook}>
      {children}
      <AriaLiveMessages ariaLiveType={ariaLiveTypes.ASSERTIVE} messages={immerHook[0].ariaLive.assertiveMessages} />
      <AriaLiveMessages ariaLiveType={ariaLiveTypes.POLITE} messages={immerHook[0].ariaLive.politeMessages} />
      <BannersGlobal banners={immerHook[0].banners} bannerDuration={defaultSettings.bannerDuration} />
    </UtahDesignSystemContext.Provider>
  );
}
