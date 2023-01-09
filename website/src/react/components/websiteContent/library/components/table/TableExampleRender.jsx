/* eslint-disable react/jsx-props-no-spreading */
import {
  RefShape,
  Table,
  TableBody,
  TableBodyData,
  TableBodyDataCellTemplate,
  TableBodyDataRowTemplate,
  TableFilters,
  TableFilterTextInput,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableWrapper,
} from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import TableExamplePropsShape from '../../../../../propTypesShapes/TableExamplePropsShape';

const propTypes = {
  state: PropTypes.shape({
    props: TableExamplePropsShape.isRequired,
  }).isRequired,
  innerRef: RefShape,
};
const defaultProps = {
  innerRef: null,
};

// data from:
// * https://www.utah.gov/about/state-symbols.html
// * https://www.uen.org/utah_history_encyclopedia/u/UTAH_STATE_SYMBOLS.shtml#:~:text=The%20beehive%2C%20or%20skep%2C%20was,nicknamed%20the%20%22Beehive%20State.%22&text=The%20topaz%20became%20the%20official,House%20Bill%206%20into%20law.
// * https://en.wikipedia.org/wiki/List_of_Utah_state_symbols
const stateSymbols = [
  { category: 'Bird', value: 'California Seagull', year: 1955 },
  { category: 'Emblem', value: 'Beehive', year: 1959 },
  { category: 'Folk Dance', value: 'Square Dance', year: 1994 },
  { category: 'Fruit', value: 'Cherry', year: 1997 },
  { category: 'Grass', value: 'Indian Rice Grass', year: 1990 },
  { category: 'Mineral', value: 'Copper', year: 1994 },
  { category: 'Rock', value: 'Coal', year: 1991 },
  { category: 'Hymn', value: 'Utah We Love Thee', year: 2003 },
  { category: 'Tartan', value: 'Utah State Tartan', year: 1996 },
  { category: 'Vegetable', value: 'Spanish Sweet Onion', year: 2002 },
  { category: 'Firearm', value: 'Browning M1911', year: 2011 },
  { category: 'Cooking Pot', value: 'Dutch Oven', year: 1997 },
  { category: 'Fish', value: 'Bonneville Cutthroat Trout', year: 1997 },
  { category: 'Flower', value: 'Sego Lilly', year: 1911 },
  { category: 'Fossil', value: 'Allosaurus', year: 1988 },
  { category: 'Gem', value: 'Topaz', year: 1969 },
  { category: 'Insect', value: 'Honey Bee', year: 1983 },
  { category: 'Motto', value: 'Industry', year: 1959 },
  { category: 'Song', value: 'Utah, This Is The Place', year: 2003 },
  { category: 'Star', value: 'Dubhe', year: 1996 },
  { category: 'Tree', value: 'Quaking Aspen', year: 2014 },
  { category: 'Historic Vegetable', value: 'Sugar Beet', year: 2002 },
  { category: 'Astronomical Symbol', value: 'Beehive Cluster', year: 1996 },
  { category: 'Animal', value: 'Elk', year: 1971 },
  { category: 'Reptile', value: 'Gila Monster', year: 2019 },
  { category: 'Stone', value: 'Honeycomb Calcite', year: 2021 },
  { category: 'Snack', value: 'Jell-O', year: 2001 },
  { category: 'Predatory Bird', value: 'Golden Eagle', year: 2022 },
];

function TableExampleRender({
  state: {
    props: {
      className,
      id,
      isFiltering,
      // isPaginating,
      // isSorting,
    },
  },
  innerRef,
}) {
  return (
    <TableWrapper
      className={className}
      id={id}
      innerRef={innerRef}
    >
      <Table id="example-interactive-table" className="table table--lines-x table--v-align-center">
        <TableHead>
          {
            isFiltering
              ? (
                <TableFilters>
                  <TableFilterTextInput recordFieldPath="category" />
                  <TableFilterTextInput recordFieldPath="symbol" />
                  <TableFilterTextInput recordFieldPath="year" />
                </TableFilters>
              )
              : null
          }
          <TableHeadRow>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Symbol</TableHeadCell>
            <TableHeadCell>As Of Year</TableHeadCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          <TableBodyData records={stateSymbols} recordIdField="category">
            <TableBodyDataRowTemplate>
              <TableBodyDataCellTemplate recordFieldPath="category" />
              <TableBodyDataCellTemplate recordFieldPath="symbol" />
              <TableBodyDataCellTemplate recordFieldPath="year" />
            </TableBodyDataRowTemplate>
          </TableBodyData>
        </TableBody>
      </Table>
    </TableWrapper>
  );
}

TableExampleRender.propTypes = propTypes;
TableExampleRender.defaultProps = defaultProps;

export default TableExampleRender;
