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
function TagPropsDocumentation() {
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
              <TableCell><em>required</em></TableCell>
              <TableCell>
                Most often, children is the title of the tag. But, you can have it
                be any element to be rendered inside the element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">className</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This css class will be added to the tag. This will be added to the <code>&lt;span&gt;</code> element,
                or <code>&lt;button&gt;</code> if interactive.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">id</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                An id to put on the <code>&lt;span&gt;</code> element,
                or <code>&lt;button&gt;</code> if interactive.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">innerRef</code></TableCell>
              <TableCell><code>MutableRefObject</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This ref will be attached to the rendered <code>&lt;span&gt;</code>
                element allowing the parent component to interact directly with the actual DOM element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">iconLeft</code></TableCell>
              <TableCell><code>react node</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Intended to be an &lt;svg&gt; image to be placed to the left of the tag title, but any <span className="font-semi-bold">react node</span> is allowed.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">iconRight</code></TableCell>
              <TableCell><code>react node</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Intended to be an &lt;svg&gt; image to be placed to the right of the tag title, but any <span className="font-semi-bold">react node</span> is allowed.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">isDisabled</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>true</code>
                  <span> | </span>
                  <code>false</code>
                </div>
              </TableCell>
              <TableCell><code>false</code></TableCell>
              <TableCell>
                Used to disable the tag if interactive, or the clear button if used.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">onClear</code></TableCell>
              <TableCell><code>function</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Will display a clear button.
                Function to call when the user triggers the clear button.
                Can not be used in conjunction with <code>onClick</code>.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">size</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>formElementSizesEnum</code>
                  <span> | </span>
                  <code>&apos;small&apos;</code>
                  <span> | </span>
                  <code>&apos;medium&apos;</code>
                  <span> | </span>
                  <code>&apos;large&apos;</code>
                </div>
              </TableCell>
              <TableCell><code>&apos;medium&apos;</code></TableCell>
              <TableCell>
                Determines how much space the button will consume on the page.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}

export default TagPropsDocumentation;
