import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function SwitchPropsDocumentation() {
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
        <TableCell>This css class will be added to the switch.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code className="primary-color">defaultValue</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>boolean</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>Use the <span className="font-semi-bold">defaultValue</span> for an uncontrolled component.</TableCell>
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
          This ref will be attached to the rendered <code>&lt;div&gt;</code> element allowing the parent component to interact
          directly with the actual <span className="font-semi-bold">switch</span> DOM element.
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
          When isDisabled is true, the switch will become unclickable and its appearance will change
          to be more subdued so that the user can tell the switch is unusable.
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
        <TableCell>Label to be displayed next to the switch.</TableCell>
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
        <TableCell><code className="primary-color">labelOff</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>node</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>A label can be displayed within the switch itself when its value is set to <code>false</code>.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code className="primary-color">labelOn</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>node</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>A label can be displayed within the switch itself when its value is set to <code>true</code>.</TableCell>
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
        <TableCell>
          <div className="props-code-wrapper">
            <code>function</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>The function to call when the switch is triggered.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code className="primary-color">onSubmit</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>function</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>The function to call when the enter key is pressed.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code className="primary-color">size</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>formElementSizesEnum</code>
            <span> | </span>
            <code>&apos;small&apos;</code>
            <span> | </span>
            <code>&apos;medium&apos;</code>
            <span> | </span>
            <code>&apos;large&apos;</code>
          </div>
        </TableCell>
        <TableCell>&apos;medium&apos;</TableCell>
        <TableCell>Determines how much space the switch will consume on the page.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code className="primary-color">sliderChildren</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>node</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>Element to be displayed within the indicator.</TableCell>
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
        <TableCell>Whether the input is switched.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code className="primary-color">width</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>number</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>Width of the switch in <code>px</code>.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code className="primary-color">...rest</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>...any</code>
          </div>
        </TableCell>
        <TableCell>null</TableCell>
        <TableCell>Additional props you wish to pass to the <code>input</code>.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
