import {
  Accordion,
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
import { Link } from 'react-router-dom';
import { pageUrls } from '../../../../../routing/pageUrls';
import { HeadingWithLink } from '../../../../../staticExamples/HeadingWithLink';
import { examplePresidentsData } from './examplePresidentsData';

const DEFAULT_ITEMS_PER_PAGE = 10;

export function TableDocumentationPaginationTableExample() {
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const paginatedData = usePaginatedList({ list: examplePresidentsData, pageIndex: currentPageIndex, itemsPerPage });

  return (
    <div className="static-example mt-spacing-xl">
      <HeadingWithLink
        headingTag="h3"
        headingTitle="Pagination"
        id="table__paginating-table-example"
        linkUrl="https://github.com/utahdts/utah-design-system/tree/main/utah-design-system-website/src/react/components/websiteContent/library/components/table/exampleTables/TableDocumentationPaginationTableExample.jsx"
      />
      <p className="mb-spacing-xs">
        This table uses a <Link to={pageUrls.pagination}>pagination</Link> component to help spread out the data through several pages.
      </p>
      <p className="mb-spacing-xs">
        The table is styled using a combination of classes:
      </p>
      <ul className="mb-spacing">
        <li>
          <code>.table--lines-x</code> to add vertical lines between rows,
        </li>
        <li>
          <code>.table--alt</code> to add color to alternating rows.
        </li>
      </ul>
      <Accordion
        contentClassName="accordion__content--bordered"
        headerContent={<span>Table Preview</span>}
        headerClassName="button--primary-color button--solid"
        headingLevel={4}
      >
        <TextInput
          id="table-pagination__items-per-page"
          label="Items Per Page"
          onChange={
            (e) => (
              setItemsPerPage(
                Number(e.target.value)
                || DEFAULT_ITEMS_PER_PAGE
              )
            )
          }
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
            id="tableDocumentationPaginationTableExample-pagination"
            onChange={setCurrentPageIndex}
            pageSize={itemsPerPage}
            totalNumberItems={examplePresidentsData.length}
            value={currentPageIndex}
          />
        </div>
      </Accordion>
    </div>
  );
}
