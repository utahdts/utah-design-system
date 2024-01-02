import { isFunction } from 'lodash';
import { useRef } from 'react';

/**
 * lazy loads the ref like how useState() can lazy load state via a function
 * @template T
 * @param {T | (() => T)} lazyValue
 * @returns {import('react').MutableRefObject<T>}
 */
export function useRefLazy(lazyValue) {
  const isLoadedRef = useRef(false);
  const ref = useRef(/** @type {T} */(undefined));
  if (!isLoadedRef.current) {
    isLoadedRef.current = true;
    ref.current = isFunction(lazyValue) ? lazyValue() : lazyValue;
  }
  return ref;
}
