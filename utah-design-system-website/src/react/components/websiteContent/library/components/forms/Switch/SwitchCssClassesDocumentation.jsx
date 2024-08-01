import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function SwitchCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.switch--small</code></TableCell>
        <TableCell>CSS class modifier for a small switch.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.switch--large</code></TableCell>
        <TableCell>CSS class modifier for a large switch.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
