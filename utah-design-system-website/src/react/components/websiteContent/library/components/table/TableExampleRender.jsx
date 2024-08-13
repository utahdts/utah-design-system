import {
  Table,
  TableBody,
  TableBodyData,
  TableBodyDataCellTemplate,
  TableBodyDataRowTemplate,
  TableFilterTextInput,
  TableFilters,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TablePagination,
  TableSortingRule,
  TableSortingRules,
  TableWrapper,
  joinClassNames,
  tableSortingRuleFieldType
} from '@utahdts/utah-design-system';
import { stateSymbols } from '../../../../../consts/stateSymbols';

/** @typedef {import('utah-design-system-website').TableExamplePropsShape} TableExamplePropsShape */

/**
 * @param {object} props
 * @param {{props: TableExamplePropsShape}} props.state
 * @param {import('react').RefObject<HTMLDivElement>} props.innerRef
 * @returns {import('react').JSX.Element}
 */
export function TableExampleRender({
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
  return (
    <TableWrapper
      id={id}
      innerRef={innerRef}
      // @ts-expect-error
      style={{ width: '100%' }}
    >
      <Table id={id} className={joinClassNames('table table--lines-x table--v-align-center table--full-width', className)}>
        <TableHead>
          {
            isSorting
              ? (
                <TableSortingRules defaultValue="category">
                  <TableSortingRule a11yLabel="Category" recordFieldPath="category" />
                  <TableSortingRule a11yLabel="Symbol" recordFieldPath="symbol" />
                  <TableSortingRule a11yLabel="Year" recordFieldPath="year" fieldType={tableSortingRuleFieldType.NUMBER} defaultIsAscending={false} />
                </TableSortingRules>
              )
              : null
          }
          {
            isFiltering
              ? (
                <TableFilters>
                  <TableFilterTextInput a11yLabel="Category" recordFieldPath="category" />
                  <TableFilterTextInput a11yLabel="Symbol" recordFieldPath="symbol" />
                  <TableFilterTextInput a11yLabel="Year" recordFieldPath="year" />
                </TableFilters>
              )
              : null
          }
          <TableHeadRow>
            {/*
                NOTE: inline styles are not encouraged. They are used here because this is a light weight example, but
                please use className or a styling library instead of inline styles.
               */}
            <TableHeadCell
              recordFieldPath="category"
              // @ts-expect-error
              style={{ width: '40%' }}
            >
              Category
            </TableHeadCell>
            <TableHeadCell
              recordFieldPath="symbol"
              // @ts-expect-error
              style={{ width: '40%' }}
            >
              Symbol
            </TableHeadCell>
            <TableHeadCell
              recordFieldPath="year"
              // @ts-expect-error
              style={{ width: '20%' }}
            >
              Year
            </TableHeadCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          <TableBodyData records={stateSymbols} recordIdField="category">
            <TableBodyDataRowTemplate>
              <TableBodyDataCellTemplate recordFieldPath="category" />
              <TableBodyDataCellTemplate recordFieldPath="symbol" />
              <TableBodyDataCellTemplate recordFieldPath="year" />
            </TableBodyDataRowTemplate>
          </TableBodyData>
        </TableBody>
      </Table>
      {
        isPaginating
          ? (
            <div className="flex justify-center">
              <TablePagination
                className="mt-spacing"
                id="table-example-render-pagination-id"
                itemsPerPage={5}
              />
            </div>
          )
          : null
      }
    </TableWrapper>
  );
}
