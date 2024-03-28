import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper
} from '@utahdts/utah-design-system';

export function TabGroupCssClassesDocumentation() {
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
            <TableCell><code>tab-group</code></TableCell>
            <TableCell>This class is the overall wrapper class for the tab group.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>tab-group--vertical</code></TableCell>
            <TableCell>CSS class modifier for a vertical tab group.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>tab-group__list</code></TableCell>
            <TableCell>This class is the wrapper class for the tabs.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>tab-group__tab</code></TableCell>
            <TableCell>This class is the wrapper class for a single tab.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>tab-group__tab--selected</code></TableCell>
            <TableCell>CSS class modifier for a tab wrapper when its corresponding tab is selected.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>tab-group__tab-button</code></TableCell>
            <TableCell>Class for a tab.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>tab-group__tab-button--selected</code></TableCell>
            <TableCell>CSS class modifier for a selected tab.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>tab-group__panels</code></TableCell>
            <TableCell>This class is the wrapper class for the panels.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>tab-group__panel</code></TableCell>
            <TableCell>Class for a panel.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
