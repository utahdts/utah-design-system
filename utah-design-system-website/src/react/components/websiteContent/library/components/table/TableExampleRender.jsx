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
  TableSortingRule,
  tableSortingRuleFieldType,
  TableSortingRules,
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
  { category: 'Bird', symbol: 'California Seagull', year: 1955 },
  { category: 'Emblem', symbol: 'Beehive', year: 1959 },
  { category: 'Folk Dance', symbol: 'Square Dance', year: 1994 },
  { category: 'Fruit', symbol: 'Cherry', year: 1997 },
  { category: 'Grass', symbol: 'Indian Rice Grass', year: 1990 },
  { category: 'Mineral', symbol: 'Copper', year: 1994 },
  { category: 'Rock', symbol: 'Coal', year: 1991 },
  { category: 'Hymn', symbol: 'Utah We Love Thee', year: 2003 },
  { category: 'Tartan', symbol: 'Utah State Tartan', year: 1996 },
  { category: 'Vegetable', symbol: 'Spanish Sweet Onion', year: 2002 },
  { category: 'Firearm', symbol: 'Browning M1911', year: 2011 },
  { category: 'Cooking Pot', symbol: 'Dutch Oven', year: 1997 },
  { category: 'Fish', symbol: 'Bonneville Cutthroat Trout', year: 1997 },
  { category: 'Flower', symbol: 'Sego Lilly', year: 1911 },
  { category: 'Fossil', symbol: 'Allosaurus', year: 1988 },
  { category: 'Gem', symbol: 'Topaz', year: 1969 },
  { category: 'Insect', symbol: 'Honey Bee', year: 1983 },
  { category: 'Motto', symbol: 'Industry', year: 1959 },
  { category: 'Song', symbol: 'Utah, This Is The Place', year: 2003 },
  { category: 'Star', symbol: 'Dubhe', year: 1996 },
  { category: 'Tree', symbol: 'Quaking Aspen', year: 2014 },
  { category: 'Historic Vegetable', symbol: 'Sugar Beet', year: 2002 },
  { category: 'Astronomical Symbol', symbol: 'Beehive Cluster', year: 1996 },
  { category: 'Animal', symbol: 'Elk', year: 1971 },
  { category: 'Reptile', symbol: 'Gila Monster', year: 2019 },
  { category: 'Stone', symbol: 'Honeycomb Calcite', year: 2021 },
  { category: 'Snack', symbol: 'Jell-O', year: 2001 },
  { category: 'Predatory Bird', symbol: 'Golden Eagle', year: 2022 },
];

function TableExampleRender({
  state: {
    props: {
      className,
      id,
      isFiltering,
      // isPaginating,
      isSorting,
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
            isSorting
              ? (
                <TableSortingRules defaultValue="category">
                  <TableSortingRule recordFieldPath="category" />
                  <TableSortingRule recordFieldPath="symbol" />
                  <TableSortingRule recordFieldPath="year" fieldType={tableSortingRuleFieldType.NUMBER} defaultIsAscending={false} />
                </TableSortingRules>
              )
              : null
          }
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
            <TableHeadCell recordFieldPath="category">Category</TableHeadCell>
            <TableHeadCell recordFieldPath="symbol">Symbol</TableHeadCell>
            <TableHeadCell recordFieldPath="year">As Of Year</TableHeadCell>
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
