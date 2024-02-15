import React, { useState } from 'react';
import { useFriendlyDocumentEvent } from './useFriendlyDocumentEvent';
import { useStateRef } from './useStateRef';

/**
 * @typedef MousePosition {
 *  @property {number} x
 *  @property {number} y
 * }
 */

/**
 * @param {object} param
 * @param {(e: React.MouseEvent) => boolean} param.shouldBeginDrag helpful to check if click was in a region before dragging (e => {})
 * @returns {{ isDragging: boolean, mousePosition: MousePosition | null }}
 */
export function useMousePositionTracker({ shouldBeginDrag }) {
  const [, setIsDragging, isDraggingRef] = useStateRef(false);
  const [mousePosition, setMousePosition] = useState(/** @type {MousePosition | null} */(null));

  // start drag
  useFriendlyDocumentEvent(
    'onmousedown',
    /** @param {import('react').MouseEvent} e */
    (e) => {
      if (!shouldBeginDrag || shouldBeginDrag(e)) {
        e.stopPropagation();
        e.preventDefault();

        setIsDragging(true);
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    }
  );

  // end drag
  useFriendlyDocumentEvent(
    'onmouseup',
    /** @param {import('react').MouseEvent} e */
    (e) => {
      if (isDraggingRef.current) {
        e.stopPropagation();
        e.preventDefault();

        setMousePosition(null);
        setIsDragging(false);
      }
    }
  );

  // do drag
  useFriendlyDocumentEvent(
    'onmousemove',
    /** @param {import('react').MouseEvent} e */
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
