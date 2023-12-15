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

export default function SpinnerPropsDocumentation() {
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
              <TableCell><code className="primary-color">children</code></TableCell>
              <TableCell><code>react node</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Most often, children is the percentage of progress. But, you can have it be any element to be rendered inside the spinner.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">className</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This css class will be added to the spinner. This will be added to the main &lt;div&gt; element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">id</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                An id to put on the main &lt;div&gt; element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">innerRef</code></TableCell>
              <TableCell><code>MutableRefObject</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This ref will be attached to the rendered &lt;div&gt; element allowing the parent component to interact
                directly with the actual <span className="font-semi-bold">div</span> DOM element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">size</code></TableCell>
              <TableCell><code>number</code></TableCell>
              <TableCell>60</TableCell>
              <TableCell>
                The height and width of the spinner, in pixel. This will set the <code>height</code> and <code>width</code>{' '}
                attribute of the &lt;svg&gt; element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">strokeWidth</code></TableCell>
              <TableCell><code>number</code></TableCell>
              <TableCell>10</TableCell>
              <TableCell>
                The width of the stroke of the spinner, in pixel. This will set the <code>strokeWidth</code> attribute of the &lt;path&gt; elements.
                Note: the width of the line will scale with the <code>size</code> of the spinner.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">value</code></TableCell>
              <TableCell><code>number</code></TableCell>
              <TableCell><code>NaN</code></TableCell>
              <TableCell>
                Used to represent progress.
                Must be a number between 0 and 1 (inclusive).
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
