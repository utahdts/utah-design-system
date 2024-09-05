import { ExternalLink, TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function CalendarInputPropsDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.PROPS}>
      <TableRow>
        <TableCell><code className="primary-color">className</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>string</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>This css class will be added to the calendar.</TableCell>
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
          format specifiers. ie <code>MM/dd/yyyy</code>. Selected dates will be returned to controlling component
          in this format.
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
        <TableCell>The CalendarInput will start with this value for an uncontrolled component.</TableCell>
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
        <TableCell><code className="primary-color">id</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>string</code>
            <span> | </span>
            <code>number</code>
          </div>
        </TableCell>
        <TableCell>(required)</TableCell>
        <TableCell>An id to put on the calendar element.</TableCell>
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
          This ref will be attached to the wrapper element allowing the
          parent component to interact directly with the actual DOM elements.
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
          When isDisabled is true, the calendar input will become unclickable and its appearance will change
          to be more subdued so that the user can tell the calendar is unusable.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">isHidden</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>true</code>
            <span> | </span>
            <code>false</code>
          </div>
        </TableCell>
        <TableCell>false</TableCell>
        <TableCell>
          DateInput will have a CalendarInput for its popup but will keep it hidden until it pops
          open. This flag tells the CalendarInput that it is currently being drawn but is considered hidden.
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
          Used to make the calendar input a required field. This will set the <code>required</code> attribute and
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
        <TableCell>Label to be displayed next to the calendar input.</TableCell>
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
        <TableCell><code className="primary-color">onChange</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>function</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>The function to call when a date is selected.</TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">shouldSetFocusOnMount</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>true</code>
            <span> | </span>
            <code>false</code>
          </div>
        </TableCell>
        <TableCell>false</TableCell>
        <TableCell>
          When the Calendar mounts, it can have focus set to its first focusable item. Useful if the
          CalendarInput is being shown in a popup.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">showTodayButton</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>true</code>
            <span> | </span>
            <code>false</code>
          </div>
        </TableCell>
        <TableCell>true</TableCell>
        <TableCell>
          Controls whether the calendar input shows a &quot;Today&quot; button at the bottom to select the current date.
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
          selected date. If the provided value is a valid date then the calendar input will show the
          given date as the current selected value.
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
        <TableCell>A class to add to the wrapper class around the calendar input.</TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">...rest</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>...any</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>Additional props you wish to pass to the calendar input.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
