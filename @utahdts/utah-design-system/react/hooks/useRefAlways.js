import { useRef } from 'react';

/**
 * always sets ref to the given value
 * @template UseRefAlwaysT
 * @param {UseRefAlwaysT} value
 * @return {React.MutableRefObject<UseRefAlwaysT>}
 */
export function useRefAlways(value) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}
