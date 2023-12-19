import { useTableContext } from './hooks/useTableContext';

/**
 * @template TableDataT
 * @typedef {import('@utahdts/utah-design-system').TableContextValue<TableDataT>} TableContextValue
 */

/**
 * @template TableDataT
 * @param {object} props
 * @param {(tableContext: TableContextValue<TableDataT>) => (JSX.Element | null)} props.children
 * @returns {React.JSX.Element | null}
 */
export function TableContextConsumer({ children }) {
  return children(useTableContext());
}
