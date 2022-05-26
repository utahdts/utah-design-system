import { useRef } from 'react';

// always sets ref to the given value
export default (value) => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};
