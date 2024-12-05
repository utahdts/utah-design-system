import { useEffect } from 'react';

// Improved version of https://usehooks.com/useOnClickOutside/
/**
 * @param {import('react').RefObject<HTMLElement | null>[]} refs in the case of popups, they have the popup content AND the reference element
 * @param {import('react').EventHandler<any>} handler
 * @param {boolean} isDisabled
 */
export function useClickOutside(refs, handler, isDisabled = false) {
  useEffect(
    () => {
      let retVal;
      if (!isDisabled) {
        let startedInside = false;
        let startedWhenMounted = false;

        /** @type {(e: Event) => void} */
        const listener = (event) => {
          if (refs.some((ref) => (
            // Do nothing if `mousedown` or `touchstart` started inside ref element
            (!startedInside && startedWhenMounted)

            // Do nothing if clicking ref's element or descendent elements
            // @ts-expect-error this works... types are incongruent
            && (ref.current && !ref.current.contains(event.target))
          ))) {
            handler(event);
          }
        };

        /** @type {(e: Event) => void} */
        const validateEventStart = (event) => {
          startedWhenMounted = refs.some((ref) => !!ref.current);
          // @ts-expect-error this works... types are incongruent
          startedInside = refs.some((ref) => (ref.current === event.target) || !!ref.current?.contains?.(event.target));
          if (!startedInside) {
            handler(event);
          }
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
    [handler, isDisabled, ...refs]
  );
}
