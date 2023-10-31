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
function TextAreaPropsDocumentation() {
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
                This css class will be added to the input. This will be added to the <code>&lt;textarea&gt;</code> element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">defaultValue</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Starting value of the input, if not controlled.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">errorMessage</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Error message to display. This will appear after the label and before the input.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">id</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell><em>required</em></TableCell>
              <TableCell>
                An id to put on the <code>&lt;textarea&gt;</code> element. This will also be used as the <code>name</code>{' '}
                attribute (if not set) and <code>htmlFor</code> attribute of the input&apos;s label.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">innerRef</code></TableCell>
              <TableCell><code>MutableRefObject</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This ref will be attached to the rendered <code>&lt;div&gt;</code> element allowing the parent component to interact
                directly with the actual <code>&lt;div&gt;</code> DOM element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">isClearable</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>true</code>
                  <span> | </span>
                  <code>false</code>
                </div>
              </TableCell>
              <TableCell><code>false</code></TableCell>
              <TableCell>
                This prop will add an icon button allowing the user to clear the input.<br />
                The button appears after the user enters a value.
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
              <TableCell><code className="primary-color">isRequired</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>true</code>
                  <span> | </span>
                  <code>false</code>
                </div>
              </TableCell>
              <TableCell><code>false</code></TableCell>
              <TableCell>
                Used to make the input a required field. This will set the <code>required</code> attribute and display an asterisk next to its label.
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
              <TableCell><code className="primary-color">labelClassName</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This css class will be added to the <code>&lt;label&gt;</code> element.
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
                Function to call when the input&apos;s value changes.
                The function is passed the <code>event</code> object so you can handle it or not.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">onClear</code></TableCell>
              <TableCell><code>function</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Function to call when the user clears the input.
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
              <TableCell><code className="primary-color">placeholder</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Displays a hint before the user enters a value. Will set the <code>placeholder</code> attribute.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">value</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Value of the input.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">wrapperClassName</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This css class will be added to main container. This will be added to the <code>&lt;div&gt;</code> element.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}

export default TextAreaPropsDocumentation;
