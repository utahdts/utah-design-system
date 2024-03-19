import {
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow, TableWrapper
} from '@utahdts/utah-design-system';

export function CardCssClassesDocumentation() {
  return (
    <TableWrapper>
      <Table className="table--lines-x">
        <TableHead>
          <TableHeadRow>
            <TableHeadCell className="text-left css-classes">CSS Classes</TableHeadCell>
            <TableHeadCell className="text-left ">Description</TableHeadCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell><code>card</code></TableCell>
            <TableCell>This class is the overall wrapper class for a card.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>card--solid</code></TableCell>
            <TableCell>CSS class modifier for a card with a solid background.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>card--horizontal</code></TableCell>
            <TableCell>CSS class modifier for a horizontal card.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>card__title</code></TableCell>
            <TableCell>Styles for the title of a card.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>card__image</code></TableCell>
            <TableCell>Styles for the image of a card.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><code>card__icon</code></TableCell>
            <TableCell>Styles for the icon of a card.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
