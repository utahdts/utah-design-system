// @ts-check
import {
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

  // a real Settings object is the core 'source-of-truth' that everything else spins off of
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
  useEffect(
    () => {
      setUtahHeaderSettings(headerIsOn ? headerSettings : originalHeader.current);
    },
    [headerIsOn, headerSettings]
  );

  /** @type {InteractiveHeaderState} */
  return useMemo(
    () => ({
      headerString: stringifyHeaderSettings(headerSettings),
      setHeaderString: (newHeaderString) => {
        const newSettings = parseHeaderSettings(newHeaderString);
        localStorage.setItem(localStorageKeys.INTERACTIVE_HEADER_SETTINGS, newHeaderString);

        setHeaderSettings(newSettings);
        setHeaderIsOn(true);
      },

      headerSettings,
      setHeaderSettings: (...args) => {
        setHeaderSettings(...args);
        setHeaderIsOn(true);
      },

      headerIsOn,
      setHeaderIsOn,

      originalHeader: originalHeader.current,

      reset: () => setHeaderSettings(baseSettings),
    }),
    [headerIsOn, headerSettings]
  );
}
