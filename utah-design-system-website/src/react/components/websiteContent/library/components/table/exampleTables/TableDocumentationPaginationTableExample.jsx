import {
  Pagination,
  Table,
  TableBody,
  TableBodyData,
  TableBodyDataCellTemplate,
  TableBodyDataRowTemplate, TableHead,
  TableHeadCell,
  TableHeadRow,
  TableWrapper,
  TextInput,
  usePaginatedList
} from '@utahdts/utah-design-system';
import { useState } from 'react';
import HeadingWithLink from '../../../../../staticExamples/HeadingWithLink';
import examplePresidentsData from './examplePresidentsData';

const propTypes = {};
const defaultProps = {};

const DEFAULT_ITEMS_PER_PAGE = 10;
function TableDocumentationPaginationTableExample() {
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const paginatedData = usePaginatedList({ list: examplePresidentsData, pageIndex: currentPageIndex, itemsPerPage });

  return (
    <div className="documentation-content mt-spacing-xl">
      <HeadingWithLink
        headingTag="h3"
        headingTitle="Pagination"
        id="table__paginating-table-example"
        linkUrl="https://github.com/utahdts/utah-design-system/tree/main/utah-design-system-website/src/react/components/websiteContent/library/components/table/exampleTables/TableDocumentationPaginationTableExample.jsx"
      />
      <TextInput
        id="table-pagination__items-per-page"
        label="Items Per Page"
        onChange={(e) => setItemsPerPage(Number(e.target.value) || DEFAULT_ITEMS_PER_PAGE)}
        value={`${itemsPerPage}`}
      />
      <TableWrapper>
        <Table className="table table--full-width table--alt table--lines-x">
          <TableHead>
            <TableHeadRow>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Nth President</TableHeadCell>
              <TableHeadCell>Party</TableHeadCell>
              <TableHeadCell>Inauguration</TableHeadCell>
            </TableHeadRow>
          </TableHead>

          <TableBody>
            <TableBodyData records={paginatedData} recordIdField="id">
              <TableBodyDataRowTemplate>
                <TableBodyDataCellTemplate recordFieldPath="name" />
                <TableBodyDataCellTemplate recordFieldPath="nthPresident" />
                <TableBodyDataCellTemplate recordFieldPath="politicalParty" />
                <TableBodyDataCellTemplate recordFieldPath="inauguration" />
              </TableBodyDataRowTemplate>
            </TableBodyData>
          </TableBody>
        </Table>
      </TableWrapper>

      {/* Pagination goes OUTSIDE the table; Pagination can be used for anything anywhere. */}
      <div className="flex justify-center">
        <Pagination
          className="mt-spacing"
          onChange={setCurrentPageIndex}
          pageSize={itemsPerPage}
          totalNumberItems={examplePresidentsData.length}
          value={currentPageIndex}
        />
      </div>
    </div>
  );
}

TableDocumentationPaginationTableExample.propTypes = propTypes;
TableDocumentationPaginationTableExample.defaultProps = defaultProps;

export default TableDocumentationPaginationTableExample;
