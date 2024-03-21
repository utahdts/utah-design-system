import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper
} from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import { pageUrls } from '../../../../../routing/pageUrls';

export function TimeInputCssClassesDocumentation() {
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
            <TableCell><code>combo-box-input</code></TableCell>
            <TableCell>
              This component uses the <Link to={pageUrls.comboBox}>combo box component</Link> for functionality.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>time-input__wrapper</code></TableCell>
            <TableCell>
              This is the wrapper class that surrounds a combo box input. It allows styling of different
              elements of the time input.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>time-input__clock-icon</code></TableCell>
            <TableCell>
              The clock icon.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>time-input__clock-icon--static</code></TableCell>
            <TableCell>
              The clock icon when there is no combo box popup.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>time-input__clock-icon--static</code></TableCell>
            <TableCell>
              The clock icon when the input is disabled.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
