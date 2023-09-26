// @ts-check
import PropTypes from 'prop-types';
import useTableContext from './hooks/useTableContext';

/**
 * @template TableDataT
 * @typedef {import('../../jsDocTypes').TableContextValue<TableDataT>} TableContextValue
 */

const propTypes = {
  children: PropTypes.func.isRequired,
};
const defaultProps = {};

/**
 * @template TableDataT
 * @param {Object} props
 * @param {(tableContext: TableContextValue<TableDataT>) => (JSX.Element | null)} props.children
 * @returns {JSX.Element | null}
 */
function TableContextConsumer({ children }) {
  return children(useTableContext());
}

TableContextConsumer.propTypes = propTypes;
TableContextConsumer.defaultProps = defaultProps;

export default TableContextConsumer;
