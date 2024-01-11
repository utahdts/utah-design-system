import { useEffect, useRef } from 'react';
import { useRefAlways } from './useRefAlways';

/**
 * @typedef UseIntervalOptions {
 *  @property {boolean} isDisabled even though have delay and callback, still don't fire the interval
 * }
 */

/**
 * @param {() => void} callback function to call after delay expires
 * @param {number} delay how long to wait before firing callback
 * @param {UseIntervalOptions} [options]
 */
export function useInterval(callback, delay, options) {
  // put callback in ref so that when it changes the interval doesn't have to restart
  const savedCallback = useRefAlways(callback);
  const intervalIdRef = useRef(NaN);

  // Set up the interval
  useEffect(
    () => {
      if (Number.isNaN(delay) || options?.isDisabled) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = NaN;
      } else {
        intervalIdRef.current = setInterval(savedCallback.current, delay);
      }
      return () => clearInterval(intervalIdRef.current);
    },
    [delay, options?.isDisabled]
  );
}
