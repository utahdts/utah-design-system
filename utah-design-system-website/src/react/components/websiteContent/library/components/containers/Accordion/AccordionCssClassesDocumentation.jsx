import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function AccordionCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.accordion</code></TableCell>
        <TableCell>
          The base class for an accordion.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code>.accordion__header</code></TableCell>
        <TableCell>
          Class for the accordion header/controls.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code>.accordion__header--open</code></TableCell>
        <TableCell>
          CSS class modifier for the header/controls when the accordion is open.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code>.accordion__content</code></TableCell>
        <TableCell>
          Class for the accordion content.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code>.accordion__content--open</code></TableCell>
        <TableCell>
          CSS class modifier for the content when the accordion is open.
        </TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
