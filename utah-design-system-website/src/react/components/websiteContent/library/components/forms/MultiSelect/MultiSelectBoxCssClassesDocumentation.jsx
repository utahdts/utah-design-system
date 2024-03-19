import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper
} from '@utahdts/utah-design-system';

/** @returns {import('react').JSX.Element} */
export default function MultiSelectCssClassesDocumentation() {
  return (
    <TableWrapper>
      <Table className="table--lines-x table--full-width">
        <TableHead>
          <TableHeadRow>
            <TableHeadCell className="text-left css-classes">CSS Classes</TableHeadCell>
            <TableHeadCell className="text-left ">Description</TableHeadCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell><code>multi-select</code></TableCell>
            <TableCell>
              The area that wraps the combo box, tags and controls.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>multi-select__wrapper</code></TableCell>
            <TableCell>
              A wrapper class to target inner tooltip.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>multi-select__combo-box</code></TableCell>
            <TableCell>
              The area that wraps the combo box.
              Includes: list of options, text input. etc.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>combo-box-input</code></TableCell>
            <TableCell>
              The text input within the combo box, allowing the user to search.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>combo-box-input__chevron</code></TableCell>
            <TableCell>
              This button remains hidden when paired with the multi-select.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>multi-select__chevron</code></TableCell>
            <TableCell>
              The button used to show or hide the list of options.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>multi-select__clear-button</code></TableCell>
            <TableCell>
              The button used to clear the multi-select.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>multi-select--clear-icon-visible</code></TableCell>
            <TableCell>
              Adjust the inner spacing the take the clearing button into account.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>multi-select--disabled</code></TableCell>
            <TableCell>
              Styles the multi-select to reflect a disabled state.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>multi-select--focused</code></TableCell>
            <TableCell>
              Styles the multi-select to reflect a focused state.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
