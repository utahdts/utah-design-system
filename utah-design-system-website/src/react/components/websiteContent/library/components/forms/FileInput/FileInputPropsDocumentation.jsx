import {
  ExternalLink,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper
} from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import { pageUrls } from '../../../../../routing/pageUrls';

export function FileInputPropsDocumentation() {
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
              <TableCell><code className="primary-color">acceptedFileTypes</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Defines the file types the file input should accept.<br />
                <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept">Learn more</ExternalLink>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">children</code></TableCell>
              <TableCell><code>React.ReactNode</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Used to customize the list of files. Accepts two props: <code>file</code> and <code>removeFile()</code>.<br /> If not defined,
                will default to a <Link to={pageUrls.tags}><code>Tag</code></Link> component.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">className</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>This css class will be added to the input wrapper.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">errorMessage</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>string</code>
                </div>
              </TableCell>
              <TableCell>null</TableCell>
              <TableCell>Message to be displayed when an error occurs.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">hint</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Will display an <Link to={pageUrls.infoBox}><code>Info Box</code></Link> between the label and the input.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">id</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>string</code>
                </div>
              </TableCell>
              <TableCell>(required)</TableCell>
              <TableCell>An id to put on the input element.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">innerRef</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>Ref&lt;HTMLDivElement&gt;</code>
                </div>
              </TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This ref will be attached to the rendered <code>div</code> element wrapper allowing the parent component to interact
                directly with the actual DOM elements.
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
                When isDisabled is true, the input will become unclickable and its appearance will change
                to be more subdued so that the user can tell the input is unusable.
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
              <TableCell>
                <div className="props-code-wrapper">
                  <code>string</code>
                </div>
              </TableCell>
              <TableCell>(required)</TableCell>
              <TableCell>Label to be displayed next to the input.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">multiple</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>true</code>
                  <span> | </span>
                  <code>false</code>
                </div>
              </TableCell>
              <TableCell><code>false</code></TableCell>
              <TableCell>
                Used to allow the user to select more than one file.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">name</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This will be used for the <code>name</code> attribute of the <code>&lt;input&gt;</code> element.
                Defaults to the id prop.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">onChange</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>function</code>
                </div>
              </TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                The function to call when one or more files are selected.<br />
                Will return a <code>FileList</code> and <code>ChangeEvent</code>.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">value</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>FileList</code>
                </div>
              </TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Used to set the input <code>HTMLInputElement.files</code> property.<br />
                <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#getting_information_on_selected_files">Learn more.</ExternalLink>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
