import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function RadioButtonPropsDocumentation() {
  return (
    <>
      <h3><code>RadioButtonGroup</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">children</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>React.ReactNode</code>
              </div>
            </TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              The content of the fieldset.<br />
              Includes <code>RadioButton</code>.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The CSS Class to use on the fieldset.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">defaultValue</code></TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Which radio button should be selected by default, if not controlled.<br />
              Is used by <code>RadioButtonGroupContextProvider</code>.
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
              An id to put on the <code>&lt;fieldset&gt;</code> element.<br /> This will also be use as the <code>name</code>{' '}
              attribute for any <code>RadioButton</code> contained.<br /> Is used by <code>RadioButtonGroupContextProvider</code>.
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
              Used to mark the fieldset as required. This will display an asterisk next to its label.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">label</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              Label of the fieldset.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">onChange</code></TableCell>
            <TableCell><code>function</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Function to call when the input&apos;s value changes. Will return the new value.<br />
              Is used in <code>RadioButtonGroupContextProvider</code>.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">value</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Value of the <code>RadioButtonGroupContextProvider</code> component.
            </TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>

      <h3><code>RadioButton</code></h3>
      <div className="documentation-content--small-text static-example static-example--blank">
        <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.PROPS}>
          <TableRow>
            <TableCell><code className="primary-color">className</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              The CSS Class to use on the <code>&lt;input/&gt;</code>.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">defaultIsChecked</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>true</code>
                <span> | </span>
                <code>false</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              Allows default checking if uncontrolled.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">id</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              An id to put on the <code>&lt;input&gt;</code> element.<br />
              This will also be use as the <code>htmlFor</code> attribute of the input&apos;s label.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">innerRef</code></TableCell>
            <TableCell><code>HTMLDivElement</code></TableCell>
            <TableCell>null</TableCell>
            <TableCell>
              This ref will be attached to the rendered <code>&lt;div&gt;</code> element allowing the parent component to interact
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
            <TableCell>false</TableCell>
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
              Will be overwritten if used with <code>RadioButtonGroup</code>.
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell><code className="primary-color">value</code></TableCell>
            <TableCell><code>string</code></TableCell>
            <TableCell><em>required</em></TableCell>
            <TableCell>
              Value to put in to the form data if this radio button is selected.
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

          <TableRow>
            <TableCell><code className="primary-color">...rest</code></TableCell>
            <TableCell>
              <div className="props-code-wrapper">
                <code>...any</code>
              </div>
            </TableCell>
            <TableCell>null</TableCell>
            <TableCell>Additional props you wish to pass to the <code>&lt;input/&gt;</code>.</TableCell>
          </TableRow>
        </SettingsDocumentation>
      </div>
    </>
  );
}
