import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../documentation/SettingsDocumentation';

export function TooltipsCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.tooltip__wrapper</code></TableCell>
        <TableCell>The overall wrapper class for the tooltip.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.tooltip__wrapper--visible</code></TableCell>
        <TableCell>CSS class modifier to show the tooltip.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.tooltip__wrapper--hidden</code></TableCell>
        <TableCell>CSS class modifier to hide the tooltip.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.tooltip__content</code></TableCell>
        <TableCell>The content of the tooltip.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.tooltip__arrow</code></TableCell>
        <TableCell>The arrow of the tooltip, pointing toward the reference element.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
