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

export function SkeletonCssClassesDocumentation() {
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
            <TableCell><code>.skeleton</code></TableCell>
            <TableCell>The base css class for a skeleton.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.skeleton--rectangle</code></TableCell>
            <TableCell>CSS class modifier for a rectangular skeleton.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.skeleton--circle</code></TableCell>
            <TableCell>CSS class modifier for a circular skeleton.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.skeleton--line</code></TableCell>
            <TableCell>CSS class modifier for a linear skeleton.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
