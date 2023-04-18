import { useEffect } from 'react';

export default function useMountingTracker(title) {
  console.log(`${title}: rendering`);
  useEffect(
    () => {
      console.log(`+ ${title}: mounted`);
      return () => {
        console.log(`- ${title}: unmounted`);
      };
    },
    []
  );
}
