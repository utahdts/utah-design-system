import isFunction from 'lodash/isFunction';
import { useRef } from 'react';

// lazy loads the ref like how useState() can lazy load state via a function
export default (lazyFunc) => {
  const ref = useRef(undefined);
  if (ref.current === undefined) {
    ref.current = (lazyFunc && isFunction(lazyFunc)) ? lazyFunc() : lazyFunc;
  }
  return ref;
};
