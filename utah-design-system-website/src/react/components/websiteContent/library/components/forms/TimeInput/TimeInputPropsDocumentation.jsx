import { ExternalLink, TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function TimeInputPropsDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.PROPS}>
      <TableRow>
        <TableCell><code className="primary-color">allowCustomEntry</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>true</code>
            <span> | </span>
            <code>false</code>
          </div>
        </TableCell>
        <TableCell><code>false</code></TableCell>
        <TableCell>
          When <code>hasTimePopup</code> is <code>true</code>, this allows entering a value different than the values in the menu.
          Note that when <code>hasTimePopup</code> is <code>false</code> that any value is enterable no matter the value
          of <code>allowCustomEntry</code> since the controlling component determines what to do with a value on change.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">className</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>string</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>This css class will be added to the input.</TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">defaultValue</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>string</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>The input will start with this value selected for an uncontrolled component.</TableCell>
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
        <TableCell><code className="primary-color">hasTimePopup</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>true</code>
            <span> | </span>
            <code>false</code>
          </div>
        </TableCell>
        <TableCell><code>true</code></TableCell>
        <TableCell>
          When <code>hasTimePopup</code> is <code>true (default)</code> a select list is used for user entry.
          When <code>hasTimePopup</code> is <code>false</code> a text input is used for user entry.
        </TableCell>
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
        <TableCell>An id to put on the input element.</TableCell>
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
          This ref will be attached to the rendered element&apos;s wrapper element allowing the parent component to interact
          directly with the actual DOM elements.
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
          When isClearable is true, an icon button will be displayed to allow the user to set the input&apos;s value
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
          This will be used for the <code>name</code> attribute of the input element.
          Defaults to the <code>id</code> prop.
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
        <TableCell>The function to call when the input&apos;s value changes.</TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">onClear</code></TableCell>
        <TableCell><code>function</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          Function to call when the user clears the input&apos;s value.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">placeholder</code></TableCell>
        <TableCell><code>string</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>Placeholder text to put in the input.</TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">timeFormat</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>string</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          Uses the <ExternalLink href="https://date-fns.org/v3.3.1/docs/format">date-fns</ExternalLink> library
          format specifiers. ie <code>hh:mm</code>. This effects how the vales are formatted
          for the popup picker select list. This format is not enforced as validation of data
          is the responsibility of the controlling component.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">timeRangeBegin</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>string</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          Can specify at what time to begin populating options for the popup.
          Uses the time format given in the <code>timeFormat</code> prop.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">timeRangeEnd</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>string</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          Can specify at what time to end populating options for the popup.
          Uses the time format given in the <code>timeFormat</code> prop.
          The <code>timeRangeEnd</code> value will be included if it is a match for a step determined
          by <code>timeRangeBegin</code> and <code>timeRangeIncrement</code>.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">timeRangeIncrement</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>number</code>
          </div>
        </TableCell>
        <TableCell>15</TableCell>
        <TableCell>
          Determines how many minutes are between each entry in the popup select list.
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
        <TableCell>The input&apos;s current value</TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">wrapperClassName</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>string</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>A class to add to the wrapper class around the input element.</TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">...rest</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>...any</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>Additional props you wish to pass to the input.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
