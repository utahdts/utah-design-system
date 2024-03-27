import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper
} from '@utahdts/utah-design-system';

export function AccordionCssClassesDocumentation() {
  return (
    <TableWrapper>
      <Table className="table--lines-x">
        <TableHead>
          <TableHeadRow>
            <TableHeadCell className="text-left css-classes">CSS Classes</TableHeadCell>
            <TableHeadCell className="text-left ">Description</TableHeadCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell><code>.accordion</code></TableCell>
            <TableCell>
              The base class for an accordion.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code>.accordion__header</code></TableCell>
            <TableCell>
              Class for the accordion header/controls.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code>.accordion__header--open</code></TableCell>
            <TableCell>
              CSS class modifier for the header/controls when the accordion is open.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code>.accordion__content</code></TableCell>
            <TableCell>
              Class for the accordion content.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code>.accordion__content--open</code></TableCell>
            <TableCell>
              CSS class modifier for the content when the accordion is open.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
