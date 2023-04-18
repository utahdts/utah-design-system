import {
  Button, Table,
  TableBody,
  TableBodyData,
  TableBodyDataCellTemplate,
  TableBodyDataRowTemplate,
  TableFilterCustom,
  TableFilterDate,
  TableFilterNone,
  TableFilters,
  TableFilterSelect,
  TableFilterTextInput,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableWrapper
} from '@utahdts/utah-design-system';
import { useState } from 'react';
import examplePresidentsData from './examplePresidentsData';

const propTypes = {};
const defaultProps = {};

function TableDocumentationFilteringTableExample() {
  const [funFactsFilter, setFunFactsFilter] = useState('');

  return (
    <>
      <h3 id="table__filtering-table-example" className="mt-spacing-l">Table Example: Filtering Data</h3>
      <p> This table allows filtering its data through the use of the inputs in the THead.</p>

      <TableWrapper>
        <Table className="my-uber-special-snowflake-table">
          <TableHead>
            <TableHeadRow>
              <TableHeadCell recordFieldPath="name">Name</TableHeadCell>
              <TableHeadCell recordFieldPath="nthPresident">Nth President</TableHeadCell>
              <TableHeadCell recordFieldPath="politicalParty">Party</TableHeadCell>
              <TableHeadCell recordFieldPath="inauguration">Inauguration (String)</TableHeadCell>
              <TableHeadCell recordFieldPath="funFacts">Fun Facts</TableHeadCell>
              <TableHeadCell recordFieldPath="birthplace" tableSortingFieldPaths={['birthplace.state', 'birthplace.county']}>Birth Place</TableHeadCell>
              <TableHeadCell />
            </TableHeadRow>
            <TableFilters>
              {/* Example of an "uncontrolled" filter; filtering works, but parent component does not know the current filter value */}
              <TableFilterTextInput recordFieldPath="name" />

              {/* Skip a column by using the "None" filter component */}
              <TableFilterNone />

              {/*
                Present a select input of the possible values from which to filter;
                Providing TableFilterSelectOptions is optional;
                If there are no TableFilterSelectOption children then it will load all the possible values from the data.
              */}
              <TableFilterSelect recordFieldPath="politicalParty" />

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
                          draftState['birthplace.state'] = draftState['birthplace.state'] ? '' : 'Virginia';
                        });
                      }}
                    >
                      {filterValues['birthplace.state'] ? 'Only Virginia' : 'All States'}
                    </Button>
                  )
                }
              </TableFilterCustom>
            </TableFilters>
          </TableHead>

          <TableBody>
            <TableBodyData records={examplePresidentsData} recordIdField="id">
              <TableBodyDataRowTemplate>
                <TableBodyDataCellTemplate recordFieldPath="name" />
                <TableBodyDataCellTemplate recordFieldPath="nthPresident" />
                <TableBodyDataCellTemplate recordFieldPath="politicalParty" />
                <TableBodyDataCellTemplate recordFieldPath="inauguration" />
                <TableBodyDataCellTemplate recordFieldPath="funFacts" />
                <TableBodyDataCellTemplate recordFieldPath="birthPlace">
                  {({ record }) => [record.birthplace.county, record.birthplace.state].join(', ')}
                </TableBodyDataCellTemplate>
                <TableBodyDataCellTemplate>
                  <Button onClick={() => { }}>Do Something...</Button>
                </TableBodyDataCellTemplate>
              </TableBodyDataRowTemplate>
            </TableBodyData>
          </TableBody>
        </Table>
      </TableWrapper>
    </>
  );
}

TableDocumentationFilteringTableExample.propTypes = propTypes;
TableDocumentationFilteringTableExample.defaultProps = defaultProps;

export default TableDocumentationFilteringTableExample;
