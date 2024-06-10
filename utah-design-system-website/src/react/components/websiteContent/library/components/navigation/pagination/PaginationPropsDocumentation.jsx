import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function PaginationPropsDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.PROPS}>
      <TableRow>
        <TableCell><code className="primary-color">ariaLabel</code></TableCell>
        <TableCell><code>string</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          Used by accessibility to describe the purpose of the pagination.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">className</code></TableCell>
        <TableCell><code>string</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          The CSS Class to use on the pagination wrapper.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">defaultValue</code></TableCell>
        <TableCell><code>number</code></TableCell>
        <TableCell>0</TableCell>
        <TableCell>
          Starting page index.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">id</code></TableCell>
        <TableCell><code>string</code></TableCell>
        <TableCell><em>required</em></TableCell>
        <TableCell>
          An id to put on the pagination wrapper.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">innerRef</code></TableCell>
        <TableCell><code>HTMLElement</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          This ref will be attached to the wrapper element, allowing the parent component to interact
          directly with the actual DOM element.<br />
          See the <code>wrapInElement</code> prop.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">onChange</code></TableCell>
        <TableCell><code>function</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          Function to call when the current page index changes. Will return a <code>number</code>.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">itemsPerPage</code></TableCell>
        <TableCell><code>number</code></TableCell>
        <TableCell><em>required</em></TableCell>
        <TableCell>
          How many items are on each page.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">totalNumberItems</code></TableCell>
        <TableCell><code>number</code></TableCell>
        <TableCell><em>required</em></TableCell>
        <TableCell>
          How many items are in the full data set.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">value</code></TableCell>
        <TableCell><code>number</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          Current page index.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">wrapInElement</code></TableCell>
        <TableCell>
          <div className="props-code-wrapper">
            <code>div</code>
            <span> | </span>
            <code>nav</code>
          </div>
        </TableCell>
        <TableCell><code>div</code></TableCell>
        <TableCell>
          What element should be used to wrap the pagination.<br />
          <strong>Note</strong>: if set to <code>nav</code>, make sure the <code>ariaLabel</code> attribute is set.
        </TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
