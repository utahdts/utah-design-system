import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper
} from '@utahdts/utah-design-system';

export function TagCssClassesDocumentation() {
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
            <TableCell><code>.tag</code></TableCell>
            <TableCell>This class is the tag.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.tag__wrapper</code></TableCell>
            <TableCell>This class is the overall wrapper for the tag.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.tag--clearable</code></TableCell>
            <TableCell>This class is the used then the tag includes a clear button.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.tag--icon</code></TableCell>
            <TableCell>This class is the optional icon.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.tag--icon-left</code>, <code>.tag--icon-right</code></TableCell>
            <TableCell>These classes are the optional icon position.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.tag--small</code>, <code>.tag--medium</code>, <code>.tag--large</code></TableCell>
            <TableCell>These classed are used to set the tag size.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
