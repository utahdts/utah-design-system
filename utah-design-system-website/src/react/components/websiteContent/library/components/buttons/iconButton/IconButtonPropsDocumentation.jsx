import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';
import { documentationTypes } from '../../../../../../enums/documentationTypes';

export function IconButtonPropsDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.PROPS}>
      <TableRow>
        <TableCell><code className="primary-color">appearance</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>&apos;solid&apos;</code>
            <span> | </span>
            <code>&apos;outlined&apos;</code>
            <span> | </span>
            <code>&apos;borderless&apos;</code>
          </div>
        </TableCell>
        <TableCell><code>&apos;outlined&apos;</code></TableCell>
        <TableCell>
          Determines how the button will be formatted. Solid buttons have a solid fill color and denote emphasis
          to the user. Outlined buttons have an outline but no fill causing them to be less emphasized. Borderless have no button boundary.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">className</code></TableCell>
        <TableCell><code>string</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          This css class will be added to the button.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">color</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>&apos;primary&apos;</code>
            <span> | </span>
            <code>&apos;secondary&apos;</code>
            <span> | </span>
            <code>&apos;accent&apos;</code>
            <span> | </span>
            <code>&apos;none&apos;</code>
          </div>
        </TableCell>
        <TableCell><code>&apos;none&apos;</code></TableCell>
        <TableCell>
          Determines the color from the theme that will be used while rendering the button. Depending on the{' '}
          <span className="font-semi-bold">appearance</span> of the button, this can effect the border and/or fill color of the button.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">icon</code></TableCell>
        <TableCell><code>react node</code></TableCell>
        <TableCell><em>required</em></TableCell>
        <TableCell>
          This is the icon that will be displayed. There are a myriad of css-class icons available. See the example sandbox at the top of the&nbsp;
          page to see options and an example of usage.
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
        <TableCell>null</TableCell>
        <TableCell>
          An id to put on the &lt;button&gt; element.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">innerRef</code></TableCell>
        <TableCell><code>MutableRefObject</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          This ref will be attached to the rendered &lt;button&gt; element allowing the parent component to interact
          directly with the actual <span className="font-semi-bold">button</span> DOM element.
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
          When <span className="font-semi-bold">isDisabled</span> is true, the button will become unclickable
          and its appearance will change to be more subdued
          so that the user can tell the button is unusable.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">isTitleVisible</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>true</code>
            <span> | </span>
            <code>false</code>
          </div>
        </TableCell>
        <TableCell>false</TableCell>
        <TableCell>
          Will toggle the visibility of the title of the icon button.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">onClick</code></TableCell>
        <TableCell><code>function</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          The function to call when the button is pressed.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">size</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>formElementSizesEnum</code>
            <span> | </span>
            <code>&apos;small1x&apos;</code>
            <span> | </span>
            <code>&apos;small&apos;</code>
            <span> | </span>
            <code>&apos;medium&apos;</code>
            <span> | </span>
            <code>&apos;large&apos;</code>
            <span> | </span>
            <code>&apos;large1x&apos;</code>
          </div>
        </TableCell>
        <TableCell><code>&apos;medium&apos;</code></TableCell>
        <TableCell>
          Determines how much space the button will consume on the page.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">title</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>string</code>
          </div>
        </TableCell>
        <TableCell><em>required</em></TableCell>
        <TableCell>
          A title is required for accessibility and is used for the pop over tooltip.
        </TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
