import { useState } from 'react';
import useFriendlyDocumentEvent from './useFriendlyDocumentEvent';
import useStateRef from './useStateRef';

/**
 * @param shouldBeginDrag (function) determines if a mouse drag should commence; helpful to check if click was in a region before dragging (e => {})
 */
export default ({ shouldBeginDrag }) => {
  const [, setIsDragging, isDraggingRef] = useStateRef(false);
  const [mousePosition, setMousePosition] = useState(null);

  // start drag
  useFriendlyDocumentEvent(
    'onmousedown',
    (e) => {
      if (!shouldBeginDrag || shouldBeginDrag(e)) {
        e.stopPropagation();
        e.preventDefault();

        setIsDragging(true);
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    }
  );

  // do drag
  useFriendlyDocumentEvent(
    'onmouseup',
    (e) => {
      if (isDraggingRef.current) {
        e.stopPropagation();
        e.preventDefault();

        setMousePosition(null);
        setIsDragging(false);
      }
    }
  );

  // end drag
  useFriendlyDocumentEvent(
    'onmousemove',
    (e) => {
      if (isDraggingRef.current) {
        e.stopPropagation();
        e.preventDefault();

        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    }
  );

  return {
    isDragging: isDraggingRef.current,
    mousePosition,
  };
};
