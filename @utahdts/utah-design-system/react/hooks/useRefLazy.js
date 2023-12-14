import isFunction from 'lodash/isFunction';
import { useRef } from 'react';

/**
 * lazy loads the ref like how useState() can lazy load state via a function
 * @template T
 * @param {T | (() => T)} lazyValue
 * @returns {React.MutableRefObject<T>}
 */
export default (lazyValue) => {
  const isLoadedRef = useRef(false);
  const ref = useRef(/** @type {T} */(undefined));
  if (!isLoadedRef.current) {
    isLoadedRef.current = true;
    ref.current = isFunction(lazyValue) ? lazyValue() : lazyValue;
  }
  return ref;
};
