import { useImmer } from 'use-immer';
import {
  Button,
  handleEvent, Switch,
  Table,
  TableBody,
  TableBodyData,
  TableBodyDataCellTemplate,
  TableBodyDataRowTemplate,
  TableCell, TableFilters, TableFilterTextInput,
  TableFoot,
  TableFootCell,
  TableFootRow,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper,
  TextInput,
} from 'utah-design-system-react-library';
import TableSortingRule from 'utah-design-system-react-library/react/components/table/TableSortingRule';
import TableSortingRules from 'utah-design-system-react-library/react/components/table/TableSortingRules';
import tableSortingRuleFieldType from 'utah-design-system-react-library/react/enums/tableSortingRuleFieldType';
import TableDocumentationFilteringTableExample from './exampleTables/TableDocumentationFilteringTableExample';
import TableDocumentationSimpleTableExample from './exampleTables/TableDocumentationSimpleTableExample';
import TableDocumentationSortingTableExample from './exampleTables/TableDocumentationSortingTableExample';

const propTypes = {};
const defaultProps = {};

function TableDocumentation() {
  const [tableData, setTableData] = useImmer([
    {
      name: 'Joseph Sharp',
      potency: 3.25,
      role: 'Master of All Things',
      uppityDate: '2022-10-05',
      uppityDateDate: new Date('2022-10-05'),
      address: { street: 'Pummel Dr' },
    },
    {
      name: 'Casey Wardle',
      potency: 100.25,
      role: 'Nothing is impossible',
      uppityDate: '2010-08-04',
      uppityDateDate: new Date('2010-08-04'),
      address: { street: 'Easy Street' },
    },
    {
      name: 'Sarah Farnsworth',
      potency: 55.24,
      role: 'Intelligence Incarnate',
      uppityDate: '2012-02-23',
      uppityDateDate: new Date('2012-02-23'),
      address: { street: 'Panda Express' },
    },
    {
      name: 'Gaëtan Grimaud',
      potency: 31.19,
      role: 'Oh, I already got that done',
      uppityDate: '2013-01-11',
      uppityDateDate: new Date('2013-01-11'),
      address: { street: 'The Gathering' },
    },
    {
      name: 'Brittany Hancock',
      potency: 92.12,
      role: 'Service Now be Dammed',
      uppityDate: '2015-04-28',
      uppityDateDate: new Date('2015-04-28'),
      address: { street: 'Princesses Dr' },
    },
    {
      name: 'Robert Wallis',
      potency: 42,
      role: 'My Staff Infection',
      uppityDate: '2008-12-29',
      uppityDateDate: new Date('2008-12-29'),
      address: { street: 'Rock & Roll' },
    },
    {
      name: 'Samir Mulahalilovic',
      potency: 10.12,
      role: 'Gimme Java or give me... React...',
      uppityDate: '1995-07-25',
      uppityDateDate: new Date('1995-07-25'),
      address: { street: 'Greatness begins here' },
    },
    {
      name: 'Veronica Miluk',
      potency: 72.27,
      role: 'Let\'s get this straight',
      uppityDate: '2025-10-11',
      uppityDateDate: new Date('2025-10-11'),
      address: { street: 'Gallop & Trot' },
    },
    {
      name: 'Austin Haws',
      potency: -13.666,
      role: 'Firing squad',
      uppityDate: null,
      uppityDateDate: null,
      address: { street: 'Greasewood Dr' },
    },
  ]);

  return (
    <div className="documentation-content">

      <TableDocumentationSimpleTableExample />
      <TableDocumentationSortingTableExample />
      <TableDocumentationFilteringTableExample />
      {/* filtering */}
      {/* totals */}
      {/* pagination */}
      {/* dynamic content */}
      {/* dynamic table w/ static content hybrid */}
      {/* footer */}
      {/* table sorting remembering previous search in localstorage */}
      {/* table filters: filter context, controlled, uncontrolled, uncontrolled with default value */}

      <h3 id="table__dynamic-table-example">Dynamic Data Table Example</h3>
      <TableWrapper>
        <Table className="my-uber-special-snowflake-table">
          {/* <TableSortingRules
          defaultValue="description" onChange={({ value }) => console.log('TableSortingRules.onChange', value)} value={null}> */}
          <TableSortingRules defaultValue="name">
            {/* Order here determines which rules to apply first, though the current th's "field" is pushed to the top of the sort list */}
            <TableSortingRule
              recordFieldPath="name"
              defaultIsAscending={false}
              // sort by lastName
              customSort={({ fieldValueA, fieldValueB }) => (fieldValueA || '').split(' ').pop().localeCompare((fieldValueB || '').split(' ').pop())}
            />
            <TableSortingRule recordFieldPath="potency" fieldType={tableSortingRuleFieldType.NUMBER} />
            <TableSortingRule recordFieldPath="role" />
            <TableSortingRule recordFieldPath="uppityDate" fieldType={tableSortingRuleFieldType.STRING} />
            <TableSortingRule recordFieldPath="uppityDateDate" fieldType={tableSortingRuleFieldType.DATE} />
            {/* lastName field does not exist... */}
            <TableSortingRule recordFieldPath="lastName" />
          </TableSortingRules>

          <TableHead>
            <TableHeadRow>
              <TableHeadCell recordFieldPath="name">Name</TableHeadCell>

              {/* field does not have matching sorter so does not sort */}
              <TableHeadCell recordFieldPath="potency">Potency</TableHeadCell>

              <TableHeadCell recordFieldPath="potency-no-sort">Potency (no sort)</TableHeadCell>

              <TableHeadCell recordFieldPath="role">Role</TableHeadCell>

              <TableHeadCell recordFieldPath="uppityDate" tableSortingFieldPaths={['uppityDateDate']}>Uppity Date</TableHeadCell>

              <TableHeadCell recordFieldPath="uppityDateByName" tableSortingFieldPaths={['lastName', 'name']}>
                Uppity Date (sort by custom name)
              </TableHeadCell>

              <TableHeadCell recordFieldPath="address.street" tableSortingFieldPaths={['uppityDateDate']}>Uppity Date</TableHeadCell>

              {/* with no field, this header does not filter nor sort, and putting a ThFilter inside of it should probably show a warning */}
              {/* useful for action columns */}
              <TableHeadCell />
            </TableHeadRow>

            {/* three ways to interact with filters: controlled, uncontrolled, uncontrolled with default value */}
            {/* <TableFilters value={ } onChange={ }> */}
            {/* <TableFilters defaultValue={ }> */}
            <TableFilters>
              <TableFilterTextInput recordFieldPath="name" defaultValue="ase ardl" />

              {
                //  four ways to interact with filters:
                //   [√] filter context,
                //   [√] controlled,
                //   [√] uncontrolled,
                //   [ ] uncontrolled with default value
                // <TableFilterSelect
                //   isMultiSelect
                //   recordFieldPath="flavor"
                // >
                //   <TableFilterSelectOption value="pistachio">Pistachio</TableFilterSelectOption>
                //   <TableFilterSelectOption value="&">M&amp;M</TableFilterSelectOption>
                // </TableFilterSelect>

                // {/* Place holder to create a <th> but not do filtering */}
                // <TableFilterNone />

                // <TableFilterCustom>
                //   {({ filterValues, setFilterValues }) => (
                //     <Button
                //       onClick={(e) => {
                //         e.stopPropagation();
                //         setFilterValues((draftState) => { draftState.selected = !draftState.selected; });
                //       }}
                //     >
                //       Selected (
                //       {filterValues.selected ? 'Y' : 'N'}
                //       )
                //     </Button>
                //   )}
                // </TableFilterCustom>
              }
            </TableFilters>
          </TableHead>

          <TableBody>
            <TableBodyData records={tableData} recordIdField="name">
              <TableBodyDataRowTemplate
                onClick={
                  ({
                    e,
                    record,
                    recordIndex,
                    records,
                  }) => {
                    // eslint-disable-next-line no-console
                    console.log('TableBodyDataRowTemplate.click', e, record, recordIndex, records);
                  }
                }
                onDoubleClick={
                  ({
                    e,
                    record,
                    recordIndex,
                    records,
                  }) => {
                    // eslint-disable-next-line no-console
                    console.log('TableBodyDataRowTemplate.doubleClick', e, record, recordIndex, records);
                  }
                }
                className={({ record, records }) => (records.length && record.isSelected ? 'selected' : null)}
              >
                <TableBodyDataCellTemplate recordFieldPath="name" />

                <TableBodyDataCellTemplate recordFieldPath="potency" />

                <TableBodyDataCellTemplate recordFieldPath="potency" />

                <TableBodyDataCellTemplate
                  onClick={
                    ({ record, field }) => {
                      // eslint-disable-next-line no-console
                      console.log('TableBodyDataCellTemplate.click:', record, field);
                    }
                  }
                >
                  {({ record }) => record.role}
                </TableBodyDataCellTemplate>

                <TableBodyDataCellTemplate>
                  {({ record, recordIndex }) => (
                    <>
                      <TextInput
                        id={`uppityDate-${tableData[recordIndex].name}`}
                        key={`record-uppity-date-input-${tableData[recordIndex]}`}
                        label="Uppity Date"
                        onChange={(e) => setTableData((draftRecords) => { draftRecords[recordIndex].uppityDate = e.target.value; })}
                        value={record.uppityDate || ''}
                      />
                      <input
                        onChange={(e) => setTableData((draftRecords) => { draftRecords[recordIndex].uppityDate = e.target.value; })}
                        type="text"
                        value={record.uppityDate || ''}
                      />
                    </>
                  )}
                </TableBodyDataCellTemplate>

                <TableBodyDataCellTemplate>
                  {({ record }) => record.uppityDate}
                </TableBodyDataCellTemplate>

                <TableBodyDataCellTemplate
                  onClick={({ record, field }) => {
                    // eslint-disable-next-line no-console
                    console.log('TableBodyDataCellTemplate.click', record, field);
                  }}
                >
                  {({ record, recordIndex }) => (
                    <>
                      <Switch
                        id={`record-selected-${record.name}`}
                        label="Selected"
                        onChange={() => setTableData((draftRecords) => { draftRecords[recordIndex].selected = !draftRecords[recordIndex].selected; })}
                        value={tableData[recordIndex].selected}
                      />
                      <Button
                        onClick={handleEvent((e) => {
                          // eslint-disable-next-line no-console
                          console.log('td button clicked', e);
                          setTableData((draftRecords) => { draftRecords[recordIndex].selected = !draftRecords[recordIndex].selected; });
                        })}
                      >
                        Toggle Selected
                      </Button>
                    </>
                  )}
                </TableBodyDataCellTemplate>
              </TableBodyDataRowTemplate>
            </TableBodyData>

            <TableRow
              onClick={() => {
                console.log('firing...');
                // eslint-disable-next-line no-alert
                alert('You have clicked on the pet name!');
              }}
            >
              <TableCell>
                <div>
                  <span>petName</span>
                  <span>should sort by this value</span>
                </div>
              </TableCell>
              <TableCell>description</TableCell>
              <TableCell>
                <Switch id="static.description" label="Description" />
                I am a description!
              </TableCell>
              <TableCell>
                Plain static td content
              </TableCell>
            </TableRow>

            <TableBodyData
              records={[
                // eslint-disable-next-line object-curly-newline
                { id: 1, color: 'black', rating: 6.025, velocity: '99mph' },
                // eslint-disable-next-line object-curly-newline
                { id: 3, color: 'blue', rating: 4.013, velocity: '12mph' },
                // eslint-disable-next-line object-curly-newline
                { id: 5, color: 'green', rating: 3.218, velocity: '38mph' },
                // eslint-disable-next-line object-curly-newline
                { id: 4, color: 'red', rating: 1.218, velocity: '124mph' },
                // eslint-disable-next-line object-curly-newline
                { id: 2, color: 'white', rating: 3.107, velocity: '32mph' },
                // eslint-disable-next-line object-curly-newline
                { id: -2, color: 'yellow', rating: 3.978, velocity: '80mph' },
              ]}
              recordIdField="id"
            >
              <TableBodyDataRowTemplate>
                <TableBodyDataCellTemplate recordFieldPath="color" />
                <TableBodyDataCellTemplate recordFieldPath="rating" />
                <TableBodyDataCellTemplate recordFieldPath="velocity" />
              </TableBodyDataRowTemplate>
            </TableBodyData>

            <tr><td>doing something supitd</td></tr>
          </TableBody>

          <TableFoot>
            <TableFootRow>
              <TableFootCell>Totals:</TableFootCell>
              <TableFootCell>3,302</TableFootCell>
              <TableFootCell>42.05%</TableFootCell>
              <TableFootCell>N/A</TableFootCell>
            </TableFootRow>
          </TableFoot>

        </Table>
        {/* <TablePagination recordsPerPage={25} /> */}
        {/* Should pagination be in a tfoot? no. it is outside of groupings and outside of the table! */}
      </TableWrapper>

      <h3 id="table__static-table-exampl1">Table Example: Sorting</h3>
      <h3 id="table__static-table-example2">Table Example: Filtering</h3>
      <h3 id="table__static-table-example3">Table Example: Dynamic Data</h3>
    </div>
  );
}

TableDocumentation.propTypes = propTypes;
TableDocumentation.defaultProps = defaultProps;

export default TableDocumentation;
