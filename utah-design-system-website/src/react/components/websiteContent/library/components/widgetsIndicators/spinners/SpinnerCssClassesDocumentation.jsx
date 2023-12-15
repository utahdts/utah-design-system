import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper
} from '@utahdts/utah-design-system';

export default function SpinnerCssClassesDocumentation() {
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
            <TableCell><code>.spinner</code></TableCell>
            <TableCell>The base css class for a spinner.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.spinner--indeterminate</code></TableCell>
            <TableCell>CSS class modifier for spinner with an indeterminate value.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.spinner--determinate</code></TableCell>
            <TableCell>CSS class modifier for spinner with a specified value.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
