import {
  joinClassNames,
  Pagination,
  RefShape,
  Table,
  TableBody,
  TableBodyData,
  TableBodyDataCellTemplate,
  TableBodyDataRowTemplate,
  TableFilters,
  TableFilterTextInput,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableSortingRule,
  tableSortingRuleFieldType,
  TableSortingRules,
  TableWrapper,
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { useImmer } from 'use-immer';
import stateSymbols from '../../../../../consts/stateSymbols';
import TableExamplePropsShape from '../../../../../propTypesShapes/TableExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: TableExamplePropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

const ITEMS_PER_PAGE = 5;

function TableExampleRender({
  state: {
    props: {
      className,
      id,
      isFiltering,
      isPaginating,
      isSorting,
    },
  },
  innerRef,
}) {
  const [currentPageIndex, setCurrentPageIndex] = useImmer(0);

  return (
    <>
      <TableWrapper
        id={id}
        innerRef={innerRef}
        style={{ width: '100%' }}
      >
        <Table id="example-interactive-table" className={joinClassNames('table table--lines-x table--v-align-center table--full-width', className)}>
          <TableHead>
            {
              isSorting
                ? (
                  <TableSortingRules defaultValue="category">
                    <TableSortingRule recordFieldPath="category" />
                    <TableSortingRule recordFieldPath="symbol" />
                    <TableSortingRule recordFieldPath="year" fieldType={tableSortingRuleFieldType.NUMBER} defaultIsAscending={false} />
                  </TableSortingRules>
                )
                : null
            }
            {
              isFiltering
                ? (
                  <TableFilters>
                    <TableFilterTextInput recordFieldPath="category" />
                    <TableFilterTextInput recordFieldPath="symbol" />
                    <TableFilterTextInput recordFieldPath="year" />
                  </TableFilters>
                )
                : null
            }
            <TableHeadRow>
              <TableHeadCell recordFieldPath="category">Category</TableHeadCell>
              <TableHeadCell recordFieldPath="symbol">Symbol</TableHeadCell>
              <TableHeadCell recordFieldPath="year">As Of Year</TableHeadCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableBodyData pagination={isPaginating ? { currentPageIndex, itemsPerPage: ITEMS_PER_PAGE } : undefined} records={stateSymbols} recordIdField="category">
              <TableBodyDataRowTemplate>
                <TableBodyDataCellTemplate recordFieldPath="category" />
                <TableBodyDataCellTemplate recordFieldPath="symbol" />
                <TableBodyDataCellTemplate recordFieldPath="year" />
              </TableBodyDataRowTemplate>
            </TableBodyData>
          </TableBody>
        </Table>
      </TableWrapper>
      {
        isPaginating
          ? (
            <div className="flex justify-center">
              <Pagination
                className="mt-spacing"
                onChange={setCurrentPageIndex}
                pageSize={ITEMS_PER_PAGE}
                totalNumberItems={stateSymbols.length}
                value={currentPageIndex}
              />
            </div>
          )
          : null
      }
    </>
  );
}

TableExampleRender.propTypes = propTypes;
TableExampleRender.defaultProps = defaultProps;

export default TableExampleRender;
