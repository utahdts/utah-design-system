// @ts-check
import {
  joinClassNames,
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
  TablePagination,
  TableSortingRule,
  tableSortingRuleFieldType,
  TableSortingRules,
  TableWrapper
} from '@utahdts/utah-design-system';
import React from 'react';
import stateSymbols from '../../../../../consts/stateSymbols';

/** @typedef {import('../../../../../../typedefs.d').TableExamplePropsShape} TableExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: TableExamplePropsShape}>} props.setState
 * @param {{props: TableExamplePropsShape}} props.state
 * @param {React.RefObject} props.innerRef
 * @returns {JSX.Element}
 */
export default function TableExampleRender({
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
      // @ts-ignore
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
                  <TableFilterTextInput recordFieldPath="category" />
                  <TableFilterTextInput recordFieldPath="symbol" />
                  <TableFilterTextInput recordFieldPath="year" />
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
              // @ts-ignore
              style={{ width: '40%' }}
            >
              Category
            </TableHeadCell>
            <TableHeadCell
              recordFieldPath="symbol"
              // @ts-ignore
              style={{ width: '40%' }}
            >
              Symbol
            </TableHeadCell>
            <TableHeadCell
              recordFieldPath="year"
              // @ts-ignore
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
                pageSize={5}
              />
            </div>
          )
          : null
      }
    </TableWrapper>
  );
}
