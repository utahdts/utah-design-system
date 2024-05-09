import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper
} from '@utahdts/utah-design-system';

export function DrawerCssClassesDocumentation() {
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
            <TableCell><code>.drawer-wrapper</code></TableCell>
            <TableCell>
              The class for the overall container.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.drawer__backdrop</code></TableCell>
            <TableCell>
              The class for the dark overlay.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.drawer__inner</code></TableCell>
            <TableCell>
              The class for the inner container.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.drawer__title</code></TableCell>
            <TableCell>
              The class for the title.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.drawer__content</code></TableCell>
            <TableCell>
              The class for the main content.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.drawer__footer</code></TableCell>
            <TableCell>
              The class for the footer.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.drawer__close-button</code></TableCell>
            <TableCell>
              The class for the close button.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.drawer--right</code></TableCell>
            <TableCell>
              Class modifier for a right-aligned drawer.<br />
              Must be paired with <code>.drawer__inner</code>.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.drawer--left</code></TableCell>
            <TableCell>
              Class modifier for a left-aligned drawer.<br />
              Must be paired with <code>.drawer__inner</code>.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
