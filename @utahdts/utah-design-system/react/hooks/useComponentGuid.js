import { v4 as uuid } from 'uuid';
import useStateEffect from './useStateEffect';

// this allows a single component to have an unique id.
// this was helpful for a Body's dynamic body data section to report its
// data when there could be more than 1 dynamic body section
// as well rows in a static Table data section to report their data to the Table Context
// to allow the TableFilterSelectAllOptions to see all the data
export default function useComponentGuid() {
  const [guid] = useStateEffect({
    calculateValueFn: () => uuid(),
    dependencyList: [],
  });
  return guid;
}
