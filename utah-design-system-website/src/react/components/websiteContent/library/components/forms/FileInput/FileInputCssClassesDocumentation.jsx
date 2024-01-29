import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper
} from '@utahdts/utah-design-system';

export function FileInputCssClassesDocumentation() {
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
            <TableCell><code>input-wrapper</code></TableCell>
            <TableCell>This class is the overall wrapper class for the file input.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>file-input__box</code></TableCell>
            <TableCell>This class is the wrapper for the input element.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>file-input__box--disabled</code></TableCell>
            <TableCell>
              This class is used conjointly with the <code>isDisabled</code> property.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>file-input__box--dragged</code></TableCell>
            <TableCell>
              This class is used to indicate an active state when one or more files are being dragged into the input.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>file-input__instructions</code></TableCell>
            <TableCell>This class is for the input instructions.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>file-input__file-selected</code></TableCell>
            <TableCell>This class is used when the user has selected one or more files.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>file-input__file-list</code></TableCell>
            <TableCell>This class is for the input file list.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
