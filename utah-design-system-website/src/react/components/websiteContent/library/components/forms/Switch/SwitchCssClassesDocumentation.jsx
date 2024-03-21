import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper
} from '@utahdts/utah-design-system';

export function SwitchCssClassesDocumentation() {
  return (
    <TableWrapper>
      <Table className="table--lines-x table--full-width">
        <TableHead>
          <TableHeadRow>
            <TableHeadCell className="text-left css-classes">CSS Classes</TableHeadCell>
            <TableHeadCell className="text-left ">Description</TableHeadCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell><code>switch--small</code></TableCell>
            <TableCell>CSS class modifier for a small switch.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>switch--large</code></TableCell>
            <TableCell>CSS class modifier for a large switch.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
