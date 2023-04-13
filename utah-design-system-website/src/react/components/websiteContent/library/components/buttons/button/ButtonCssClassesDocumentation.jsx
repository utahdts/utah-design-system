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
import React from 'react';

function ButtonCssClassesDocumentation() {
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
            <TableCell><code>.button</code></TableCell>
            <TableCell>The base css class for a button.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.button--active</code></TableCell>
            <TableCell>The pressed appearance for the button.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.button--small1x</code></TableCell>
            <TableCell>CSS class modifier for an extra small button.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.button--small</code></TableCell>
            <TableCell>CSS class modifier for a small button.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.button--large</code></TableCell>
            <TableCell>CSS class modifier for a large button.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.button--large1x</code></TableCell>
            <TableCell>CSS class modifier for a extra large button.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.button--primary-color</code></TableCell>
            <TableCell>CSS class modifier for a button in the primary color.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.button--secondary-color</code></TableCell>
            <TableCell>CSS class modifier for a button in the secondary color.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.button--accent-color</code></TableCell>
            <TableCell>CSS class modifier for a button in the accent color.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.button--solid</code></TableCell>
            <TableCell>CSS class modifier for a button that has a solid color (instead of being outlined).</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.button.contrast-border-light</code></TableCell>
            <TableCell>
              CSS class modifier to provide a light border around a dark button (used to help the button meet 3:1 contrast ratio on a dark
              background).
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.button.contrast-border-dark</code></TableCell>
            <TableCell>
              CSS class modifier to provide a dark border around a light button (used to help the button meet 3:1 contrast ratio on a light
              background).
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}

export default ButtonCssClassesDocumentation;
