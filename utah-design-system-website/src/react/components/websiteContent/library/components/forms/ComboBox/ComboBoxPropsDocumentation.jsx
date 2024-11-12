import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function ComboBoxPropsDocumentation() {
  return (
    <>
      <h3><code>ComboBox</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">allowCustomEntry</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>true</code>
                <span> | </span>
                <code>false</code>
              </div>
            </TableCell>
            <TableCell>false</TableCell>
            <TableCell>
              When true, the user can enter custom values instead of only being allowed to select from the provided list.
              Parent component gets the new value through <code>onChange</code>.
              Parent component can also use <code>onCustomEntry</code> to be notified of a new custom entered value.
              It is the parent&apos;s responsibility to add the new custom item to the list of options if desired.
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
            <TableCell>This css class will be added to the select.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">defaultValue</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>The select will start with this value selected for an uncontrolled component.</TableCell>
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
            <TableCell><em>required</em></TableCell>
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
              This ref will be attached to the rendered <code>select</code> element&apos;s wrapper element allowing the parent component to interact
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
            <TableCell>false</TableCell>
            <TableCell>
              When isClearable is true, an icon button will be displayed to allow the user to set the select&apos;s value
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
              When isDisabled is true, the select will become unclickable and its appearance will change
              to be more subdued so that the user can tell the select is unusable.
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
              Used to make the select a required field. This will set the <code>required</code> attribute and display an asterisk next to its label.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">label</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
              </div>
            </TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>Label to be displayed next to the select.</TableCell>
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
              This will be used for the <code>name</code> attribute of the <code>&lt;select&gt;</code> element.
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
            <TableCell>The function to call when one of a select&apos;s options is selected.</TableCell>
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
            <TableCell><code className="primary-color">onCustomEntry</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>function</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The provided function is called when the user enters a custom value. See <code>allowCustomEntry</code> for more details.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">placeholder</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>An extra select option will be placed at the top of the list so that the user first sees this item in the select.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">value</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>The selected option&apos;s value. All values in an HTML <code>select</code> are strings.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">wrapperClassName</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>A class to add to the wrapper class around the <code>select</code> element.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>select</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>ComboBoxOption</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>Most often, children is a the label. Will overwrite the <code>label</code>.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>This css class will be added to the <code>li</code> element.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">identifiesWithOptionGroupId</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Some things like group labels are focusable in the list, but not filterable, this is their `id`.</TableCell>
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
              When isDisabled is true, the option will become unselectable and its appearance will change
              to be more subdued so that the user can tell the option is unusable.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">isStatic</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>true</code>
                <span> | </span>
                <code>false</code>
              </div>
            </TableCell>
            <TableCell>false</TableCell>
            <TableCell>
              When isStatic is true, the option will always be part of the result when filtered.
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
              When isHidden is true, the option will not be displayed.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">label</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
              </div>
            </TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>The label to display.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">value</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
              </div>
            </TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>The option&apos;s value.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>select</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>ComboBoxOptionGroup</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell><code>React.ReactNode</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>Most often, children is a list of <code>ComboBoxOption</code>.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>This css class will be added to the <code>li</code> element.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code className="primary-color">label</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>string</code>
              </div>
            </TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>The label to display.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>
    </>
  );
}
