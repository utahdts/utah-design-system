// @ts-check
import { createContext } from 'react';

/**
 * @template TableDataT
 * @typedef {import('../../jsDocTypes').TableBodyDataRowContextValue<TableDataT>} TableBodyDataRowContextValue
 */

/** @template TableDataT */
const TableBodyDataRowContext = /** @type {typeof createContext<TableBodyDataRowContextValue<TableDataT>>} */ (createContext)({
  record: null,
});

export default TableBodyDataRowContext;
