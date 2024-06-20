import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../../documentation/SettingsDocumentation';

export function ClickableTagCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.tag</code></TableCell>
        <TableCell>This class is the tag.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.tag__wrapper</code></TableCell>
        <TableCell>This class is the overall wrapper for the tag.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.tag__button</code></TableCell>
        <TableCell>This class is the interactive tag.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.tag--selected</code></TableCell>
        <TableCell>This class is the used when the tag has been toggled (selected).</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.tag--icon</code></TableCell>
        <TableCell>This class is the optional icon.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.tag--icon-left</code>, <code>.tag--icon-right</code></TableCell>
        <TableCell>These classes are the optional icon position.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.tag--small</code>, <code>.tag--medium</code>, <code>.tag--large</code></TableCell>
        <TableCell>These classed are used to set the tag size.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
