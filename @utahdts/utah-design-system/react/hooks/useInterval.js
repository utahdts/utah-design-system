import { useEffect } from 'react';
import { useRefAlways } from './useRefAlways';

/**
 * @typedef UseIntervalOptions {
 *  @property {boolean} [isDisabled] even though have delay and callback, still don't fire the interval
 * }
 */

/**
 * @param {() => void} callback function to call after delay expires
 * @param {number} delay how long to wait before firing callback
 * @param {UseIntervalOptions} [options]
 */
export function useInterval(callback, delay, options) {
  // put callback in ref so that when it changes the interval doesn't have to restart
  const savedCallbackRef = useRefAlways(callback);

  // Set up the interval
  useEffect(
    () => {
      let intervalId = NaN;
      if (!Number.isNaN(delay) && !options?.isDisabled) {
        intervalId = setInterval(savedCallbackRef.current, delay);
      }
      return () => clearInterval(intervalId);
    },
    [delay, options?.isDisabled]
  );
}
