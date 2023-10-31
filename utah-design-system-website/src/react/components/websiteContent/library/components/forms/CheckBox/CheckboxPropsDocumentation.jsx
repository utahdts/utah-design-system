import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper,
} from '@utahdts/utah-design-system';
import React from 'react';

/** @returns {JSX.Element} */
export function CheckboxPropsDocumentation() {
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
                The CSS Class to use on the input.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">errorMessage</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Error message to display.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">id</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell><em>required</em></TableCell>
              <TableCell>
                An id to put on the <code>&lt;input&gt;</code> element. This will also be use as the <code>name</code>{' '}
                attribute (if not set) and <code>htmlFor</code> attribute of the input&apos;s label.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">innerRef</code></TableCell>
              <TableCell><code>MutableRefObject</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This ref will be attached to the rendered <code>&lt;input&gt;</code> element allowing the parent component to interact
                directly with the actual <code>input</code> DOM element.
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
                Used to disable the input. This will set the <code>disabled</code> attribute.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">label</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell><em>required</em></TableCell>
              <TableCell>
                Label of the input.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">name</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This will be used for the <code>name</code> attribute of the <code>&lt;input&gt;</code> element.
                Default to the id prop.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">onChange</code></TableCell>
              <TableCell><code>function</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Function to call when the input&apos;s value changes. Will return an <code>event</code> object.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">onSubmit</code></TableCell>
              <TableCell><code>function</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Function to call when the user hits enter while the input has focus.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">value</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>true</code>
                  <span> | </span>
                  <code>false</code>
                </div>
              </TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Value of the input.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
