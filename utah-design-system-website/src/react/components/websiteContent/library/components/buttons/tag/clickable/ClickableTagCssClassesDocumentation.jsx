import React from 'react';
import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper
} from '@utahdts/utah-design-system';

/** @returns {JSX.Element} */
function ClickableTagCssClassesDocumentation() {
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
            <TableCell><code>.tag__button</code></TableCell>
            <TableCell>This class is the interactive tag.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.tag--selected</code></TableCell>
            <TableCell>This class is the used when the tag has been toggled (selected).</TableCell>
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

export default ClickableTagCssClassesDocumentation;
