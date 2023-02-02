// @ts-check
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { useImmer } from 'use-immer';
import { getUtahHeaderSettings, setUtahHeaderSettings } from 'utah-design-system-header';
import baseSettings from 'utah-design-system-header/src/js/settings/baseSettings';
import localStorageKeys from '../../../../../enums/localStorageKeys';
import parseHeaderSettings from './parseHeaderSettings';
import stringifyHeaderSettings from './stringifyHeaderSettings';

/**
 * @typedef {import('utah-design-system-header/src/js/misc/jsDocTypes').Settings} Settings
*/

/**
 * @typedef InteractiveHeaderState {
 *  @property {string} headerString
 *  @property {(s: String) => void} setHeaderString
 *  @property {Settings} headerSettings
 *  @property {(immerSetterFunc: any) => void} setHeaderSettings
 *
 *  @property {boolean} headerIsOn
 *  @property {(headerIsOn: boolean) => void} setHeaderIsOn
 *
 *  @property {Settings} originalHeader
 *
 *  @property {() => void} reset
 * }
 */

/**
 * @returns {InteractiveHeaderState}
 */
export default function useInteractiveHeaderState() {
  const originalHeader = useRef(getUtahHeaderSettings());

  // a real Settings object is the core 'source-of-truth' off of which everything else spins
  const [headerSettings, setHeaderSettings] = useImmer(() => {
    const settingsFromStorage = localStorage.getItem(localStorageKeys.INTERACTIVE_HEADER_SETTINGS);

    /** @type {Settings} */
    let resultSettings;
    if (settingsFromStorage) {
      resultSettings = parseHeaderSettings(settingsFromStorage);
    } else {
      resultSettings = baseSettings;
    }
    return resultSettings;
  });

  const [headerIsOn, setHeaderIsOn] = useState(false);

  // remove interactive header when unmounted
  useEffect(() => () => { setUtahHeaderSettings(originalHeader.current); }, []);

  // toggle header on/off and remove when unmounted
  const prevHeaderIsOn = useRef(headerIsOn);
  useEffect(
    () => {
      if (!prevHeaderIsOn.current) {
        // grab current header in case interactive header is being turned on
        originalHeader.current = getUtahHeaderSettings();
      }
      prevHeaderIsOn.current = headerIsOn;

      // have to set to originalHeader in case settings just got turned off
      setUtahHeaderSettings(headerIsOn ? headerSettings : originalHeader.current);

      // store to local storage when changed
      localStorage.setItem(localStorageKeys.INTERACTIVE_HEADER_SETTINGS, stringifyHeaderSettings(headerSettings));
    },
    [headerIsOn, headerSettings]
  );

  /**
   * Outside influences may have changed the header (like adding a logo image), so
   * get the current settings before clobbering them with the "interactive" settings
   * @param {React.SetStateAction<boolean>} headerIsOnMaybeFunc either the new value or a function (old) => new
   */
  const setHeaderIsOnSafely = useCallback(
    (headerIsOnMaybeFunc) => {
      if (!headerIsOn) {
        originalHeader.current = getUtahHeaderSettings();
      }
      setHeaderIsOn(headerIsOnMaybeFunc);
    },
    [headerIsOn]
  );

  /** @type {InteractiveHeaderState} */
  return useMemo(
    () => ({
      headerString: stringifyHeaderSettings(headerSettings),
      setHeaderString: (newHeaderString) => {
        const newSettings = parseHeaderSettings(newHeaderString);
        localStorage.setItem(localStorageKeys.INTERACTIVE_HEADER_SETTINGS, newHeaderString);

        setHeaderSettings(newSettings);
        setHeaderIsOnSafely(true);
      },

      headerSettings,
      setHeaderSettings: (...args) => {
        setHeaderSettings(...args);
        setHeaderIsOnSafely(true);
      },

      headerIsOn,
      setHeaderIsOn: setHeaderIsOnSafely,

      originalHeader: originalHeader.current,

      reset: () => setHeaderSettings(baseSettings),
    }),
    [headerIsOn, headerSettings]
  );
}
