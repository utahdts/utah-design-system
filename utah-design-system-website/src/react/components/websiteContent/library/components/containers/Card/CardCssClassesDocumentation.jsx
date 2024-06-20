import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function CardCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.card</code></TableCell>
        <TableCell>This class is the overall wrapper class for a card.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.card--solid</code></TableCell>
        <TableCell>CSS class modifier for a card with a solid background.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.card--horizontal</code></TableCell>
        <TableCell>CSS class modifier for a horizontal card.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.card__title</code></TableCell>
        <TableCell>Styles for the title of a card.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.card__image</code></TableCell>
        <TableCell>Styles for the image of a card.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.card__icon</code></TableCell>
        <TableCell>Styles for the icon of a card.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
