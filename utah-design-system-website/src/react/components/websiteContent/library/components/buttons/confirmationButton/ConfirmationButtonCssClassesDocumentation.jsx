import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';
import { pageUrls } from '../../../../../routing/pageUrls';

export function ConfirmationButtonCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.button--confirm</code></TableCell>
        <TableCell>CSS class for a button when clicked.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Others</TableCell>
        <TableCell>See <Link to={`${pageUrls.button}#section-settings-props`}>Button documentation</Link>.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
