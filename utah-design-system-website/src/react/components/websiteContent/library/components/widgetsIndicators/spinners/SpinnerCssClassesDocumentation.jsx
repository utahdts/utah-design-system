import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function SpinnerCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.spinner</code></TableCell>
        <TableCell>The base css class for a spinner.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.spinner--indeterminate</code></TableCell>
        <TableCell>CSS class modifier for spinner with an indeterminate value.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.spinner--determinate</code></TableCell>
        <TableCell>CSS class modifier for spinner with a specified value.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
