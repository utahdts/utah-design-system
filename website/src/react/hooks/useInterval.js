// @ts-check
import { useEffect, useRef } from 'react';

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// "Feel free to copy paste it in your project or put it on npm."
/**
 * @param {() => void} callback function to call after delay expires
 * @param {number} delay how long to wait before firing callback
 */
export default function useInterval(callback, delay) {
  const savedCallback = useRef(/** @type {(() => void) | null} */(null));

  // Remember the latest callback.
  useEffect(
    () => {
      savedCallback.current = callback;
    },
    [callback]
  );

  // Set up the interval.
  useEffect(
    () => {
      /** @type {(() => void) | undefined} */
      let returnValue;
      if (!Number.isNaN(delay)) {
        const id = setInterval(
          () => {
            if (savedCallback.current) {
              savedCallback.current();
            }
          },
          delay
        );
        returnValue = () => clearInterval(id);
      }
      return returnValue;
    },
    [delay]
  );
}
