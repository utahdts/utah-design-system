import {
  Button,
  Table,
  TableBody,
  TableBodyData,
  TableBodyDataCellTemplate,
  TableBodyDataRowTemplate, TableHead,
  TableHeadCell,
  TableHeadRow,
  TableWrapper,
} from 'utah-design-system-react-library';
import TableSortingRule from 'utah-design-system-react-library/react/components/table/TableSortingRule';
import TableSortingRules from 'utah-design-system-react-library/react/components/table/TableSortingRules';
import tableSortingRuleFieldType from 'utah-design-system-react-library/react/enums/tableSortingRuleFieldType';
import exampleData from './exampleData';

const propTypes = {};
const defaultProps = {};

function TableDocumentationSortingTableExample() {
  return (
    <div className="documentation-content">
      <h3 id="table__sorting-table-example">Table Example: Sorting Data</h3>
      <TableWrapper>
        <Table>
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
          </TableHead>

          <TableBody>
            <TableBodyData records={exampleData} recordIdField="id">
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
    </div>
  );
}

TableDocumentationSortingTableExample.propTypes = propTypes;
TableDocumentationSortingTableExample.defaultProps = defaultProps;

export default TableDocumentationSortingTableExample;
