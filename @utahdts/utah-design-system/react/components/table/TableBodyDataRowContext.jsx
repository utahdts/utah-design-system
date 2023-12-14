import { createContext } from 'react';

/**
 * @template TableDataT
 * @typedef {import('@utahdts/utah-design-system').TableBodyDataRowContextValue<TableDataT>} TableBodyDataRowContextValue
 */

/** @template TableDataT */
export const TableBodyDataRowContext = /** @type {typeof createContext<TableBodyDataRowContextValue<TableDataT>>} */ (createContext)({
  record: null,
});
