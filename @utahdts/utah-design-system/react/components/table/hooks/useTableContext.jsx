import { useContext } from 'react';
import TableContext from '../util/TableContext';

export default function useTableContext() {
  return useContext(TableContext);
}
