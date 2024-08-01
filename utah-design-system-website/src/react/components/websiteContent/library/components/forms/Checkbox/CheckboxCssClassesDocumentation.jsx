import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function CheckboxCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.input-wrapper--checkbox</code></TableCell>
        <TableCell>This class is the overall wrapper class for the checkbox.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
