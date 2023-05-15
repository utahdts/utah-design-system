import { useEffect } from 'react';

export default function useMountingTracker(title) {
  // eslint-disable-next-line no-console
  console.log(`${title}: rendering`);
  useEffect(
    () => {
      // eslint-disable-next-line no-console
      console.log(`+ ${title}: mounted`);
      return () => {
        // eslint-disable-next-line no-console
        console.log(`- ${title}: unmounted`);
      };
    },
    []
  );
}
