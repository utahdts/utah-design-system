import { useContext } from 'react';
import { TableContext } from '../util/TableContext';

export function useTableContext() {
  return useContext(TableContext);
}
