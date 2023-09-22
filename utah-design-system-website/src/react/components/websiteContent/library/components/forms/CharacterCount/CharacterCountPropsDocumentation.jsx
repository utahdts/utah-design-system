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
              <TableCell><code className="primary-color">maxLength</code></TableCell>
              <TableCell><code>number</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Number of characters allowed in the input.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">id</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell><em>required</em></TableCell>
              <TableCell>
                Typically, the id from the corresponding <code>&lt;TextArea&gt;</code> component.
                This prop is used to tie the aria-describedby attribute of the <code>&lt;textarea&gt;</code> element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">value</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Value of the corresponding <code>&lt;TextArea&gt;</code> component..
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}

export default CharacterCountPropsDocumentation;
