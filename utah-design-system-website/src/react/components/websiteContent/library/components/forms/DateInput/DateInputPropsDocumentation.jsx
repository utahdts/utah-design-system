import { ExternalLink, Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper } from '@utahdts/utah-design-system';

export function DateInputPropsDocumentation() {
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
              <TableCell>
                <div className="props-code-wrapper">
                  <code>string</code>
                </div>
              </TableCell>
              <TableCell>null</TableCell>
              <TableCell>This css class will be added to the text input.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">dateFormat</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>string</code>
                </div>
              </TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Uses the <ExternalLink href="https://date-fns.org/v3.3.1/docs/format">date-fns</ExternalLink> library
                format specifiers. ie <code>MM/dd/yyyy</code>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">defaultValue</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>string</code>
                </div>
              </TableCell>
              <TableCell>null</TableCell>
              <TableCell>The DateInput will start with this value for an uncontrolled component.</TableCell>
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
              <TableCell><code className="primary-color">hasCalendarPopup</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>true</code>
                  <span> | </span>
                  <code>false</code>
                </div>
              </TableCell>
              <TableCell>true</TableCell>
              <TableCell>Triggering the calendar icon will pop open a CalenderInput from which a date may be selected.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">id</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>string</code>
                  <span> | </span>
                  <code>number</code>
                </div>
              </TableCell>
              <TableCell>(required)</TableCell>
              <TableCell>An id to put on the input element. Also will be used as the path to the value in a FormContext.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">innerRef</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>MutableRefObject</code>
                </div>
              </TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This ref will be attached to the rendered <code>text input</code> element&apos;s wrapper element allowing the
                parent component to interact directly with the actual DOM elements.
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
              <TableCell>false</TableCell>
              <TableCell>
                When isClearable is true, an icon button will be displayed to allow the user to set the value
                back to blank.
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
              <TableCell>false</TableCell>
              <TableCell>
                When isDisabled is true, the date input will become unclickable and its appearance will change
                to be more subdued so that the user can tell the date input is unusable.
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
              <TableCell>false</TableCell>
              <TableCell>
                Used to make the date input a required field. This will set the <code>required</code> attribute and
                display an asterisk next to its label.
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
              <TableCell>Label to be displayed next to the date input.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">labelClassName</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>string</code>
                </div>
              </TableCell>
              <TableCell>null</TableCell>
              <TableCell>The css class to add to the <code>label</code> element.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">name</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This will be used for the <code>name</code> attribute of the text input element.
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
              <TableCell>The function to call when a date is entered.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">onClear</code></TableCell>
              <TableCell><code>function</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>Function to call when the user clears the input.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">placeholder</code></TableCell>
              <TableCell><code>string</code></TableCell>
              <TableCell>null</TableCell>
              <TableCell>Placeholder text to show in the text input.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">showCalendarTodayButton</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>true</code>
                  <span> | </span>
                  <code>false</code>
                </div>
              </TableCell>
              <TableCell>true</TableCell>
              <TableCell>
                Controls whether the popup calendar input shows a &quot;Today&quot; button at the bottom to go to the current date.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">value</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>string</code>
                </div>
              </TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                A string representing the current date value. If it is not formatted to match
                the <code>dateFormat</code> property the date used in the calendar input will start with no
                selected date. If the provided value is a valid date then the date input will show the
                given date as the current selected value in the calendar input.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">wrapperClassName</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>string</code>
                </div>
              </TableCell>
              <TableCell>null</TableCell>
              <TableCell>A class to add to the wrapper class around the date input.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell><code className="primary-color">...rest</code></TableCell>
              <TableCell>
                <div className="props-code-wrapper">
                  <code>...any</code>
                </div>
              </TableCell>
              <TableCell>null</TableCell>
              <TableCell>Additional props you wish to pass to the text input.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
