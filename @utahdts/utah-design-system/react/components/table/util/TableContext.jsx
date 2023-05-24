import { createContext } from 'react';

const TableContext = createContext({
  allData: [],
  filteredData: [],
  registerSortingRule: (sortingRule) => { console.error('Context not yet initialized: registerSortingRule', sortingRule); },
  // unregister a rule for sorting, generally when a <TableSortingRule> unmounts
  unregisterSortingRule: (recordFieldPath) => { console.error('Context not yet initialized: unregisterSortingRule', recordFieldPath); },
  setBodyDataForComponentGuid: (guid, allData, filteredData) => { console.error('Context not yet initialized: setBodyDataForComponentGuid', guid, allData, filteredData); },
  setState: (arg) => { console.error('Context not yet initialized: setState', arg); },
  state: {},
});
export default TableContext;
