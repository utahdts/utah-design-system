import { defaultSettings, getUtahHeaderSettings, setUtahHeaderSettings } from '@utahdts/utah-design-system-header';
import {
  useCallback,
  useEffect,
  useMemo,
  useRef
} from 'react';
import { useImmer } from 'use-immer';
import { useWebsiteUtahHeaderSettings } from '../../../../../../useWebsiteUtahHeaderSettings';
import { localStorageKeys } from '../../../../../enums/localStorageKeys';
import { parseHeaderSettings } from './parseHeaderSettings';
import { stringifyHeaderSettings } from './stringifyHeaderSettings';

/** @typedef {import('@utahdts/utah-design-system-header').Settings} Settings */

/**
 * @typedef InteractiveHeaderState {
 *  @property {string} headerString
 *  @property {(s: string) => void} setHeaderString
 *  @property {Settings} headerSettings
 *  @property {import('use-immer').Updater<Settings>} setHeaderSettings
 *  @property {boolean} headerIsOn
 *  @property {import('use-immer').Updater<boolean>} setHeaderIsOn
 *  @property {Settings} originalHeader
 *  @property {string | null} parseError
 *  @property {() => void} reset
 * }
 */

/**
 * @returns {InteractiveHeaderState}
 */
export function useInteractiveHeaderState() {
  const originalHeader = useRef(getUtahHeaderSettings());
  const websiteUtahHeaderSettings = useWebsiteUtahHeaderSettings();

  // a real Settings object is the core 'source-of-truth' off of which everything else spins
  const [headerSettings, setHeaderSettings] = useImmer(() => {
    const settingsFromStorage = localStorage.getItem(localStorageKeys.INTERACTIVE_HEADER_SETTINGS);

    /** @type {Settings} */
    let resultSettings;
    if (settingsFromStorage) {
      resultSettings = parseHeaderSettings(settingsFromStorage);
    } else {
      resultSettings = {
        ...getUtahHeaderSettings(),
        ...websiteUtahHeaderSettings,
        actionItems: [],
        mainMenu: false,
        onSearch: false,
      };
    }
    return resultSettings;
  });

  const [headerIsOn, setHeaderIsOn] = useImmer(false);
  const [parseError, setParseError] = useImmer(/** @type {string | null} */(null));

  /**
   * Outside influences may have changed the header (like adding a logo image), so
   * get the current settings before clobbering them with the "interactive" settings
   * @param {import('react').SetStateAction<boolean>} headerIsOnMaybeFunc either the new value or a function (old) => new
   */
  const setHeaderIsOnSafely = useCallback(
    /** @param {boolean | import('use-immer').DraftFunction<boolean>} headerIsOnMaybeFunc */
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
        // @ts-ignore
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
          // @ts-ignore
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
        // clear all settings
        const blankSettings = { ...getUtahHeaderSettings() };
        Object.keys(blankSettings).forEach((settingsKey) => {
          // @ts-ignore
          blankSettings[settingsKey] = null;
        });
        // add back in defaults and app base settings
        setHeaderSettings({ ...blankSettings, ...defaultSettings });
        setParseError(null);
      },
    }),
    [headerIsOn, headerSettings, parseError, setHeaderIsOnSafely, setHeaderSettings]
  );
}
