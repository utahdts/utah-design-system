import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../../documentation/SettingsDocumentation';

export function PaginationCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.pagination</code></TableCell>
        <TableCell>This is the overall wrapper class for the pagination.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.pagination__link</code></TableCell>
        <TableCell>This class is used for a pagination link.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.pagination__link--active</code></TableCell>
        <TableCell>CSS class modifier used to highlight the current page index.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.pagination__ellipsis</code></TableCell>
        <TableCell>This class is used for the ellipsis, for hidden ranges.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.pagination__next</code>, <code>.pagination__prev</code></TableCell>
        <TableCell>CSS classes used to style the Next and Previous links.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
