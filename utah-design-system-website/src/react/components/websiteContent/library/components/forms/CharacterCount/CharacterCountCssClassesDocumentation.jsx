// @ts-check
import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper
} from '@utahdts/utah-design-system';
import React from 'react';

/** @returns {JSX.Element} */
export default function CharacterCountCssClassesDocumentation() {
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
            <TableCell><code>character-count</code></TableCell>
            <TableCell>This class is the overall wrapper class for the character counter.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>character-count--over-limit</code></TableCell>
            <TableCell>This class is used when the count is over the set limit.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
