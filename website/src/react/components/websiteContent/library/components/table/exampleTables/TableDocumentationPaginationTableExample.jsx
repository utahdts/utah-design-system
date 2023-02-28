import { useState } from 'react';
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
  usePaginatedList,
} from '@utahdts/utah-design-system';
import examplePresidentsData from './examplePresidentsData';

const propTypes = {};
const defaultProps = {};

const DEFAULT_ITEMS_PER_PAGE = 10;
function TableDocumentationPaginationTableExample() {
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const paginatedData = usePaginatedList({ list: examplePresidentsData, pageIndex: currentPageIndex, itemsPerPage });

  return (
    <div className="documentation-content">
      <h3 id="table__paginating-table-example">Table Example: Pagination</h3>
      <TextInput
        id="table-pagination__items-per-page"
        label="Items Per Page"
        onChange={(e) => setItemsPerPage(Number(e.target.value) || DEFAULT_ITEMS_PER_PAGE)}
        value={`${itemsPerPage}`}
      />
      <TableWrapper>
        <Table>
          <TableHead>
            <TableHeadRow>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Nth President</TableHeadCell>
              <TableHeadCell>Party</TableHeadCell>
              <TableHeadCell>Inauguration</TableHeadCell>
              <TableHeadCell>Fun Facts</TableHeadCell>
              <TableHeadCell>Birth Place</TableHeadCell>
            </TableHeadRow>
          </TableHead>

          <TableBody>
            <TableBodyData records={paginatedData} recordIdField="id">
              <TableBodyDataRowTemplate>
                <TableBodyDataCellTemplate recordFieldPath="name" />
                <TableBodyDataCellTemplate recordFieldPath="nthPresident" />
                <TableBodyDataCellTemplate recordFieldPath="politicalParty" />
                <TableBodyDataCellTemplate recordFieldPath="inauguration" />
                <TableBodyDataCellTemplate recordFieldPath="funFacts" />
                <TableBodyDataCellTemplate recordFieldPath="birthPlace">
                  {({ record }) => [record.birthplace.county, record.birthplace.state].join(', ')}
                </TableBodyDataCellTemplate>
              </TableBodyDataRowTemplate>
            </TableBodyData>
          </TableBody>
        </Table>
      </TableWrapper>

      {/* Pagination goes OUTSIDE the table; Pagination can be used for anything anywhere. */}
      <Pagination
        onChange={setCurrentPageIndex}
        pageSize={itemsPerPage}
        totalNumberItems={examplePresidentsData.length}
        value={currentPageIndex}
      />
    </div>
  );
}

TableDocumentationPaginationTableExample.propTypes = propTypes;
TableDocumentationPaginationTableExample.defaultProps = defaultProps;

export default TableDocumentationPaginationTableExample;
