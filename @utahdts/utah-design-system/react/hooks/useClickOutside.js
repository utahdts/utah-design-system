// @ts-check
import { useEffect } from 'react';

// Improved version of https://usehooks.com/useOnClickOutside/
/**
 * @param {import('../propTypesShapes/RefShape').RefCurrent} ref
 * @param {(e: Event) => void} handler
 * @param {boolean} isDisabled
 */
function useClickOutside(ref, handler, isDisabled = false) {
  useEffect(() => {
    let retVal;
    if (!isDisabled) {
      let startedInside = false;
      let startedWhenMounted = false;

      const listener = (event) => {
        if (
          // Do nothing if `mousedown` or `touchstart` started inside ref element
          (!startedInside && startedWhenMounted)

          // Do nothing if clicking ref's element or descendent elements
          && (ref.current && !ref.current.contains(event.target))
        ) {
          handler(event);
        }
      };

      const validateEventStart = (event) => {
        startedWhenMounted = !!ref.current;
        startedInside = ref.current?.contains?.(event.target);
      };

      document.addEventListener('mousedown', validateEventStart);
      document.addEventListener('touchstart', validateEventStart);
      document.addEventListener('click', listener);

      retVal = () => {
        document.removeEventListener('mousedown', validateEventStart);
        document.removeEventListener('touchstart', validateEventStart);
        document.removeEventListener('click', listener);
      };
    }

    return retVal;
  }, [ref.current, handler, isDisabled]);
}

export default useClickOutside;
