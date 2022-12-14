import {
  Table,
  TableBody,
  TableBodyData,
  TableBodyDataCellTemplate,
  TableBodyDataRowTemplate,
  TableFoot,
  TableFootCell,
  TableFootRow,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableWrapper,
} from 'utah-design-system-react-library';
import TableSortingRule from 'utah-design-system-react-library/react/components/table/TableSortingRule';
import TableSortingRules from 'utah-design-system-react-library/react/components/table/TableSortingRules';
import tableSortingRuleFieldType from 'utah-design-system-react-library/react/enums/tableSortingRuleFieldType';
import useRefLazy from 'utah-design-system-react-library/react/hooks/useRefLazy';
import exampleGovernorsData from './exampleGovernorsData';

const propTypes = {};
const defaultProps = {};

function TableDocumentationFooterExample() {
  const dataRef = useRefLazy(() => exampleGovernorsData.map((gov) => ({
    ...gov,
    duration: gov.to ? gov.to - gov.from : null,
    id: `${gov.name}-${gov.from}`,
    to: gov.to || null,
  })));
  return (
    <>
      <h3 id="table__footer-table-example">Table Example: Footer</h3>
      <p>This table has a footer!</p>
      <TableWrapper>
        <Table id="footer-table">
          <TableSortingRules defaultValue="from">
            <TableSortingRule
              recordFieldPath="name"
              customSort={({ fieldValueA, fieldValueB }) => {
                // sort by lastName
                function getLastName(fullName) {
                  return (fullName || '').split(' ').pop();
                }
                return getLastName(fieldValueA).localeCompare(getLastName(fieldValueB));
              }}
            />
            <TableSortingRule recordFieldPath="from" fieldType={tableSortingRuleFieldType.NUMBER} />
            <TableSortingRule recordFieldPath="to" fieldType={tableSortingRuleFieldType.NUMBER} />
            <TableSortingRule recordFieldPath="duration" fieldType={tableSortingRuleFieldType.NUMBER} />
          </TableSortingRules>

          <TableHead>
            <TableHeadRow>
              <TableHeadCell recordFieldPath="name">Name</TableHeadCell>
              <TableHeadCell recordFieldPath="from">From</TableHeadCell>
              <TableHeadCell recordFieldPath="to">To</TableHeadCell>
              <TableHeadCell recordFieldPath="duration">Duration</TableHeadCell>
            </TableHeadRow>
          </TableHead>

          <TableBody>
            <TableBodyData records={dataRef.current} recordIdField="id">
              <TableBodyDataRowTemplate>
                <TableBodyDataCellTemplate recordFieldPath="name" />
                <TableBodyDataCellTemplate recordFieldPath="from" />
                <TableBodyDataCellTemplate recordFieldPath="to" />
                <TableBodyDataCellTemplate recordFieldPath="duration" />
              </TableBodyDataRowTemplate>
            </TableBodyData>
          </TableBody>

          <TableFoot>
            <TableFootRow>
              <TableFootCell colSpan={3}>
                Average Duration
              </TableFootCell>
              <TableFootCell>
                {
                  (
                    dataRef.current.filter((gov) => gov.to)
                      .reduce((totalDuration, gov) => totalDuration + gov.duration, 0)
                    / dataRef.current.length
                  )
                    .toFixed(2)
                }
              </TableFootCell>
            </TableFootRow>
          </TableFoot>

        </Table>
      </TableWrapper>
    </>
  );
}

TableDocumentationFooterExample.propTypes = propTypes;
TableDocumentationFooterExample.defaultProps = defaultProps;

export default TableDocumentationFooterExample;
