import { useEffect, useRef, useState } from 'react';

/**
 *
 * @param {object} param
 * @param {string} param.whichKeyCode
 * @param {import('react').KeyboardEventHandler} [param.onKeyDown]
 * @param {import('react').KeyboardEventHandler} [param.onKeyUp]
 * @returns {boolean}
 */
export function useKeyEventGlobal({ whichKeyCode, onKeyDown, onKeyUp }) {
  const [keyPressed, setKeyPressed] = useState(false);

  const keydownFuncRef = useRef(/** @type {import('react').KeyboardEventHandler | null} */(null));
  useEffect(
    () => {
      keydownFuncRef.current = (e) => {
        if (
          e.code === whichKeyCode
          // @ts-ignore
          || e.keyCode === whichKeyCode
          || e.key === whichKeyCode
        ) {
          if (e.type === 'keydown') {
            setKeyPressed(true);
            if (onKeyDown) {
              onKeyDown(e);
            }
          } else if (e.type === 'keyup') {
            setKeyPressed(false);
            if (onKeyUp) {
              onKeyUp(e);
            }
          }
        }
      };
      // @ts-ignore
      document.addEventListener('keydown', keydownFuncRef.current);
      // @ts-ignore
      document.addEventListener('keyup', keydownFuncRef.current);

      return () => {
        // @ts-ignore
        document.removeEventListener('keydown', keydownFuncRef.current);
        // @ts-ignore
        document.removeEventListener('keyup', keydownFuncRef.current);
        keydownFuncRef.current = null;
      };
    },
    [onKeyDown, onKeyUp, whichKeyCode]
  );

  return keyPressed;
}
