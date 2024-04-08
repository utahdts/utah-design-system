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

export function AccordionPropsDocumentation() {
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
              <TableCell><code>React Node</code></TableCell>
              <TableCell><em>required</em></TableCell>
              <TableCell>
                The content of the accordion. You can have it
                be any element to be rendered inside the element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">className</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This css class will be added to the main container. This will be added to the main <code>&lt;div&gt;</code> element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">contentClassName</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This css class will be added to the content wrapper <code>&lt;div&gt;</code> element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">headingLevel</code></TableCell>
              <TableCell><code>number</code></TableCell>
              <TableCell>2</TableCell>
              <TableCell>
                Dictates the heading level of the accordion header.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">headerClassName</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This css class will be added to the accordion header <code>&lt;button&gt;</code> element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">headerContent</code></TableCell>
              <TableCell><code>React Node</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                The content of the header. You can have it
                be any element to be rendered inside the element.<br />
                <b>Note</b>: the content will be rendered inside a heading; adjust accordingly.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">id</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell><em>required</em></TableCell>
              <TableCell>
                An id to put on the main <code>&lt;div&gt;</code> element. This will also be used for
                accessibility purposes to set the <code>aria-controls</code> attribute of the header.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">isOpen</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>true</code>
                  <span> | </span>
                  <code>false</code>
                </div>
              </TableCell>
              <TableCell>false</TableCell>
              <TableCell>
                This prop will determine if the accordion should be rendered closed or opened.
                Can be used to programmatically control the component.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">onToggle</code></TableCell>
              <TableCell><code>function</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Function to call when the accordion header is clicked. Is passed a <code>boolean</code> value.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
