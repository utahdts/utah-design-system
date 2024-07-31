import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import { pageUrls } from '../../../../../routing/pageUrls';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function TimeInputCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.combo-box-input</code></TableCell>
        <TableCell>
          This component uses the <Link to={pageUrls.comboBox}>combo box component</Link> for functionality.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.time-input__wrapper</code></TableCell>
        <TableCell>
          This is the wrapper class that surrounds a combo box input. It allows styling of different
          elements of the time input.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.time-input__clock-icon</code></TableCell>
        <TableCell>
          The clock icon.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.time-input__clock-icon--static</code></TableCell>
        <TableCell>
          The clock icon when there is no combo box popup.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.time-input__clock-icon--static</code></TableCell>
        <TableCell>
          The clock icon when the input is disabled.
        </TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
