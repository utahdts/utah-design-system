import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function CharacterCountPropsDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.PROPS}>
      <TableRow>
        <TableCell><code className="primary-color">className</code></TableCell>
        <TableCell><code>string</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          The CSS Class to use on the character counter wrapper.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">maxLength</code></TableCell>
        <TableCell><code>number</code></TableCell>
        <TableCell><em>required</em></TableCell>
        <TableCell>
          Number of characters allowed in the input.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">id</code></TableCell>
        <TableCell><code>string</code></TableCell>
        <TableCell><em>required</em></TableCell>
        <TableCell>
          The id of the character count element.
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell><code className="primary-color">text</code></TableCell>
        <TableCell><code>string</code></TableCell>
        <TableCell>null</TableCell>
        <TableCell>
          The text of the that is being counted.
        </TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
