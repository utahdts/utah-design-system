import { useCallback } from 'react';

/**
 * @param {import('react').KeyboardEventHandler} [onEscape]
 * @returns {(...args: any[]) => void} func
 */
export function useHandleEscape(onEscape) {
  return useCallback(
    (/** @type {import('react').KeyboardEvent<HTMLDialogElement>} */ e) => {
      if (e.code === 'Escape' || e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        if (onEscape) {
          onEscape(e);
        }
      }
    },
    [onEscape]
  );
}
