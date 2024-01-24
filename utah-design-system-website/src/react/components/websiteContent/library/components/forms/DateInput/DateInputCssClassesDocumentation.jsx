import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper
} from '@utahdts/utah-design-system';

export function DateInputCssClassesDocumentation() {
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
            <TableCell><code>.date-input[type=text]</code></TableCell>
            <TableCell>
              This helps style the date input text input.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.date-input__calendar-icon</code></TableCell>
            <TableCell>
              Applies styles to the date input icon. (When it is an icon button it inherits from that.)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.date-input__calendar-icon--is-disabled</code></TableCell>
            <TableCell>
              Modifier class to apply a disabled look to the calendar icon.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.date-input__icon-static</code></TableCell>
            <TableCell>
              Styles for the static (non-button) calendar icon.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.date-input__inner-wrapper</code></TableCell>
            <TableCell>
              A wrapper class to target other elements of the date input. For example: the clear button, nested input wrappers, tooltip. etc.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.date-input__popup</code></TableCell>
            <TableCell>
              Styles for the calendar popup&apos;s outer box.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.calendar-input__grid</code></TableCell>
            <TableCell>
              Styles for the calendar input grid.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.calendar-input__row</code></TableCell>
            <TableCell>
              Styles for the calendar input grid row.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.calendar-input__cell-header</code></TableCell>
            <TableCell>
              Styles for the calendar input grid header (days of the week).
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.calendar-input__cell</code></TableCell>
            <TableCell>
              Controls the appearance of the grid cells for each day on the calendar.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.calendar-input__cell--focused</code></TableCell>
            <TableCell>
              The grid cell (day) has focus. The user can press enter to select the day.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.calendar-input__cell--select</code></TableCell>
            <TableCell>
              The grid cell (day) is selected. This is the currently selected date.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.calendar-input__cell--today</code></TableCell>
            <TableCell>
              If the the grid cell represents today&apos;s date, it will be styled accordingly.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.calendar-input__cell--next-month</code>, <code>.calendar-input__cell--previous-month</code></TableCell>
            <TableCell>
              Grid cells that represent days outside the current month.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.calendar-input__controls</code></TableCell>
            <TableCell>
              The area that wraps the calendar controls.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.calendar-input__month</code></TableCell>
            <TableCell>
              The container for the month name.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.calendar-input__year</code></TableCell>
            <TableCell>
              The container for the year.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>.calendar-input__today</code></TableCell>
            <TableCell>
              The container for the today button.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
