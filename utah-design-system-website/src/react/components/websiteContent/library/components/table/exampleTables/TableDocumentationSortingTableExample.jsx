import {
  Accordion,
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
import { HeadingWithLink } from '../../../../../staticExamples/HeadingWithLink';
import { examplePresidentsData } from './examplePresidentsData';

export function TableDocumentationSortingTableExample() {
  return (
    <div className="static-example mt-spacing-xl">
      <HeadingWithLink
        headingTag="h3"
        headingTitle="Sorting Data"
        id="table__sorting-table-example"
        linkUrl="https://github.com/utahdts/utah-design-system/tree/main/utah-design-system-website/src/react/components/websiteContent/library/components/table/exampleTables/TableDocumentationSortingTableExample.jsx"
      />
      <p className="mb-spacing-xs">
        This table includes sorting and display data in a compact way.
      </p>
      <p className="mb-spacing-xs">
        The table is styled using a combination of classes:
      </p>
      <ul className="mb-spacing">
        <li>
          <code>.table--lines-x</code> to add vertical lines between rows,
        </li>
        <li>
          <code>.table--alt</code> to add color to alternating rows,
        </li>
        <li>
          <code>.table--v-align-center</code> to align row data vertically,
        </li>
        <li>
          <code>.table--condensed</code> to shorten rows.
        </li>
      </ul>
      <Accordion
        id="table-example-sorting"
        contentClassName="accordion__content--bordered"
        headerContent={<span>Table Preview</span>}
        headerClassName="button--primary-color button--solid"
        headingLevel={4}
      >
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
                  a11yLabel="Name"
                  recordFieldPath="name"
                  // sort by lastName
                  customSort={
                    /**
                     * @param {object} param
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
                <TableSortingRule a11yLabel="Nth President" recordFieldPath="nthPresident" fieldType={tableSortingRuleFieldType.NUMBER} defaultIsAscending={false} />
                <TableSortingRule a11yLabel="Political Party" recordFieldPath="politicalParty" />
                <TableSortingRule a11yLabel="Inauguration" recordFieldPath="inauguration" />
                <TableSortingRule a11yLabel="Inauguration Date" recordFieldPath="inaugurationDate" fieldType={tableSortingRuleFieldType.DATE} />
                <TableSortingRule a11yLabel="Birthplace State" recordFieldPath="birthplace.state" defaultIsAscending={false} />
                <TableSortingRule a11yLabel="Birthplace County" recordFieldPath="birthplace.county" />
              </TableSortingRules>

              <TableHeadRow>
                <TableHeadCell recordFieldPath="name" className="text-left">Name</TableHeadCell>
                <TableHeadCell recordFieldPath="nthPresident" className="text-left">No.</TableHeadCell>
                <TableHeadCell recordFieldPath="politicalParty" className="text-left">Party</TableHeadCell>
                <TableHeadCell recordFieldPath="inauguration" className="text-left">Inauguration</TableHeadCell>
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
                  <TableBodyDataCellTemplate recordFieldPath="birthPlace">
                    {({ record }) => <>{[record.birthplace.county, record.birthplace.state].join(', ')}</>}
                  </TableBodyDataCellTemplate>
                  <TableBodyDataCellTemplate>
                    <Button className="button--small" onClick={() => { }}>More</Button>
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
