import { useEffect, useRef } from 'react';

/** @param {string} title */
export function useMountingTracker(title) {
  const originalTitleRef = useRef(title);

  // eslint-disable-next-line no-console
  console.log(`${title}: rendering...`);
  useEffect(
    () => {
      if (originalTitleRef.current !== title) {
        throw new Error(`useMountingTracker: title changed! '${originalTitleRef.current}' => '${title}'`);
      }
      // eslint-disable-next-line no-console
      console.log(`+ ${title}: mounted`);
      return () => {
        // eslint-disable-next-line no-console
        console.log(`- ${title}: unmounted`);
      };
    },
    [title]
  );
}
