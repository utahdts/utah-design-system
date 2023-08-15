// @ts-check
import { useEffect, useRef, useState } from 'react';

/** @typedef {import('../jsDocTypes').EventAction} EventAction */

/**
 * @param {Object} params
 * @param {string} params.whichKeyCode
 * @param {EventAction} params.onKeyDown
 * @param {EventAction} params.onKeyUp
 */
export default ({ whichKeyCode, onKeyDown, onKeyUp }) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const keydownFuncRef = useRef(/** @type {EventAction | null} */(null));
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
      document.addEventListener('keydown', keydownFuncRef.current);
      document.addEventListener('keyup', keydownFuncRef.current);

      return () => {
        if (keydownFuncRef.current) {
          document.removeEventListener('keydown', keydownFuncRef.current);
          document.removeEventListener('keyup', keydownFuncRef.current);
        }
        keydownFuncRef.current = null;
      };
    },
    []
  );

  return keyPressed;
};
