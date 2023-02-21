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
        // Do nothing if `mousedown` or `touchstart` started inside ref element
        if (startedInside || !startedWhenMounted) return;
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) return;

        handler(event);
      };

      const validateEventStart = (event) => {
        startedWhenMounted = !!ref.current;
        startedInside = ref.current && ref.current.contains(event.target);
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
