import { useEffect } from 'react';

// Improved version of https://usehooks.com/useOnClickOutside/
/**
 * @param {React.RefObject<HTMLElement>} ref
 * @param {React.KeyboardEventHandler} handler
 * @param {boolean} isDisabled
 */
function useClickOutside(ref, handler, isDisabled = false) {
  useEffect(
    () => {
      let retVal;
      if (!isDisabled) {
        let startedInside = false;
        let startedWhenMounted = false;

        /** @type {(e: Event) => void} */
        const listener = (event) => {
          if (
            // Do nothing if `mousedown` or `touchstart` started inside ref element
            (!startedInside && startedWhenMounted)

            // Do nothing if clicking ref's element or descendent elements
            // @ts-ignore
            && (ref.current && !ref.current.contains(event.target))
          ) {
            // @ts-ignore
            handler(event);
          }
        };

        /** @type {(e: Event) => void} */
        const validateEventStart = (event) => {
          startedWhenMounted = !!ref.current;
          // @ts-ignore
          startedInside = !!ref.current?.contains?.(event.target);
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref.current, handler, isDisabled]
  );
}

export default useClickOutside;
