import { useCallback } from 'react';

/**
 * @param {HTMLElement | undefined} firstTabElement
 * @param {HTMLElement | undefined} lastTabElement
 * @returns {(...args: any[]) => void} func
 */
export function useHandleTab(firstTabElement, lastTabElement) {
  return useCallback((/** @type {import('react').KeyboardEvent<HTMLDialogElement>} */ e) => {
    if (e.code === 'Tab' || e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstTabElement) {
          lastTabElement?.focus();
          e.preventDefault();
        }
      } else if (document.activeElement === lastTabElement) {
        firstTabElement?.focus();
        e.preventDefault();
      }
    }
  }, [firstTabElement, lastTabElement]);
}
