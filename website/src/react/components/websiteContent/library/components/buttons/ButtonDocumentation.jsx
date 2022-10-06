import {
  Button,
  formElementSizesEnum,
  useBanner,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from 'utah-design-system-react-library';
import SandboxExample from '../../../../sandbox/SandboxExample';
import ButtonExampleCodeReact from './ButtonExampleCodeReact';
import ButtonExampleRender from './ButtonExampleRender';
import ButtonExampleProps from './ButtonExampleProps';
import StaticExample from '../../../../staticExamples/StaticExample';
import Icons from '../../../../icons/Icons';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function ButtonDocumentation() {
  const showBanner = useBanner();
  return (
    <div className="documentation-content">
      <h1>Button</h1>
      <p className="lead-in">A <code>&lt;button&gt;</code> element is a clickable component that triggers an action.</p>
      <hr />
      <h2>Example</h2>
      <SandboxExample
        CODE_EXAMPLE={ButtonExampleCodeReact}
        PROPS_EXAMPLE={ButtonExampleProps}
        RENDER_EXAMPLE={ButtonExampleRender}
      />
      <StaticExample
        title="Emphasized Button"
        quickTips={(
          <ul>
            <li>Comes before unemphasized buttons in the tab order.</li>
            <li>Solid color.</li>
            <li>Reversed fill color on solid background.</li>
          </ul>
        )}
        renderedExample={(
          <>
            <Button
              appearance="solid"
              color="primary"
              onClick={() => showBanner({ message: 'primary emphasized button clicked' })}
            >
              Primary Color
            </Button>
            <Button
              appearance="solid"
              color="secondary"
              onClick={() => showBanner({ message: 'secondary emphasized button clicked' })}
            >
              Secondary Color
            </Button>
            <Button
              appearance="solid"
              color="accent"
              onClick={() => showBanner({ message: 'accent emphasized button clicked' })}
            >
              Accent Color
            </Button>
            <Button
              appearance="solid"
              onClick={() => showBanner({ message: 'default emphasized button clicked' })}
            >
              No Color
            </Button>
          </>
        )}
      />

      <StaticExample
        title="Unemphasized Button"
        quickTips={(
          <ul>
            <li>Should be less emphasized than emphasized buttons.</li>
            <li>Options:
              <ul>
                <li>Preferred: no fill color, has border.</li>
                <li>Optional: neutral fill color.</li>
              </ul>
            </li>
            <li>Reversed color on solid background, but still no fill color.</li>
          </ul>
        )}
        renderedExample={(
          <>
            <Button
              appearance="outlined"
              color="primary"
              onClick={() => showBanner({ message: 'primary unemphasized  button clicked' })}
            >
              Primary Color
            </Button>
            <Button
              appearance="outlined"
              color="secondary"
              onClick={() => showBanner({ message: 'secondary unemphasized  button clicked' })}
            >
              Secondary Color
            </Button>
            <Button
              appearance="outlined"
              color="accent"
              onClick={() => showBanner({ message: 'accent unemphasized  button clicked' })}
            >
              Accent Color
            </Button>
            <Button
              appearance="outlined"
              onClick={() => showBanner({ message: 'unemphasized button clicked' })}
            >
              No Color
            </Button>
          </>
        )}
      />

      <StaticExample
        title="Button Emphasis"
        renderedExample={(
          <>
            <Button
              appearance="outlined"
              color="primary"
              onClick={() => showBanner({ message: 'cancel button clicked' })}
            >
              Cancel
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={() => showBanner({ message: 'ok button clicked' })}
            >
              Okay
            </Button>
          </>
        )}
      />
      <StaticExample
        title="With Icon"
        renderedExample={(
          <>
            <Button
              appearance="solid"
              color="primary"
              iconLeft={Icons.IconCheck()}
              onClick={() => showBanner({ message: '`left icon` button clicked' })}
            >
              Button
            </Button>
            <Button
              appearance="outlined"
              color="primary"
              iconRight={Icons.IconArrowRight()}
              onClick={() => showBanner({ message: '`see more` button clicked' })}
            >
              See More
            </Button>
          </>
        )}
      />
      <StaticExample
        title="Sizes"
        renderedExample={(
          <>
            <Button
              appearance="solid"
              color="primary"
              onClick={() => showBanner({ message: 'small button clicked' })}
              size={formElementSizesEnum.SMALL}
            >
              Small
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={() => showBanner({ message: 'medium button clicked' })}
              size={formElementSizesEnum.MEDIUM}
            >
              Medium
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={() => showBanner({ message: 'large button clicked' })}
              size={formElementSizesEnum.LARGE}
            >
              Large
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={() => showBanner({ message: 'large1x button clicked' })}
              size={formElementSizesEnum.LARGE1X}
            >
              Large 1X
            </Button>
          </>
        )}
      />

      <h2>Settings and Props</h2>
      <TabGroup defaultValue="button-props-css">
        <TabList>
          <Tab id="button-props-css">CSS</Tab>
          <Tab id="button-props-react">React</Tab>
        </TabList>
        <TabPanels>
          <TabPanel tabId="button-props-css">

            <div style={{ lineHeight: '1.75rem' }}>
              <code>.button</code> The base css class for a button<br />
              <code>.button--small</code> CSS class modifier for a small button<br />
              <code>.button--large</code> CSS class modifier for a large button<br />
              <code>.button--large1x</code> CSS class modifier for a extra large button<br />
              <code>.button--primary-color</code> CSS class modifier for a button in the primary color<br />
              <code>.button--secondary-color</code> CSS class modifier for a button in the secondary color<br />
              <code>.button--accent-color</code> CSS class modifier for a button in the accent color<br />
              <code>.button--solid</code> CSS class modifier for a button that has a solid color (instead of being outlined)<br />
              <code>.button.contrast-border-light</code> CSS class modifier to provide a light border around a dark button
              (used to help the button meet 3:1 contrast ratio on a dark background)<br />
              <code>.button.contrast-border-dark</code> CSS class modifier to provide a dark border around a light button
              (used to help the button meet 3:1 contrast ratio on a light background)<br />
            </div>
            {/*
              Concepts:
                * composeability - make it like writing semantic html
                * all components can be controlled or uncontrolled
                * all components can have a defaultValue if uncontrolled
                * all components can have an innerRef to point to the html element to which they are rendering (if they render something)

              // === old props that won't be used anymore... ===
              // ajaxspinner: for loading? <--- no, caller can put a spinner below their ta
              ble while loading if htey want it, but having table and page and other spinners leads to
                spinner overload, so let developer figure this out for their app
              // list: providing top level list is not composable? put data in composed components
              // noRecordsFound: let the developer figure out how they want to show "no records" similar to the spinner
              // onRowUpdate: with tr content being composeable this is not a need anymore?
              // showLimit: how does this behave with pagination? in fact, don't need this since we now
              have pagination, so don't include it in new table
              // totals: instead, just compose tds in the tfoot
              // trClassName: just put the className on the actual tr

              // === future features ===
              // drag and drop: cool, definitely needed wanted, but not MVP at this time (and how would static content drag/drop?)
              // columnReordering: ability to drag and drop columns... would require all tds to have a "field"
                value so they can tie to their th; static (non-TBodyData) content would bust
              // rememberSetup: uses indexdb to recall sort order, filters, page, column order
              // hide/show columns: ability to turn off displaying a column or maybe collapse to shrink it so it's not taking up space

              // === props to put on the new Table component ===
              // √ className="some-class-name" <-- every component has this
              // √ defaultFilters={{field: Value, field, value}} <-- move to ThFilter and become defaultFilter
              // √ defaultSort={{field: "description", direction: tableSortDirectionEnum.ASCENDING}} <-- move to TableSorting
              // √ onFilterChange <--- move to actual ThFilter
              // √ onTrClick={({record})} <--- move to actual Tr
              // √ onTrDoubleClick={({record})} <--- move to actual Tr (want to keep this? what's different with TrClick?
              Could be combined? maybe onTrClick sends as a parameter if its a double click or not?)
              // √ onSortChange <--- move to TableSorting
              // √ pagination={true|false} <--- toggled by presence or lack of TablePagination
              // √ paginationRecordsPerPage={default: 25} <-- move to TablePagination
              // √ selectedList={} <--- move to be a prop of Tr or maybe classname of tr so "selected" is no longer part of the Table
            */}
            {
            // <TableWrapper>
            //   <Table className="my-uber-special-snowflake-table">
            //     <TableSortingRules defaultValue="description" onChange={({ value }) => setValue(value)} value={value}>
            //       {/* Order here determines which rules to apply first, though the current th's "field" is pushed to the top of the sort list */}
            //       <TableSortingRule field="name" fieldType="string|date|number" defaultAscending={true|false}
            //         customRule={({ fieldValueA, fieldValueB, recordA, recordB, records, recordAIndex, recordBIndex }) =>
            //              { return comparison(recordA, recordB);}}/>
            //       <TableSortingRule field="flavor" fieldType="string|date|number" />
            //       <TableSortingRule field="description" fieldType="string|date|number" />
            //       <TableSortingRule field="lastName" sortBy="string|date|number" />
            //     </TableSortingRules>

            //     <TableFilters>
            //       <TableFilter field="petName" filterType="string" filterIcon={Icons.IconCheck} defaultValue={someDefaultValue}
            //             onChange={({value}) => setValue(value)} value={value}
            //       /> {/* filterType is optional defaults to string? */}
            //       <TableFilter field="flavor">
            //         <TableHeadFilterOption value="pistachio">Pistachio</TableHeadFilterOption>
            //         <TableHeadFilterOption value="&">M&amp;M</TableHeadFilterOption>
            //       </TableFilter>
            //     </TableFilters>

            //     <TableHead>
            //       <TableHeadRow className={({ record, data }) => record.isSelected ? 'selected' : null}>
            //         {/* sortfields allows defining custom sort ordering */}
            //         <TableHeadCell field="petName" sortFields={['name', 'lastName', 'description']}>
            //           Pet Animal
            //         </TableHeadCell>
            //         <TableHeadCell field="flavor"> {/* field does not have matching sorter so does not sort */}
            //           Flavor
            //         </TableHeadCell>
            //         <TableHeadCell>description</TableHeadCell> {/* with no field, this header does not filter nor sort, and
            //           putting a ThFilter inside of it should probably show a warning */}
            //       </TableHeadRow>
            //     </TableHead>

            //     <TableBody>
            //       {/* This is a template... maybe its called template */}
            //       {/* Only the dataList is affected by sort/filter (not static content) */}
            //       <TableBodyData records={[... inspector1.inspections]}> {/* by providing the list in the tbody it is more composable and
            //         the developer can see that they can provide a list or just static content */}
            //         <TableBodyDataRowTemplate onClick={({ e, isDoubleClick }) => { doSomething() }}>
            //           <TableBodyDataCellTemplate field="petName" /> {/* auto does <TableCell>{record.name}</TableCell> */}
            //           <TableBodyDataCellTemplate onClick={({ e, record, field }) => { e.preventDefault(); }}>
            //             {({ record, records, recordIndex }) => <TableCell>{record.name}</TableCell>}
            //           </TableBodyDataCellTemplate>
            //           <TableBodyDataCellTemplate>
            //             {({ record, records, recordIndex }) => (
            //               <TableCell>
            //                 <TextInput value={record.address}
            //                   onChange={(value) => setRecords(draftRecords => draftRecords[recordIndex].address = value)}/>
            //                 <input type="text" value={record.address}
            //                   onChange={(value) => setRecords(draftRecords => draftRecords[recordIndex].address = value)}/>
            //               </TableCell>
            //             )}
            //           </TableBodyDataCellTemplate>
            //           <TableBodyDataCellTemplate>
            //             {({ record, records, recordIndex }) => <TableCell>{records[recordIndex + 1].occupation}</TableCell>}
            //           </TableBodyDataCellTemplate>
            //           <TableBodyDataCellTemplate>f
            //             example of children being jsx instead of a function
            //             {Icons.IconChevron()}
            //           </TableBodyDataCellTemplate>
            //           <TableBodyDataCellTemplate>
            //             <Button onClick={handleEvent(() => { this event doesnt trickle up to <td> nor <tr>})} />
            //           </TableBodyDataCellTemplate>
            //         </TableBodyDataRowTemplate>
            //       </TableBodyData>

            //       {/* can't auto sort / filter static content */}
            //       <TableRow recordId={someDataRecord.id} record={someDataRecord}> {/* need for onclick? but not for rendering,
            //   so require record OR recordId if table has onTrClick */}
            //         <TableCell field="petName" value="my-pets-name"> {/* putting field/value on the field allows it to be sortable/filterable */}
            //           <div>
            //             <span>petName</span>
            //             <span>should sort by this value</span>
            //           </div>
            //         </TableCell>
            //         <TableCell>description</TableCell>
            //         <TableCell>
            //           <Switch />
            //           I am a description! {item.description}
            //         </TableCell>
            //         <TableCell>
            //           Plain static td content
            //         </TableCell>
            //       </TableRow>

            //       <TableBodyData data={[... inspector2.inspections]}> {/* by providing the list in the tbody it is more composable and
            //   the developer can see that they can provide a list or just static content */}
            //         <TableBodyDataRowTemplate onClick={({ e, isDoubleClick }) => { doSomething() }}>
            //           <TableBodyDataCell>
            //             {({ record, list, recordIndex }) => <TableCell>{record.name}</TableCell>}
            //           </TableBodyDataCell>
            //           <TableBodyDataCell>
            //             {({ record, list, recordIndex }) => <TableCell>{record.name}</TableCell>}
            //           </TableBodyDataCell>
            //           <TableBodyDataCell>
            //             example of children being jsx instead of a function
            //             {Icons.IconChevron()}
            //           </TableBodyDataCell>
            //         </TableBodyDataRowTemplate>
            //       </TableBodyData>

            //       <tr><td>doing something supitd</td></tr>
            //     </TableBody>

            //     <TableFoot>
            //       <TableFootRow>
            //         <TableFootCell>Totals:</TableFootCell>
            //         <TableFootCell>3,302</TableFootCell>
            //         <TableFootCell>42.05%</TableFootCell>
            //         <TableFootCell>N/A</TableFootCell>
            //       </TableFootRow>
            //     </TableFoot>

            //   </Table>
            //   <TablePagination recordsPerPage={25} />
            // {/* Should pagination be in a tfoot? no. it is outside of groupings and outside of the table!*/}
            // </TableWrapper>
            }
          </TabPanel>

          <TabPanel tabId="button-props-react">
            react props
            {
              // <TableWrapper>
              //   <h3>Table Title</h3>
              //   <SWitch />
              //   <Table>
              //     <TableHead>
              //       <TableHeadRow>
              //         <TableHeadCell>CSS Class</TableHeadCell>
              //         <TableHeadCell>Description</TableHeadCell>
              //         <TableHeadCell>Example</TableHeadCell>
              //       </TableHeadRow>
              //     </TableHead>
              //     <TableBody>
              //       <TableRow>
              //         <TableCell>.samir-rocks</TableCell>
              //         <TableCell>Make any html rock Samir style!</TableCell>
              //         <TableCell>&lt;div class="samir-rocks" /&gt;</TableCell>
              //       </TableRow>
              //     </TableBody>
              //   </Table>
              //   <TablePagination />
              // </TableWrapper>
            }

          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

ButtonDocumentation.propTypes = propTypes;
ButtonDocumentation.defaultProps = defaultProps;

export default ButtonDocumentation;
