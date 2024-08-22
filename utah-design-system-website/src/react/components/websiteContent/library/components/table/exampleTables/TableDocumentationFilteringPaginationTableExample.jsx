import {
  Accordion,
  Table,
  TableBody,
  TableBodyData,
  TableBodyDataCellTemplate,
  TableBodyDataRowTemplate,
  TableFilterComboBoxAllOptions,
  TableFilterDateRange,
  TableFilterNone,
  TableFilterTextInput,
  TableFilters,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TablePagination,
  TableWrapper,
  TextInput
} from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { pageUrls } from '../../../../../routing/pageUrls';
import { HeadingWithLink } from '../../../../../staticExamples/HeadingWithLink';
import { examplePresidentsData } from './examplePresidentsData';

const DEFAULT_ITEMS_PER_PAGE = 10;
export function TableDocumentationFilteringPaginationTableExample() {
  const [itemsPerPage, setItemsPerPage] = useImmer(DEFAULT_ITEMS_PER_PAGE);

  return (
    <div className="static-example mt-spacing-xl">
      <HeadingWithLink
        headingTag="h3"
        headingTitle="Filtering & Pagination"
        id="table__paginating-filtering-table-example"
        linkUrl="https://github.com/utahdts/utah-design-system/tree/main/utah-design-system-website/src/react/components/websiteContent/library/components/table/exampleTables/TableDocumentationFilteringPaginationTableExample.jsx"
      />
      <p className="mb-spacing-xs">
        This table uses a <Link to={pageUrls.pagination}>pagination</Link> component to help spread out the data through several pages while
        also keeping in sync with the filtering of the data.
      </p>
      <Accordion
        id="table-example-filtering-pagination"
        contentClassName="accordion__content--bordered"
        headerContent={<span>Table Preview</span>}
        headerClassName="button--primary-color button--solid"
        headingLevel={4}
      >
        <TextInput
          id="table-pagination__items-per-page_filtering"
          label="Items Per Page"
          onChange={(e) => setItemsPerPage(Math.max(1, Number(e.target.value)) || DEFAULT_ITEMS_PER_PAGE)}
          value={`${itemsPerPage}`}
        />
        <TableWrapper>
          <Table className="table table--full-width table--alt table--lines-x table--min-height">
            <TableHead>
              <TableFilters>
                {/* Example of an "uncontrolled" filter; filtering works, but parent component does not know the current filter value */}
                <TableFilterTextInput a11yLabel="Name" recordFieldPath="name" />

                {/* Skip a column by using the "None" filter component */}
                <TableFilterNone><span className="visually-hidden">No filter available for this column</span></TableFilterNone>

                {/*
                  Present a select input of the possible values from which to filter;
                  Loads all the possible values from the data for the give recordFieldPath and creates options for the
                  found values.
                */}
                <TableFilterComboBoxAllOptions a11yLabel="Party" recordFieldPath="politicalParty" />

                {/* Date range filtering popup */}
                <TableFilterDateRange
                  a11yLabel="Inauguration"
                  id="table-filtering-pagination-inauguration"
                  recordFieldPath="inauguration"
                />
              </TableFilters>
              <TableHeadRow>
                <TableHeadCell recordFieldPath="name">Name</TableHeadCell>
                <TableHeadCell recordFieldPath="nthPresident">No.</TableHeadCell>
                <TableHeadCell recordFieldPath="politicalParty">Party</TableHeadCell>
                <TableHeadCell recordFieldPath="inauguration">Inauguration</TableHeadCell>
              </TableHeadRow>
            </TableHead>
            <TableBody>
              <TableBodyData records={examplePresidentsData} recordIdField="id">
                <TableBodyDataRowTemplate>
                  <TableBodyDataCellTemplate recordFieldPath="name" />
                  <TableBodyDataCellTemplate recordFieldPath="nthPresident" />
                  <TableBodyDataCellTemplate recordFieldPath="politicalParty" />
                  <TableBodyDataCellTemplate recordFieldPath="inauguration" />
                </TableBodyDataRowTemplate>
              </TableBodyData>
            </TableBody>
          </Table>
          <TablePagination id="tableDocumentationFilteringPaginationTableExample-pagination" itemsPerPage={itemsPerPage} className="flex justify-center mt-spacing" />
        </TableWrapper>
      </Accordion>
    </div>
  );
}
