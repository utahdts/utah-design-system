import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function ModalsCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.modal-backdrop</code></TableCell>
        <TableCell>This class is the dark overlay that separates the modal from the background.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.modal__wrapper</code></TableCell>
        <TableCell>This is the overall wrapper class for the modal.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.modal__title</code></TableCell>
        <TableCell>This is the wrapper class for <code>ModalTitle</code>.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.modal__content</code></TableCell>
        <TableCell>This is the wrapper class for <code>ModalContent</code>.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.modal__footer</code></TableCell>
        <TableCell>This is the wrapper class for <code>ModalFooter</code>.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.modal__close-button</code></TableCell>
        <TableCell>This class is used to position the close button.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <div className="props-code-wrapper">
            <code>.modal--small</code> |
            <code>.modal--large</code>
          </div>
        </TableCell>
        <TableCell>
          CSS class modifiers to change the modal <code>max-width</code>.<br />
          Widths are:
          <div className="props-code-wrapper">
            <code>440px</code> |
            <code>990px</code>.
          </div>
        </TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
