import { useMemo } from 'react';
import { useImmer } from 'use-immer';
import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';
import TableContext from './TableContext';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  innerRef: RefShape,
  id: PropTypes.string,
};
const defaultProps = {
  className: null,
  innerRef: null,
  id: null,
};

function TableWrapper({
  children,
  className,
  innerRef,
  id,
  ...rest
}) {
  const [state, setState] = useImmer({});

  const contextValue = useMemo(
    () => ({
      setState,
      state,
    }),
    [state]
  );

  return (
    <TableContext.Provider value={contextValue}>
      <div className={joinClassNames('some-table-wrapper-classname', className)} id={id} ref={innerRef} {...rest}>
        {children}
      </div>
    </TableContext.Provider>
  );
}

TableWrapper.propTypes = propTypes;
TableWrapper.defaultProps = defaultProps;

export default TableWrapper;
