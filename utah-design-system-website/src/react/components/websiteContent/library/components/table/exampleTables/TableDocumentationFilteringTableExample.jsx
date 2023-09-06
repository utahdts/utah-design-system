import {
  Accordion,
  Button,
  Table,
  TableBody,
  TableBodyData,
  TableBodyDataCellTemplate,
  TableBodyDataRowTemplate,
  TableFilterCustom,
  TableFilterDate,
  TableFilterNone,
  TableFilters,
  TableFilterSelectAllOptions,
  TableFilterTextInput,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableWrapper
} from '@utahdts/utah-design-system';
import { useState } from 'react';
import HeadingWithLink from '../../../../../staticExamples/HeadingWithLink';
import examplePresidentsData from './examplePresidentsData';

const propTypes = {};
const defaultProps = {};

function TableDocumentationFilteringTableExample() {
  const [funFactsFilter, setFunFactsFilter] = useState('');

  return (
    <div className="static-example mt-spacing-xl">
      <HeadingWithLink
        headingTag="h3"
        headingTitle="Filtering Data"
        id="table__filtering-table-example"
        linkUrl="https://github.com/utahdts/utah-design-system/tree/main/utah-design-system-website/src/react/components/websiteContent/library/components/table/exampleTables/TableDocumentationFilteringTableExample.jsx"
      />
      <p className="mb-spacing-xs"> This table allows filtering its data through the use of the inputs in the <code>&lt;thead&gt;</code> element.</p>
      <Accordion
        contentClassName="accordion__content--bordered"
        headerContent={<span>Table Preview</span>}
        headerClassName="button--primary-color button--solid"
        headingLevel={4}
      >
        <TableWrapper>
          <Table className="my-uber-special-snowflake-table">
            <TableHead>
              <TableFilters>
                {/* Example of an "uncontrolled" filter; filtering works, but parent component does not know the current filter value */}
                <TableFilterTextInput recordFieldPath="name" />

                {/* Skip a column by using the "None" filter component */}
                <TableFilterNone />

                {/*
                  Present a select input of the possible values from which to filter;
                  Loads all the possible values from the data for the give recordFieldPath and creates options for the
                  found values.
                */}
                <TableFilterSelectAllOptions recordFieldPath="politicalParty" />

                {/* Date range filtering popup */}
                <TableFilterDate recordFieldPath="inauguration" />

                {/*
                  "Controlled" filter; parent knows the value!
                  Without further coding, this does not actually perform filtering because the filtering component expects
                  the controlling parent component to do something with the controlled value;
                  It may be possible in the future for the filtering context to recognize the passed in value and update the
                  `filterValues` when the passed in value changes so that filtering still occurs automatically. But... maybe you
                  really want to just use a TableFilterCustom instead if that's the case.
                */}
                <TableFilterTextInput recordFieldPath="funFacts" value={funFactsFilter} onChange={(e) => setFunFactsFilter(e.target.value)} />

                <TableFilterCustom>
                  {
                    ({ filterValues, setFilterValues }) => (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFilterValues((draftState) => {
                            // filter values must be a string
                            // the field (ie birthplace.state) can be a dot path in to the record
                            draftState['birthplace.state'] = draftState['birthplace.state'] ? '' : { value: 'Virginia' };
                          });
                        }}
                      >
                        {filterValues['birthplace.state'] ? 'Only Virginia' : 'All States'}
                      </Button>
                    )
                  }
                </TableFilterCustom>
              </TableFilters>
              <TableHeadRow>
                <TableHeadCell recordFieldPath="name">Name</TableHeadCell>
                <TableHeadCell recordFieldPath="nthPresident">No.</TableHeadCell>
                <TableHeadCell recordFieldPath="politicalParty">Party</TableHeadCell>
                <TableHeadCell recordFieldPath="inauguration">Inauguration (String)</TableHeadCell>
                <TableHeadCell recordFieldPath="funFacts">Fun Facts</TableHeadCell>
                <TableHeadCell recordFieldPath="birthplace" tableSortingFieldPaths={['birthplace.state', 'birthplace.county']}>Birth Place</TableHeadCell>
                <TableHeadCell />
              </TableHeadRow>
            </TableHead>

            <TableBody>
              <TableBodyData records={examplePresidentsData} recordIdField="id">
                <TableBodyDataRowTemplate>
                  <TableBodyDataCellTemplate recordFieldPath="name" />
                  <TableBodyDataCellTemplate recordFieldPath="nthPresident" />
                  <TableBodyDataCellTemplate recordFieldPath="politicalParty" />
                  <TableBodyDataCellTemplate recordFieldPath="inauguration" />
                  <TableBodyDataCellTemplate recordFieldPath="funFacts">
                    {({ record }) => `${record.funFacts.substring(0, 20)}...`}
                  </TableBodyDataCellTemplate>
                  <TableBodyDataCellTemplate recordFieldPath="birthPlace">
                    {({ record }) => [record.birthplace.county, record.birthplace.state].join(', ')}
                  </TableBodyDataCellTemplate>
                </TableBodyDataRowTemplate>
              </TableBodyData>
            </TableBody>
          </Table>
        </TableWrapper>
      </Accordion>
    </div>
  );
}

TableDocumentationFilteringTableExample.propTypes = propTypes;
TableDocumentationFilteringTableExample.defaultProps = defaultProps;

export default TableDocumentationFilteringTableExample;
