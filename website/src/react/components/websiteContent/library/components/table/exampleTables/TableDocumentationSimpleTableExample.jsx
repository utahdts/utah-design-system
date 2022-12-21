import {
  Table,
  TableBody, TableCell, TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper,
} from '@utahdts/utah-design-system';

const propTypes = {};
const defaultProps = {};

function TableDocumentationSimpleTableExample() {
  return (
    <div className="static-example">
      <h3 id="table__simple-table-example" className="static-example__title">Table Example: Simple Static Data</h3>
      <p>
        This table is static data using Design System components in a manual layout.
        This is the simplest as it does not have dynamic data, filtering, sorting, nor any other features.
      </p>
      <TableWrapper>
        <Table id="simple-table" className="table table--lines-x table--v-align-center">
          <TableHead>
            <TableHeadRow>
              <TableHeadCell>TSP</TableHeadCell>
              <TableHeadCell>TBSP</TableHeadCell>
              <TableHeadCell>FL OZ</TableHeadCell>
              <TableHeadCell>CUP</TableHeadCell>
              <TableHeadCell>PINT</TableHeadCell>
              <TableHeadCell>QUART</TableHeadCell>
              <TableHeadCell>GALLON</TableHeadCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1/2</TableCell>
              <TableCell>1/16</TableCell>
              <TableCell>1/32</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>2</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1/8</TableCell>
              <TableCell>1/16</TableCell>
              <TableCell>1/32</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12</TableCell>
              <TableCell>4</TableCell>
              <TableCell>2</TableCell>
              <TableCell>1/4</TableCell>
              <TableCell>1/8</TableCell>
              <TableCell>1/16</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>18</TableCell>
              <TableCell>6</TableCell>
              <TableCell>3</TableCell>
              <TableCell>3/8</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>24</TableCell>
              <TableCell>8</TableCell>
              <TableCell>4</TableCell>
              <TableCell>1/2</TableCell>
              <TableCell>1/4</TableCell>
              <TableCell>1/8</TableCell>
              <TableCell>1/32</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>36</TableCell>
              <TableCell>12</TableCell>
              <TableCell>6</TableCell>
              <TableCell>3/4</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>48</TableCell>
              <TableCell>16</TableCell>
              <TableCell>8</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1/2</TableCell>
              <TableCell>1/4</TableCell>
              <TableCell>1/16</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>96</TableCell>
              <TableCell>32</TableCell>
              <TableCell>16</TableCell>
              <TableCell>2</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1/2</TableCell>
              <TableCell>1/8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>-</TableCell>
              <TableCell>64</TableCell>
              <TableCell>32</TableCell>
              <TableCell>4</TableCell>
              <TableCell>2</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1/4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>-</TableCell>
              <TableCell>256</TableCell>
              <TableCell>128</TableCell>
              <TableCell>16</TableCell>
              <TableCell>8</TableCell>
              <TableCell>4</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}

TableDocumentationSimpleTableExample.propTypes = propTypes;
TableDocumentationSimpleTableExample.defaultProps = defaultProps;

export default TableDocumentationSimpleTableExample;
