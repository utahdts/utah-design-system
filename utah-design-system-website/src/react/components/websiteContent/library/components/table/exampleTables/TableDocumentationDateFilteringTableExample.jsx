import {
  Accordion,
  Table,
  TableBody,
  TableBodyData,
  TableBodyDataCellTemplate,
  TableBodyDataRowTemplate,
  TableFilterDateRange,
  TableFilterTextInput,
  TableFilters,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableWrapper
} from '@utahdts/utah-design-system';
import { format } from 'date-fns';
import { HeadingWithLink } from '../../../../../staticExamples/HeadingWithLink';

/**
 * @typedef Widget {
 *  @property {number} jeNeSaisQuoi
 *  @property {string} name
 *  @property {string} inspectionDate
 * }
 */

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/** @returns {string} */
function randomDate() {
  const date = new Date();
  date.setDate(date.getDate() + getRandomArbitrary(-30, 30));

  return format(date, 'MM/dd/yyyy');
}

/** @type {Widget[]} */
const exampleData = [
  {
    jeNeSaisQuoi: 13,
    name: 'Accessory',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 2,
    name: 'Adjunct',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 110,
    name: 'Appliance',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 34,
    name: 'Contraption',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 25,
    name: 'Contrivance',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 24,
    name: 'Doodad',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 9,
    name: 'Doohickey',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 26,
    name: 'Gadget',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 59,
    name: 'Gimmick',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 72,
    name: 'Gizmo',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 83,
    name: 'Implement',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 6,
    name: 'Innovation',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 24,
    name: 'Instrument',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 99,
    name: 'Invention',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 192,
    name: 'Jigger',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 62,
    name: 'Mechanism',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 77,
    name: 'Sprocket',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 82,
    name: 'Thingamabob',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 95,
    name: 'Thingumajig',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 12,
    name: 'Tool',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 7,
    name: 'Utensil',
    inspectionDate: randomDate(),
  },
  {
    jeNeSaisQuoi: 101,
    name: 'Widget',
    inspectionDate: randomDate(),
  },
];

export function TableDocumentationDateFilteringTableExample() {
  return (
    <div className="static-example mt-spacing-xl">
      <HeadingWithLink
        headingTag="h3"
        headingTitle="Date Filtering Data"
        id="table__date-filtering-table-example"
        linkUrl="https://github.com/utahdts/utah-design-system/tree/main/utah-design-system-website/src/react/components/websiteContent/library/components/table/exampleTables/TableDocumentationDateFilteringTableExample.jsx"
      />
      <p className="mb-spacing-xs">This table allows filtering date data through the use of the inputs in the <code>&lt;thead&gt;</code> element.</p>
      <p className="mb-spacing-xs">This example does not include any additional styling. This demonstrates what a table component looks like out-of-the-box.</p>
      <Accordion
        id="table-example-date-filtering"
        contentClassName="accordion__content--bordered"
        headerContent={<span>Table Preview</span>}
        headerClassName="button--primary-color button--solid"
        headingLevel={4}
      >
        <TableWrapper>
          <Table>
            <TableHead>
              <TableFilters>
                <TableFilterTextInput a11yLabel="Name" recordFieldPath="name" />
                <TableFilterTextInput a11yLabel="Je Ne Sais Quoi" recordFieldPath="jeNeSaisQuoi" />
                <TableFilterDateRange
                  a11yLabel="inspectionDate"
                  id="table-filtering-inspectionDate"
                  recordFieldPath="inspectionDate"
                />
              </TableFilters>
              <TableHeadRow>
                <TableHeadCell recordFieldPath="name">Name</TableHeadCell>
                <TableHeadCell recordFieldPath="jeNeSaisQuoi">Je Ne Sais Quoi</TableHeadCell>
                <TableHeadCell recordFieldPath="inspectionDate">Inspection</TableHeadCell>
              </TableHeadRow>
            </TableHead>

            <TableBody>
              <TableBodyData records={exampleData} recordIdField="name">
                <TableBodyDataRowTemplate>
                  <TableBodyDataCellTemplate recordFieldPath="name" />
                  <TableBodyDataCellTemplate recordFieldPath="jeNeSaisQuoi" />
                  <TableBodyDataCellTemplate recordFieldPath="inspectionDate" />
                </TableBodyDataRowTemplate>
              </TableBodyData>
            </TableBody>
          </Table>
        </TableWrapper>
      </Accordion>
    </div>
  );
}
