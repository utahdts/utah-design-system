// @ts-check
import { useTableContext } from './hooks/useTableContext';

/**
 * @template TableDataT
 * @typedef {import('../../jsDocTypes').TableContextValue<TableDataT>} TableContextValue
 */

/**
 * @template TableDataT
 * @param {Object} props
 * @param {(tableContext: TableContextValue<TableDataT>) => (JSX.Element | null)} props.children
 * @returns {JSX.Element | null}
 */
export function TableContextConsumer({ children }) {
  return children(useTableContext());
}
