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

/** @returns {JSX.Element} */
function CharacterCountPropsDocumentation() {
  return (
    <div className="documentation-content--small-text">
      <TableWrapper>
        <Table className="table--lines-x">
          <TableHead>
            <TableHeadRow>
              <TableHeadCell className="text-left">Property</TableHeadCell>
              <TableHeadCell className="text-left">Type</TableHeadCell>
              <TableHeadCell className="text-left">Default</TableHeadCell>
              <TableHeadCell className="text-left">Description</TableHeadCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><code className="primary-color">className</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                The CSS Class to use on the character counter wrapper.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">maxLength</code></TableCell>
              <TableCell><code>number</code></TableCell>
              <TableCell><em>required</em></TableCell>
              <TableCell>
                Number of characters allowed in the input.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">id</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell><em>required</em></TableCell>
              <TableCell>
                The id of the character count element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">text</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                The text of the that is being counted.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}

export default CharacterCountPropsDocumentation;
