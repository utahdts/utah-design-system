import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function IconButtonCssClassesDocumentation() {
  return (
    <SettingsDocumentation className="static-example__component-wrapper" type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.icon-button</code></TableCell>
        <TableCell>
          The base css class for an icon button. You must include both <code>button</code>
          and <code>icon-button</code> classes for it to render properly.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.icon-button--borderless</code></TableCell>
        <TableCell>Render an icon button without a visible button boundary.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.icon-button--visible-title</code></TableCell>
        <TableCell>Render an icon button with a visible title.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
