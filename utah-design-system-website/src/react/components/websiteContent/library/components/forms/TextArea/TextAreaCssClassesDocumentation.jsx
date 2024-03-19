import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper
} from '@utahdts/utah-design-system';

export function TextAreaCssClassesDocumentation() {
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
            <TableCell><code>text-area--clear-icon-visible</code></TableCell>
            <TableCell>
              This class is used conjointly with the <code>isClearable</code> property.
              It adds extra padding to the right side to accommodate the clear icon.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
