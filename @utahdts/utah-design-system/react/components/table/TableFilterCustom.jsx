import PropTypes from 'prop-types';
import { useContext } from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import TableContext from './util/TableContext';

const propTypes = {
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  innerRef: RefShape,
  id: PropTypes.string,
};
const defaultProps = {
  className: null,
  innerRef: null,
  id: null,
};

function TableFilterCustom({
  children,
  className,
  innerRef,
  id,
  ...rest
}) {
  const { setState: setStateContext, state: stateContext } = useContext(TableContext);
  return (
    <th className={joinClassNames('some-TableFilterCustom-classname', className)} id={id} ref={innerRef} {...rest}>
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
