// @ts-check
import { baseSettings } from '@utahdts/utah-design-system';
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { useImmer } from 'use-immer';
import { getUtahHeaderSettings, setUtahHeaderSettings } from '@utahdts/utah-design-system-header';
import localStorageKeys from '../../../../../enums/localStorageKeys';
import parseHeaderSettings from './parseHeaderSettings';
import stringifyHeaderSettings from './stringifyHeaderSettings';

/**
 * @typedef {import('../../../../../../../../utah-header/src/js/misc/jsDocTypes').Settings} Settings
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
 *  @property {string | null} parseError
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
      // include baseSettings in case localStorage settings are missing something (bargain basement migrator)
      resultSettings = { ...baseSettings, ...parseHeaderSettings(settingsFromStorage) };
    } else {
      resultSettings = baseSettings;
    }
    return resultSettings;
  });

  const [headerIsOn, setHeaderIsOn] = useState(false);
  const [parseError, setParseError] = useState(/** @type {string | null} */(null));

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
      try {
        // have to stringify and parse to have the functions and dom and stuff changed to the right objects
        setUtahHeaderSettings(headerIsOn ? parseHeaderSettings(stringifyHeaderSettings(headerSettings)) : originalHeader.current);
        setParseError(null);
      } catch (e) {
        setUtahHeaderSettings(originalHeader.current);
        setParseError(e.message);
      }

      // store to local storage when changed
      localStorage.setItem(localStorageKeys.INTERACTIVE_HEADER_SETTINGS, stringifyHeaderSettings(headerSettings));
    },
    [headerIsOn, headerSettings]
  );

  /** @type {InteractiveHeaderState} */
  return useMemo(
    () => ({
      headerString: stringifyHeaderSettings(headerSettings),
      setHeaderString: (newHeaderString) => {
        try {
          const newSettings = parseHeaderSettings(newHeaderString);
          localStorage.setItem(localStorageKeys.INTERACTIVE_HEADER_SETTINGS, newHeaderString);

          setHeaderSettings(newSettings);
          setHeaderIsOnSafely(true);
          setParseError(null);
        } catch (e) {
          setParseError(e.message);
        }
      },

      headerSettings,
      setHeaderSettings: (...args) => {
        setHeaderSettings(...args);
        setHeaderIsOnSafely(true);
        setParseError(null);
      },

      headerIsOn,
      setHeaderIsOn: setHeaderIsOnSafely,

      originalHeader: originalHeader.current,

      parseError,

      reset: () => {
        setHeaderSettings(baseSettings);
        setParseError(null);
      },
    }),
    [headerIsOn, headerSettings, parseError]
  );
}
