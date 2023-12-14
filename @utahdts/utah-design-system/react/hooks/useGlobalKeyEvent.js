import { useEffect, useRef, useState } from 'react';

/**
 * @template KeyboardEventHandlerT
 * @param {Object} params
 * @param {string} params.whichKeyCode
 * @param {React.KeyboardEventHandler<KeyboardEventHandlerT>} [params.onKeyDown]
 * @param {React.KeyboardEventHandler<KeyboardEventHandlerT>} [params.onKeyUp]
 */
export default function useGlobalKeyEvent({ whichKeyCode, onKeyDown, onKeyUp }) {
  const [keyPressed, setKeyPressed] = useState(false);

  const keydownFuncRef = useRef(/** @type {React.KeyboardEventHandler<KeyboardEventHandlerT> | null} */(null));
  useEffect(
    () => {
      keydownFuncRef.current = (e) => {
        // @ts-ignore
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
      // @ts-ignore
      document.addEventListener('keydown', keydownFuncRef.current);
      // @ts-ignore
      document.addEventListener('keyup', keydownFuncRef.current);

      return () => {
        if (keydownFuncRef.current) {
          // @ts-ignore
          document.removeEventListener('keydown', keydownFuncRef.current);
          // @ts-ignore
          document.removeEventListener('keyup', keydownFuncRef.current);
        }
        keydownFuncRef.current = null;
      };
    },
    [onKeyDown, onKeyUp, whichKeyCode]
  );

  return keyPressed;
}
