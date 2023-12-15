import {
  Accordion,
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
  useRefLazy
} from '@utahdts/utah-design-system';
import { HeadingWithLink } from '../../../../../staticExamples/HeadingWithLink';
import { exampleGovernorsData } from './exampleGovernorsData';

export function TableDocumentationFooterExample() {
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
        This table includes a footer.
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
        <TableWrapper>
          <Table id="footer-table" className="table--alt table--lines-x table--full-width">
            <TableSortingRules defaultValue="from">
              <TableSortingRule
                a11yLabel="Name"
                recordFieldPath="name"
                customSort={
                  /**
                   * @param {Object} param
                   * @param {string} param.fieldValueA
                   * @param {string} param.fieldValueB
                   * @returns {number}
                   */
                  ({ fieldValueA, fieldValueB }) => {
                    /**
                     * @param {string} fullName
                     * @returns {string}
                     */
                    function getLastName(fullName) {
                      return (fullName || '').split(' ').pop() ?? '';
                    }
                    return getLastName(fieldValueA).localeCompare(getLastName(fieldValueB));
                  }
                }
              />
              <TableSortingRule a11yLabel="From" recordFieldPath="from" fieldType={tableSortingRuleFieldType.NUMBER} />
              <TableSortingRule a11yLabel="To" recordFieldPath="to" fieldType={tableSortingRuleFieldType.NUMBER} />
              <TableSortingRule a11yLabel="Duration" recordFieldPath="duration" fieldType={tableSortingRuleFieldType.NUMBER} />
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
                {/* @ts-ignore */}
                <TableFootCell colSpan={3}>
                  Average Duration
                </TableFootCell>
                <TableFootCell>
                  {
                    (
                      dataRef.current.filter((gov) => gov.to)
                        .reduce((totalDuration, gov) => totalDuration + (gov.duration ?? 0), 0)
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
