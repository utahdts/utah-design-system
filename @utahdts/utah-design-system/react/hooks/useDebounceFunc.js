import { useCallback, useEffect, useRef } from 'react';

/**
 * Given a function, return another function that will prevent the given function
 * from being executed until the "delay" time has expired. It will fire the function
 * immediately and then have a cool down period until it fires again.
 * @param {(...args: any[]) => void} func the function that is called after the delay
 * @param {number} [delay] minimum time in milliseconds between invocations
 * @returns {(...args: any[]) => Promise<any[]>} invoke your func (eventually); returns a promise with invoked args when finally invoked
 */
export function useDebounceFunc(func, delay = 1000) {
  const lastInvocationRef = useRef(NaN);
  const lastVarArgsRef = useRef(/** @type {any[] | null} */(null));
  const timeoutRef = useRef(NaN);

  // clear timeout on unmount
  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return useCallback(
    (...varArgs) => {
      const promise = new Promise((resolve) => {
        if (!lastInvocationRef.current || ((lastInvocationRef.current - (new Date()).getTime()) >= delay)) {
          clearTimeout(timeoutRef.current);
          lastInvocationRef.current = (new Date()).getTime();
          lastVarArgsRef.current = null;
          func(...varArgs);
        } else {
          lastVarArgsRef.current = varArgs;
          lastInvocationRef.current = (new Date()).getTime();
          clearTimeout(timeoutRef.current);
          timeoutRef.current = window.setTimeout(
            () => {
              func(lastVarArgsRef.current);
              lastVarArgsRef.current = null;
              lastInvocationRef.current = NaN;
              resolve(varArgs);
            },
            delay
          );
        }
      });
      return promise;
    },
    [delay, func]
  );
}
