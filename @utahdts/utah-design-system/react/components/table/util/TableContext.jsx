import { createContext } from 'react';

const TableContext = createContext({
  allData: [],
  filteredData: [],
  // eslint-disable-next-line no-console
  registerSortingRule: (sortingRule) => { console.error('Context not yet initialized: registerSortingRule', sortingRule); },
  // unregister a rule for sorting, generally when a <TableSortingRule> unmounts
  // eslint-disable-next-line no-console
  unregisterSortingRule: (recordFieldPath) => { console.error('Context not yet initialized: unregisterSortingRule', recordFieldPath); },
  // eslint-disable-next-line no-console
  setBodyDataForComponentGuid: (guid, allData, filteredData) => { console.error('Context not yet initialized: setBodyDataForComponentGuid', guid, allData, filteredData); },
  // eslint-disable-next-line no-console
  setState: (arg) => { console.error('Context not yet initialized: setState', arg); },
  state: {},
});
export default TableContext;
