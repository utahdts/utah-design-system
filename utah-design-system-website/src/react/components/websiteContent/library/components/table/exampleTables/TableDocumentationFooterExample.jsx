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
  TableSortingRule,
  TableSortingRules,
  TableWrapper,
  tableSortingRuleFieldType,
  useRefLazy, Accordion
} from '@utahdts/utah-design-system';
import HeadingWithLink from '../../../../../staticExamples/HeadingWithLink';
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
    <div className="static-example mt-spacing-xl">
      <HeadingWithLink
        headingTag="h3"
        headingTitle="Footer"
        id="table__footer-table-example"
        linkUrl="https://github.com/utahdts/utah-design-system/tree/main/utah-design-system-website/src/react/components/websiteContent/library/components/table/exampleTables/TableDocumentationFooterExample.jsx"
      />
      <p className="mb-spacing-xs">
        This table has a footer!&nbsp;
      </p>
      <Accordion
        contentClassName="accordion__content--bordered"
        headerContent={<span>Table Preview</span>}
        headerClassName="button--primary-color button--solid"
        headingLevel={4}
      >
        <TableWrapper>
          <Table id="footer-table" className="table--alt table--full-width">
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
      </Accordion>
    </div>
  );
}

TableDocumentationFooterExample.propTypes = propTypes;
TableDocumentationFooterExample.defaultProps = defaultProps;

export default TableDocumentationFooterExample;
