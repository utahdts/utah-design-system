import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function CharacterCountCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.character-count</code></TableCell>
        <TableCell>This class is the overall wrapper class for the character counter.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.character-count--over-limit</code></TableCell>
        <TableCell>This class is used when the count is over the set limit.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
