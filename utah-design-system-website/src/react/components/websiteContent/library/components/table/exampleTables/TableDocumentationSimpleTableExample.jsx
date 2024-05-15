import {
  Accordion,
  Table,
  TableBody, TableCell, TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper
} from '@utahdts/utah-design-system';
import { HeadingWithLink } from '../../../../../staticExamples/HeadingWithLink';

export function TableDocumentationSimpleTableExample() {
  return (
    <div className="static-example mt-spacing-xl">
      <HeadingWithLink
        headingTag="h3"
        headingTitle="Simple Static Data"
        id="table__simple-static-table-example"
        linkUrl="https://github.com/utahdts/utah-design-system/tree/main/utah-design-system-website/src/react/components/websiteContent/library/components/table/exampleTables/TableDocumentationSimpleTableExample.jsx"
      />
      <p className="mb-spacing-xs">
        This table is static data using Design System components in a manual layout.
        This is the simplest as it does not have dynamic data, filtering, sorting, nor any other features.
      </p>
      <p className="mb-spacing-xs">
        The table is styled using a combination of classes:
      </p>
      <ul className="mb-spacing">
        <li>
          <code>.table--lines-x</code> to add vertical lines between rows,
        </li>
        <li>
          <code>.table--td-center</code> to center its content,
        </li>
        <li>
          <code>.table--v-align-center</code> to align row data vertically.
        </li>
      </ul>
      <Accordion
        id="table-example-simple"
        contentClassName="accordion__content--bordered"
        headerContent={<span>Table Preview</span>}
        headerClassName="button--primary-color button--solid"
        headingLevel={4}
        isOpen
      >
        <TableWrapper>
          <Table id="simple-table" className="table table--lines-x table--v-align-center table--full-width table--td-center">
            <TableHead>
              <TableHeadRow>
                <TableHeadCell>TSP</TableHeadCell>
                <TableHeadCell>TBSP</TableHeadCell>
                <TableHeadCell>FL OZ</TableHeadCell>
                <TableHeadCell>CUP</TableHeadCell>
                <TableHeadCell>PINT</TableHeadCell>
                <TableHeadCell>QUART</TableHeadCell>
                <TableHeadCell>GALLON</TableHeadCell>
              </TableHeadRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1/2</TableCell>
                <TableCell>1/16</TableCell>
                <TableCell>1/32</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6</TableCell>
                <TableCell>2</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1/8</TableCell>
                <TableCell>1/16</TableCell>
                <TableCell>1/32</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>12</TableCell>
                <TableCell>4</TableCell>
                <TableCell>2</TableCell>
                <TableCell>1/4</TableCell>
                <TableCell>1/8</TableCell>
                <TableCell>1/16</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>18</TableCell>
                <TableCell>6</TableCell>
                <TableCell>3</TableCell>
                <TableCell>3/8</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>24</TableCell>
                <TableCell>8</TableCell>
                <TableCell>4</TableCell>
                <TableCell>1/2</TableCell>
                <TableCell>1/4</TableCell>
                <TableCell>1/8</TableCell>
                <TableCell>1/32</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>36</TableCell>
                <TableCell>12</TableCell>
                <TableCell>6</TableCell>
                <TableCell>3/4</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>48</TableCell>
                <TableCell>16</TableCell>
                <TableCell>8</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1/2</TableCell>
                <TableCell>1/4</TableCell>
                <TableCell>1/16</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>96</TableCell>
                <TableCell>32</TableCell>
                <TableCell>16</TableCell>
                <TableCell>2</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1/2</TableCell>
                <TableCell>1/8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>-</TableCell>
                <TableCell>64</TableCell>
                <TableCell>32</TableCell>
                <TableCell>4</TableCell>
                <TableCell>2</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1/4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>-</TableCell>
                <TableCell>256</TableCell>
                <TableCell>128</TableCell>
                <TableCell>16</TableCell>
                <TableCell>8</TableCell>
                <TableCell>4</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableWrapper>
      </Accordion>
    </div>
  );
}
