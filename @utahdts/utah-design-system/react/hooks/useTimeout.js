import { useCallback, useEffect, useRef } from 'react';

/** @param {number[]} timeoutIds */
function clearTimeoutIds(timeoutIds) {
  timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
  timeoutIds.splice(0, timeoutIds.length);
}

/**
 * @param {number} delay how long to wait before firing callback
 * @param {boolean} isDebounced if true, cancels previous timeout; if false, lets previous timeouts also complete
 * @returns {(callback: (() => void)) => void} call this function to fire your timeout
 */
export function useTimeout(delay, isDebounced) {
  const timeoutIdsRef = useRef(/** @type {number[]} */([]));

  // clear timeouts on unmount
  useEffect(() => () => clearTimeoutIds(timeoutIdsRef.current), []);

  return useCallback(
    (callback) => {
      if (isDebounced) {
        clearTimeoutIds(timeoutIdsRef.current);
      }
      timeoutIdsRef.current.push(window.setTimeout(callback, delay));
    },
    [delay, isDebounced]
  );
}
