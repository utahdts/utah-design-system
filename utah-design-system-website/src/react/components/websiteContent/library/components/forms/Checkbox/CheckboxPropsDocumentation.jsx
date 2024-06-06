import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function CheckboxPropsDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.PROPS}>
      <TableRow>
        <TableCell><code className="primary-color">className</code></TableCell>
        <TableCell><code>string</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          The CSS Class to use on the input.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">defaultValue</code></TableCell>
        <TableCell>
          <code>true</code>
          <span> | </span>
          <code>false</code>
        </TableCell>
        <TableCell>false</TableCell>
        <TableCell>
          Starting value of the input, if not controlled.
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
        <TableCell>false</TableCell>
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
        <TableCell>false</TableCell>
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

      <TableRow>
        <TableCell><code className="primary-color">wrapperClassName</code></TableCell>
        <TableCell><code>string</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          This css class will be added to main container. This will be added to the <code>&lt;div&gt;</code> element.
        </TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
