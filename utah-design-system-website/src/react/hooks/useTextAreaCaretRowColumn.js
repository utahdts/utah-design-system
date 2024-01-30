import { useInterval, useRefAlways } from '@utahdts/utah-design-system';
import { useState } from 'react';

/**
 * This ONLY works if line wrapping is turned off because it counts line endings. Otherwise, soft wraps throw off the
 * current line #.
 * @param {import('react').MutableRefObject<HTMLTextAreaElement | null>} textAreaRef the textarea for which to track the current cursor position
 * @returns {{ column: number, position: number, row: number }}
 */
export function useTextAreaCaretRowColumn(textAreaRef) {
  const [rowColumn, setRowColumn] = useState(
    /** @type {{ column: number, position: number, row: number }} */({ column: NaN, position: NaN, row: NaN })
  );
  const rowColumnRef = useRefAlways(rowColumn);

  useInterval(
    () => {
      /** @type {number} */
      const cursorPosition = textAreaRef.current?.selectionStart || 0;
      const textBeforeCursor = textAreaRef.current?.textContent?.substring(0, cursorPosition) || '';
      const lastNewLineIndex = textBeforeCursor.lastIndexOf('\n');

      const newColumn = (textBeforeCursor.substring(lastNewLineIndex + 1) || '').length + 1;
      const newRow = (textBeforeCursor.match(/\r?\n/gm) || []).length + 1;
      if (
        rowColumnRef.current.column !== newColumn
        || rowColumnRef.current.position !== cursorPosition
        || rowColumnRef.current.row !== newRow
      ) {
        setRowColumn({
          column: newColumn,
          position: cursorPosition,
          row: newRow,
        });
      }
    },
    500
  );

  return rowColumn;
}
