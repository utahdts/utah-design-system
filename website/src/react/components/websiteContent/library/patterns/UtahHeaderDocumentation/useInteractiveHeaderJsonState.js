// @ts-check
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getUtahHeaderSettings, setUtahHeaderSettings } from 'utah-design-system-header';
import localStorageKeys from '../../../../../enums/localStorageKeys';
import parseHeaderSettings from './parseHeaderSettings';
import stringifyHeaderSettings from './stringifyHeaderSettings';

/**
 * @typedef {import('utah-design-system-header/src/js/misc/jsDocTypes').Settings} Settings
*/

/**
 * @typedef InteractiveHeaderState {
 *  @property {string} headerJsonString
 *  @property {function (string): void} setHeaderJsonString
 *  @property {Settings} originalHeader
 *  @property {boolean} headerIsOn
 *  @property {function (boolean): void} setHeaderIsOn
 * }
 */

/**
 * @returns {InteractiveHeaderState}
 */
export default function useInteractiveHeaderJsonState() {
  const [headerJsonString, setHeaderJsonString] = useState(() => (
    localStorage.getItem(localStorageKeys.INTERACTIVE_HEADER_SETTINGS)
    || stringifyHeaderSettings(getUtahHeaderSettings())
  ));
  const originalHeader = useRef(getUtahHeaderSettings());
  const [headerIsOn, setHeaderIsOn] = useState(false);

  useEffect(
    () => {
      // on load, use the current headerJsonString settings from localstorage
      setUtahHeaderSettings(headerIsOn ? parseHeaderSettings(headerJsonString) : originalHeader.current);
      return () => {
        // put original settings back when leaving page
        setUtahHeaderSettings(originalHeader.current);
      };
    },
    [headerIsOn]
  );

  /** @type {InteractiveHeaderState} */
  return {
    headerJsonString,
    setHeaderJsonString: useCallback(
      (newHeaderString) => {
        localStorage.setItem(localStorageKeys.INTERACTIVE_HEADER_SETTINGS, newHeaderString);
        setHeaderJsonString(newHeaderString);
        if (headerIsOn) {
          setUtahHeaderSettings(parseHeaderSettings(newHeaderString));
        }
      },
      [headerIsOn]
    ),
    originalHeader: originalHeader.current,

    headerIsOn,
    setHeaderIsOn,
  };
}
