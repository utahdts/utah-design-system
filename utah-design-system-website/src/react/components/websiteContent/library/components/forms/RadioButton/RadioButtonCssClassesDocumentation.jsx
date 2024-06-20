import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function RadioButtonCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.fieldset--radio-wrapper</code></TableCell>
        <TableCell>This class is used for the fieldset in <code>RadioButtonGroup</code>.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.input-wrapper--radio</code></TableCell>
        <TableCell>This is the overall wrapper class for the radio button.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
