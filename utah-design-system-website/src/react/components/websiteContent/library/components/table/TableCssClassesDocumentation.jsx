import { TableCell, TableRow } from '@utahdts/utah-design-system';
import { documentationTypes } from '../../../../../enums/documentationTypes';
import { SettingsDocumentation } from '../../documentation/SettingsDocumentation';

export function TableCssClassesDocumentation() {
  return (
    <SettingsDocumentation type={documentationTypes.CSS}>
      <TableRow>
        <TableCell><code>.table__wrapper</code></TableCell>
        <TableCell>Base CSS class the overall wrapper.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.table__wrapper--full-width</code></TableCell>
        <TableCell>CSS modifier to extend the wrapper to 100% of the container.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.table--alt</code></TableCell>
        <TableCell>CSS modifier to change the background color of every other row.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.table--lines-x</code></TableCell>
        <TableCell>CSS modifier to add an horizontal border in between each row.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.table--lines-y</code></TableCell>
        <TableCell>CSS modifier to add a vertical border in between each column.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.table--v-align-center</code></TableCell>
        <TableCell>CSS modifier to set the vertical alignment.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.table--condensed</code></TableCell>
        <TableCell>CSS modifier to shorten the table rows.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.table--full-width</code></TableCell>
        <TableCell>CSS modifier to extend the table to 100% of the container.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.table--td-center</code></TableCell>
        <TableCell>CSS modifier to set the horizontal alignment.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.table-header</code></TableCell>
        <TableCell>Base CSS class for the table header - <code>th</code>.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.table-header--sortable</code></TableCell>
        <TableCell>CSS modifier to style the table header when a table is enabling sorting.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.table-header--sorted</code></TableCell>
        <TableCell>CSS modifier to style the table header for the currently sorted column.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.table-header__cell</code></TableCell>
        <TableCell>CSS class to style a single <code>th</code>.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <div className="props-code-wrapper">
            <code>.table-header__cell--sort-ascending</code>
            <code>.table-header__cell--sort-descending</code>
          </div>
        </TableCell>
        <TableCell>CSS modifiers for the currently sorted <code>th</code>, according to the sorting direction.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><code>.table-header__row--filters</code></TableCell>
        <TableCell>CSS class to style row containing the filters inputs.</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <div className="props-code-wrapper">
            <code>.table__no-results-td</code>
            <code>.table__no-results-text </code>
          </div>
        </TableCell>
        <TableCell>CSS classes used to style the message alerting the user that no results were found.</TableCell>
      </TableRow>
    </SettingsDocumentation>
  );
}
