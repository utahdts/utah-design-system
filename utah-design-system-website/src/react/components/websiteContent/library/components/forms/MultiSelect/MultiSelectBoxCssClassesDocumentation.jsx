import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function MultiSelectCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.multi-select</code></TableCell>
        <TableCell>
          The area that wraps the combo box, tags and controls.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.multi-select__wrapper</code></TableCell>
        <TableCell>
          A wrapper class to target inner tooltip.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.multi-select__combo-box</code></TableCell>
        <TableCell>
          The area that wraps the combo box.
          Includes: list of options, text input. etc.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.combo-box-input</code></TableCell>
        <TableCell>
          The text input within the combo box, allowing the user to search.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.combo-box-input__chevron</code></TableCell>
        <TableCell>
          This button remains hidden when paired with the multi-select.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.multi-select__chevron</code></TableCell>
        <TableCell>
          The button used to show or hide the list of options.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.multi-select__clear-button</code></TableCell>
        <TableCell>
          The button used to clear the multi-select.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.multi-select--clear-icon-visible</code></TableCell>
        <TableCell>
          Adjust the inner spacing the take the clearing button into account.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.multi-select--disabled</code></TableCell>
        <TableCell>
          Styles the multi-select to reflect a disabled state.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.multi-select--focused</code></TableCell>
        <TableCell>
          Styles the multi-select to reflect a focused state.
        </TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
