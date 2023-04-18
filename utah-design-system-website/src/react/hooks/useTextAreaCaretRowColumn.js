// @ts-check
import { useState } from 'react';
import useInterval from './useInterval';

/**
 * This ONLY works if line wrapping is turned off because it counts line endings. Otherwise, soft wraps throw off the
 * current line #.
 * @param {React.MutableRefObject<HTMLInputElement>} textAreaRef the textarea for which to track the current cursor position
 * @returns {{ column: number, position: number, row: number }}
 */
export default function useTextAreaCaretRowColumn(textAreaRef) {
  const [rowColumn, setRowColumn] = useState(
    /** @type {{ column: number, position: number, row: number }} */({ column: NaN, position: NaN, row: NaN })
  );

  useInterval(
    () => {
      /** @type {number} */
      const cursorPosition = textAreaRef.current?.selectionStart || 0;
      const textBeforeCursor = textAreaRef.current?.textContent?.substring(0, cursorPosition) || '';
      const lastNewLineIndex = textBeforeCursor.lastIndexOf('\n');

      setRowColumn({
        column: (textBeforeCursor.substring(lastNewLineIndex + 1) || '').length + 1,
        position: cursorPosition,
        row: (textBeforeCursor.match(/\r?\n/gm) || []).length + 1,
      });
    },
    500
  );

  return rowColumn;
}
