import { useEffect, useRef, useState } from 'react';

/**
 * @template KeyboardEventHandlerT
 * @param {object} params
 * @param {string} params.whichKeyCode https://www.w3.org/TR/uievents-key/#named-key-attribute-values
 * @param {import('react').KeyboardEventHandler<KeyboardEventHandlerT>} [params.onKeyDown]
 * @param {import('react').KeyboardEventHandler<KeyboardEventHandlerT>} [params.onKeyUp]
 * @returns {boolean}
 */
export function useGlobalKeyEvent({ whichKeyCode, onKeyDown, onKeyUp }) {
  const [keyPressed, setKeyPressed] = useState(false);

  const keydownFuncRef = useRef(/** @type {import('react').KeyboardEventHandler<KeyboardEventHandlerT> | null} */(null));
  useEffect(
    () => {
      keydownFuncRef.current = (e) => {
        // @ts-expect-error
        if (e.code === whichKeyCode || e.keyCode === whichKeyCode || e.key === whichKeyCode) {
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
      // @ts-expect-error
      document.addEventListener('keydown', keydownFuncRef.current);
      // @ts-expect-error
      document.addEventListener('keyup', keydownFuncRef.current);

      return () => {
        if (keydownFuncRef.current) {
          // @ts-expect-error
          document.removeEventListener('keydown', keydownFuncRef.current);
          // @ts-expect-error
          document.removeEventListener('keyup', keydownFuncRef.current);
        }
        keydownFuncRef.current = null;
      };
    },
    [onKeyDown, onKeyUp, whichKeyCode]
  );

  return keyPressed;
}
