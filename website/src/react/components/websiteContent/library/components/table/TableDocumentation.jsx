/* eslint-disable no-param-reassign */
import { useImmer } from 'use-immer';
import {
  Button,
  handleEvent,
  Switch,
  Table,
  TableBody,
  TableBodyData,
  TableBodyDataCellTemplate,
  TableBodyDataRowTemplate,
  TableCell,
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

const propTypes = {};
const defaultProps = {};

function TableDocumentation() {
  const [tableData, setTableData] = useImmer([
    {
      name: 'Joseph Sharp',
      role: 'Master of All Things',
      uppityDate: '2022-10-05',
    },
    {
      name: 'Casey Wardle',
      role: 'Nothing is impossible',
      uppityDate: '2010-08-04',
    },
    {
      name: 'Sarah Farnsworth',
      role: 'Intelligence Incarnate',
      uppityDate: '2012-02-23',
    },
    {
      name: 'Gaëtan Grimaud',
      role: 'Oh, I already got that done',
      uppityDate: '2013-01-11',
    },
    {
      name: 'Brittany Hancock',
      role: 'Service Now be Dammed',
      uppityDate: '2015-04-28',
    },
    {
      name: 'Robert Wallis',
      role: 'My Staff Infection',
      uppityDate: '2008-12-29',
    },
    {
      name: 'Samir Mulahalilovic',
      role: 'Gimme Java or give me... React...',
      uppityDate: '1995-07-25',
    },
    {
      name: 'Veronica Miluk',
      role: 'Let\'s get this straight',
      uppityDate: '2025-10-11',
    },
  ]);

  return (
    <div className="documentation-content">

      <h3>Dynamic Data Table Example</h3>
      <TableWrapper>
        <Table className="my-uber-special-snowflake-table">
          {
            // <TableSortingRules defaultValue="description" onChange={({ value }) => setValue(value)} value={value}>
            //   {/* Order here determines which rules to apply first, though the current th's "field" is pushed to the top of the sort list */}
            //   <TableSortingRule field="name" fieldType="string|date|number" defaultAscending={true|false}
            //     customRule={({ fieldValueA, fieldValueB, recordA, recordB, records, recordAIndex, recordBIndex }) =>
            //           { return comparison(recordA, recordB);}}/>
            //   <TableSortingRule field="flavor" fieldType="string|date|number" />
            //   <TableSortingRule field="description" fieldType="string|date|number" />
            //   <TableSortingRule field="lastName" sortBy="string|date|number" />
            // </TableSortingRules>
          }

          {
            // <TableFilters>
            //   <TableFilter field="petName" filterType="string" filterIcon={Icons.IconCheck} defaultValue={someDefaultValue}
            //         onChange={({value}) => setValue(value)} value={value}
            //   /> {/* filterType is optional defaults to string? */}
            //   <TableFilter field="flavor">
            //     <TableHeadFilterOption value="pistachio">Pistachio</TableHeadFilterOption>
            //     <TableHeadFilterOption value="&">M&amp;M</TableHeadFilterOption>
            //   </TableFilter>
            // </TableFilters>
          }

          <TableHead>
            <TableHeadRow>
              {/* sortFields allows defining custom sort ordering */}
              <TableHeadCell field="name" sortFields={['name', 'role', 'description']}>
                Name
              </TableHeadCell>

              {/* field does not have matching sorter so does not sort */}
              <TableHeadCell field="role">
                Role
              </TableHeadCell>

              <TableHeadCell field="uppityDate">
                Uppity Date
              </TableHeadCell>

              {/* with no field, this header does not filter nor sort, and putting a ThFilter inside of it should probably show a warning */}
              {/* useful for action columns */}
              <TableHeadCell />
            </TableHeadRow>
          </TableHead>

          <TableBody>
            <TableBodyData records={tableData} recordIdField="name">
              <TableBodyDataRowTemplate
                onClick={({
                  e,
                  record,
                  recordIndex,
                  records,
                }) => console.log('TableBodyDataRowTemplate.click', e, record, recordIndex, records)}
                onDoubleClick={({
                  e,
                  record,
                  recordIndex,
                  records,
                }) => console.log('TableBodyDataRowTemplate.doubleClick', e, record, recordIndex, records)}
                className={({ record, records }) => (records.length && record.isSelected ? 'selected' : null)}
              >
                <TableBodyDataCellTemplate field="name" />

                <TableBodyDataCellTemplate
                  onClick={({ record, field }) => console.log('TableBodyDataCellTemplate.click:', record, field)}
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
                        value={record.uppityDate}
                      />
                      <input
                        onChange={(e) => setTableData((draftRecords) => { draftRecords[recordIndex].uppityDate = e.target.value; })}
                        type="text"
                        value={record.uppityDate}
                      />
                    </>
                  )}
                </TableBodyDataCellTemplate>

                <TableBodyDataCellTemplate onClick={({ record, field }) => console.log('TableBodyDataCellTemplate.click', record, field)}>
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

            <TableRow onClick={() => alert('You have clicked on the pet name!')}>
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

            {
              //     <TableBodyData data={[... inspector2.inspections]}> {/* by providing the list in the tbody it is more composable and
              // the developer can see that they can provide a list or just static content */}
              //       <TableBodyDataRowTemplate onClick={({ e, isDoubleClick }) => { doSomething() }}>
              //         <TableBodyDataCell>
              //           {({ record, list, recordIndex }) => <TableCell>{record.name}</TableCell>}
              //         </TableBodyDataCell>
              //         <TableBodyDataCell>
              //           {({ record, list, recordIndex }) => <TableCell>{record.name}</TableCell>}
              //         </TableBodyDataCell>
              //         <TableBodyDataCell>
              //           example of children being jsx instead of a function
              //           {Icons.IconChevron()}
              //         </TableBodyDataCell>
              //       </TableBodyDataRowTemplate>
              //     </TableBodyData>
            }

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

      <h3>Static Table Example</h3>
      <TableWrapper className="austin-class-to-see-the-data">
        <Table>
          <TableHead>
            <TableHeadRow>
              <TableHeadCell>Property</TableHeadCell>
              <TableHeadCell>Type</TableHeadCell>
              <TableHeadCell>Default</TableHeadCell>
              <TableHeadCell>Description</TableHeadCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>appearance</TableCell>
              <TableCell>&apos;solid&apos;|&apos;outlined&apos;</TableCell>
              <TableCell>&apos;outlined&apos;</TableCell>
              <TableCell>
                Determines how the button will be formatted. Solid buttons have a solid fill color and denote emphasis
                to the user. Outlined buttons have an outline but no fill causing them to be less emphasized.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>children</TableCell>
              <TableCell>node</TableCell>
              <TableCell>(required)</TableCell>
              <TableCell>
                Most often, children is the title of button. But, you can have it be any element to be rendered inside the button.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>className</TableCell>
              <TableCell>string</TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This css class will be added to the button.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>color</TableCell>
              <TableCell>&apos;primary&apos;|&apos;secondary&apos;|&apos;accent&apos;|&apos;none&apos;</TableCell>
              <TableCell>&apos;none&apos;</TableCell>
              <TableCell>
                Determines the color from the theme that will be used while rendering the button. Depending on the
                &apos;appearance&apos; of the button, this can effect the border and/or fill color of the button.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>innerRef</TableCell>
              <TableCell>MutableRefObject</TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                This ref will be attached to the rendered &lt;button&gt; element allowing the parent component to interact
                directly with the actual `button` DOM element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>iconLeft</TableCell>
              <TableCell>node</TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Intended to be an &lt;svg&gt; image to be placed to the left of the button title, but any `node` is allowed.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>iconRight</TableCell>
              <TableCell>node</TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                Intended to be an &lt;svg&gt; image to be placed to the right of the button title, but any `node` is allowed.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>string|number</TableCell>
              <TableCell>null</TableCell>
              <TableCell>
                An id to put on the &lt;button&gt; element.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>isBusy</TableCell>
              <TableCell>true|false</TableCell>
              <TableCell>false</TableCell>
              <TableCell>
                When `isBusy`` is true, a spinner will be shown in the button. This is useful for showing the user that an action
                that triggered when the button was pressed is still running.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>isDisabled</TableCell>
              <TableCell>true|false</TableCell>
              <TableCell>false</TableCell>
              <TableCell>
                When `isDisabled`` is true, the button will become unclickable and its appearance will change to be more subdued
                so that the user can tell the button is unusable.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>onClick</TableCell>
              <TableCell>function</TableCell>
              <TableCell>required</TableCell>
              <TableCell>
                The function to call when the button is pressed.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>size</TableCell>
              <TableCell>
                formElementSizesEnum.SMALL|formElementSizesEnum.MEDIUM|formElementSizesEnum.LARGE|formElementSizesEnum.LARGE1X
              </TableCell>
              <TableCell>formElementSizesEnum.MEDIUM</TableCell>
              <TableCell>
                Determines how much space the button will consume on the page.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>type</TableCell>
              <TableCell>&apos;button&apos;|&apos;reset&apos;|&apos;submit&apos;</TableCell>
              <TableCell>&apos;button&apos;</TableCell>
              <TableCell>
                The HTML `type` attribute value to put on the &lt;button&gt; element.
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}

TableDocumentation.propTypes = propTypes;
TableDocumentation.defaultProps = defaultProps;

export default TableDocumentation;
