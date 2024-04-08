import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper
} from '@utahdts/utah-design-system';

export function ComboBoxCssClassesDocumentation() {
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
            <TableCell><code>.combo-box-input[type=&quot;text&quot;]</code></TableCell>
            <TableCell>
              This helps style the combo box text input.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.combo-box-input__chevron</code></TableCell>
            <TableCell>
              The button used to show or hide the list of options.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.combo-box-input__inner-wrapper</code></TableCell>
            <TableCell>
              A wrapper class to target other elements of the combo box.
              For example: the clear button, nested input wrappers, tooltip. etc.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.combo-box-input__list-box</code></TableCell>
            <TableCell>
              The list of options.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.combo-box-input__option</code></TableCell>
            <TableCell>
              An individual option.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.combo-box-input__option--selected</code></TableCell>
            <TableCell>
              Styles for the selected option.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.combo-box-input__option--highlighted</code></TableCell>
            <TableCell>
              Styles for an option receiving keyboard focus.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.combo-box-input__group-wrapper</code></TableCell>
            <TableCell>
              A class to target elements within an option when it includes a list.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.combo-box-input__group-title</code></TableCell>
            <TableCell>
              Styles for the title of a group of options.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.combo-box-input__option--in-group</code></TableCell>
            <TableCell>
              Styles for an individual option within a group of options.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
