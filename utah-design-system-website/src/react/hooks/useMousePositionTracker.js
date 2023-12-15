import { useState } from 'react';
import { useFriendlyDocumentEvent } from './useFriendlyDocumentEvent';
import { useStateRef } from './useStateRef';

/**
 * @typedef MousePosition {
 *  @property {number} x
 *  @property {number} y
 * }
 */

/**
 * @param {Object} param
 * @param {(e: React.MouseEvent) => boolean} param.shouldBeginDrag helpful to check if click was in a region before dragging (e => {})
 * @returns {{ isDragging: boolean, mousePosition: MousePosition }}
 */
export function useMousePositionTracker({ shouldBeginDrag }) {
  const [, setIsDragging, isDraggingRef] = useStateRef(false);
  const [mousePosition, setMousePosition] = useState(/** @type {MousePosition} */({ x: NaN, y: NaN }));

  // start drag
  useFriendlyDocumentEvent(
    'onmousedown',
    /** @param {React.MouseEvent} e */
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
    /** @param {React.MouseEvent} e */
    (e) => {
      if (isDraggingRef.current) {
        e.stopPropagation();
        e.preventDefault();

        setMousePosition({ x: NaN, y: NaN });
        setIsDragging(false);
      }
    }
  );

  // end drag
  useFriendlyDocumentEvent(
    'onmousemove',
    /** @param {React.MouseEvent} e */
    (e) => {
      if (isDraggingRef.current) {
        e.stopPropagation();
        e.preventDefault();

        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    }
  );

  return {
    isDragging: !!isDraggingRef.current,
    mousePosition,
  };
}
