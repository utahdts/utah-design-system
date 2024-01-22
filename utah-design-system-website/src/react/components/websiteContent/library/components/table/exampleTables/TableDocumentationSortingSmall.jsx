import {
  joinClassNames,
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
  TableWrapper
} from '@utahdts/utah-design-system';

/**
 *
 * @param {object} object
 * @param {string} [object.className]
 * @param {boolean} [object.isFiltersShown]
 * @returns
 */

export function TableDocumentationSortingSmall({ className, isFiltersShown }) {
  const tableData = [
    {
      np: 'Zion National Park',
      year: '1919',
      city: 'Hurricane, St. George',
      size: 232,
    },
    {
      np: 'Capitol Reef National Park',
      year: '1971',
      city: 'Loa, Torrey',
      size: 377,
    },
    {
      np: 'Bryce Canyon National Park',
      year: '1928',
      city: 'Tropic, Cedar City',
      size: 56,
    },
    {
      np: 'Arches National Park',
      year: '1971',
      city: 'Moab, Green River',
      size: 119,
    },
    {
      np: 'Canyonlands National Park',
      year: '1964',
      city: 'Monticello, Moab',
      size: 527,
    },
  ];
  return (
    <TableWrapper className="table__wrapper--full-width">
      <Table className={joinClassNames('table table--lines-x table--v-align-center table--full-width', className)}>
        <TableHead>
          {
            isFiltersShown
              ? (
                <TableFilters>
                  <TableFilterTextInput
                    recordFieldPath="np"
                    // @ts-ignore
                    label="Filter National Park"
                  />
                  <TableFilterTextInput label="Year" recordFieldPath="year" />
                  <TableFilterTextInput label="City" recordFieldPath="city" />
                  <TableFilterTextInput label="Size" recordFieldPath="size" />
                </TableFilters>
              )
              : null
          }

          <TableSortingRules defaultValue="np">
            <TableSortingRule a11yLabel="National Park" recordFieldPath="np" />
            <TableSortingRule a11yLabel="Year Created" recordFieldPath="year" fieldType={tableSortingRuleFieldType.NUMBER} />
            <TableSortingRule a11yLabel="Nearest Cities" recordFieldPath="city" />
            <TableSortingRule a11yLabel="Size" recordFieldPath="size" fieldType={tableSortingRuleFieldType.NUMBER} />
          </TableSortingRules>

          <TableHeadRow>
            {/* @ts-ignore */}
            <TableHeadCell recordFieldPath="np" style={{ width: '34%' }}>National Park</TableHeadCell>
            <TableHeadCell recordFieldPath="year">Year Created</TableHeadCell>
            <TableHeadCell recordFieldPath="city">Nearest Cities</TableHeadCell>
            <TableHeadCell recordFieldPath="size">Size</TableHeadCell>
          </TableHeadRow>
        </TableHead>

        <TableBody>
          <TableBodyData records={tableData} recordIdField="np">
            <TableBodyDataRowTemplate>
              <TableBodyDataCellTemplate recordFieldPath="np" />
              <TableBodyDataCellTemplate recordFieldPath="year" />
              <TableBodyDataCellTemplate recordFieldPath="city" />
              <TableBodyDataCellTemplate recordFieldPath="size">
                {({ record }) => <>{record.size} square miles</>}
              </TableBodyDataCellTemplate>
            </TableBodyDataRowTemplate>
          </TableBodyData>
        </TableBody>

      </Table>
    </TableWrapper>
  );
}
