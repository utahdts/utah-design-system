import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import TableContext from './util/TableContext';

const propTypes = {
  children: PropTypes.node.isRequired,
  defaultValue: PropTypes.shape({}),
  className: PropTypes.string,
  innerRef: RefShape,
  id: PropTypes.string,
  // fires when any filter changes; ie ({ recordFieldPath, value }) => { ... do something ... }
  onChange: PropTypes.func,
  // make sure to useMemo() before passing value in here
  value: PropTypes.shape({}),
};
const defaultProps = {
  className: null,
  defaultValue: null,
  innerRef: null,
  id: null,
  onChange: null,
  value: null,
};

function TableFilters({
  children,
  className,
  defaultValue,
  innerRef,
  id,
  onChange,
  value,
  ...rest
}) {
  const { setState, state } = useContext(TableContext);

  useEffect(
    () => {
      if (
        state.filterValues.defaultValue
        || state.filterValues.onChange
        || (state.filterValues.value && Object.values(state.filterValues.value).length)
      ) {
        // if you want to do more than one Filters section, then you'll want to update the context's
        // filterValues.onChange to be an array... and maybe some other changes... ymmv
        // eslint-disable-next-line no-console
        console.warn('defaultValue, onChange, or value were already set for Filters. There should only be one <TableFilters/> section in a table.');
      }

      setState((draftState) => {
        draftState.filterValues.defaultValue = defaultValue;
        draftState.filterValues.onChange = onChange;
        draftState.filterValues.value = value || draftState.filterValues.value;
      });

      return () => {
        setState((draftState) => {
          draftState.filterValues.defaultValue = null;
          draftState.filterValues.onChange = null;
          draftState.filterValues.value = {};
        });
      };
    },
    []
  );

  // when value changes, update state...
  useEffect(
    () => {
      setState((draftState) => {
        draftState.filterValues.value = value || draftState.filterValues.value;
      });
    },
    [value]
  );

  return (
    <tr className={joinClassNames('table-header__row table-header__row--filters', className)} id={id} ref={innerRef} {...rest}>
      {children}
    </tr>
  );
}

TableFilters.propTypes = propTypes;
TableFilters.defaultProps = defaultProps;

export default TableFilters;
