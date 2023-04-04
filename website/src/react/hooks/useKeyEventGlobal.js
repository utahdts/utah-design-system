import { useEffect, useRef, useState } from 'react';

export default ({ whichKeyCode, onKeyDown, onKeyUp }) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const keydownFuncRef = useRef();
  useEffect(() => {
    keydownFuncRef.current = (e) => {
      if (
        e.code === whichKeyCode
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
    document.addEventListener('keydown', keydownFuncRef.current);
    document.addEventListener('keyup', keydownFuncRef.current);

    return () => {
      document.removeEventListener('keydown', keydownFuncRef.current);
      document.removeEventListener('keyup', keydownFuncRef.current);
      keydownFuncRef.current = null;
    };
  }, []);

  return keyPressed;
};
