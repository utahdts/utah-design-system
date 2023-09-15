// @ts-check
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import TableContext from './util/TableContext';

/** @typedef {import('../../jsDocTypes').TableContextStateFilterValue} TableContextStateFilterValue */
/** @typedef {import('../../jsDocTypes').TableContextStateFilterValueObject} TableContextStateFilterValueObject */

const propTypes = {
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  innerRef: RefShape,
};
const defaultProps = {
  className: null,
  id: null,
  innerRef: null,
};

/** @typedef {(setter: ((TableContextStateFilterValueObject) => void)) => void} SetterFunc */

/**
 * @template TableDataT
 * @param {Object} props
 * @param {(params: {filterValues: TableContextStateFilterValueObject, setFilterValues: SetterFunc}) => JSX.Element | null} props.children
 * @param {string | null} [props.className]
 * @param {string | null} [props.id]
 * @param {React.RefObject | null} [props.innerRef]
 * @returns {JSX.Element}
 */
function TableFilterCustom({
  children,
  className = null,
  id = null,
  innerRef = null,
  ...rest
}) {
  const { setState: setStateContext, state: stateContext } = useContext(TableContext);
  return (
    <th className={joinClassNames('table-header__cell', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      {children({
        // current filter values (key => value)
        filterValues: stateContext.filterValues.value,

        // 'setter' function that will update just the filterValues.value of the table context
        setFilterValues: (setFilterValuesFunc) => {
          setStateContext((draftStateContext) => {
            setFilterValuesFunc(draftStateContext.filterValues.value);
          });
        },
      })}
    </th>
  );
}

TableFilterCustom.propTypes = propTypes;
TableFilterCustom.defaultProps = defaultProps;

export default TableFilterCustom;
