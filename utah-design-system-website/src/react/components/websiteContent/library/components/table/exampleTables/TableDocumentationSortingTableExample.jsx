import {
  Button,
  Table,
  TableBody,
  TableBodyData,
  TableBodyDataCellTemplate,
  TableBodyDataRowTemplate,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableSortingRule,
  tableSortingRuleFieldType,
  TableSortingRules,
  TableWrapper
} from '@utahdts/utah-design-system';
import examplePresidentsData from './examplePresidentsData';

const propTypes = {};
const defaultProps = {};

function TableDocumentationSortingTableExample() {
  return (
    <div className="static-example">
      <h3 id="table__sorting-table-example" className="static-example__title">Table Example: Sorting Data</h3>
      <TableWrapper>
        <Table className="table table--lines-x table--alt table--v-align-center table--condensed">
          <TableHead>
            <TableSortingRules defaultValue="name">
              {/*
                Order here determines which rules to apply first.
                The "selected" TableHeadCell's "recordFieldPath" is pushed to the top of the TableSortingRule list
                and then the rest of the TableSortingRules are applied in order.
              */}
              <TableSortingRule
                recordFieldPath="name"
                // sort by lastName
                customSort={({ fieldValueA, fieldValueB }) => {
                  function getLastName(fullName) {
                    return (fullName || '').split(' ').pop();
                  }
                  return getLastName(fieldValueA).localeCompare(getLastName(fieldValueB));
                }}
              />
              <TableSortingRule recordFieldPath="nthPresident" fieldType={tableSortingRuleFieldType.NUMBER} defaultIsAscending={false} />
              <TableSortingRule recordFieldPath="politicalParty" />
              <TableSortingRule recordFieldPath="inauguration" />
              <TableSortingRule recordFieldPath="inaugurationDate" fieldType={tableSortingRuleFieldType.DATE} />
              <TableSortingRule recordFieldPath="birthplace.state" />
              <TableSortingRule recordFieldPath="birthplace.county" />
            </TableSortingRules>

            <TableHeadRow>
              <TableHeadCell recordFieldPath="name" className="text-left">Name</TableHeadCell>
              <TableHeadCell recordFieldPath="nthPresident" className="text-left">No.</TableHeadCell>
              <TableHeadCell recordFieldPath="politicalParty" className="text-left">Party</TableHeadCell>
              <TableHeadCell recordFieldPath="inauguration" className="text-left">Inauguration</TableHeadCell>
              {/* <TableHeadCell recordFieldPath="funFacts" className="text-left">Fun Facts</TableHeadCell> */}
              <TableHeadCell recordFieldPath="birthplace" tableSortingFieldPaths={['birthplace.state', 'birthplace.county']} className="text-left">Birth Place</TableHeadCell>
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
                {/* <TableBodyDataCellTemplate recordFieldPath="funFacts" /> */}
                <TableBodyDataCellTemplate recordFieldPath="birthPlace">
                  {({ record }) => [record.birthplace.county, record.birthplace.state].join(', ')}
                </TableBodyDataCellTemplate>
                <TableBodyDataCellTemplate>
                  <Button className="button--small" onClick={() => { }}>More</Button>
                </TableBodyDataCellTemplate>
              </TableBodyDataRowTemplate>
            </TableBodyData>
          </TableBody>

        </Table>
      </TableWrapper>
    </div>
  );
}

TableDocumentationSortingTableExample.propTypes = propTypes;
TableDocumentationSortingTableExample.defaultProps = defaultProps;

export default TableDocumentationSortingTableExample;
