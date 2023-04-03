/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  formElementSizesEnum,
  Switch,
  Tab,
  TabGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper,
  TabList,
  TabPanel,
  TabPanels
} from '@utahdts/utah-design-system';
import SandboxExample from '../../../../sandbox/SandboxExample';
import StaticExample from '../../../../staticExamples/StaticExample';
import DateInputExampleCodeReact from './DateInputExampleCodeReact';
import DateInputPrimaryExampleProps from './DateInputExampleProps';
import DateInputExampleRender from './DateInputExampleRender';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function DateInputDocumentation() {
  return (
    <div className="documentation-content">
      <h1>Date Input</h1>
      <p className="lead-in">A Date Input element is a switchable component that switches on a switch action.</p>
      <hr />
      <h2 id="example">Example</h2>
      <SandboxExample
        CODE_EXAMPLE={DateInputExampleCodeReact}
        PROPS_EXAMPLE={DateInputPrimaryExampleProps}
        RENDER_EXAMPLE={DateInputExampleRender}
      />
      <StaticExample
        title="Label"
        renderedExample={(
          <div className="flex-col">
            <Switch
              label="Label"
              id="switch-label"
              width={20}
            />
            <Switch
              label="Inside Label"
              id="switch-inside-label"
              labelOn="on"
              labelOff="off"
              width={35}
            />
          </div>
        )}
        quickTips={(
          <ul>
            <li>A switch can contain a label within itself.</li>
            <li>The inside label can be different based on whether the switch position is <code>on</code> or <code>off</code>.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Sizes"
        renderedExample={(
          <div className="flex-col">
            <Switch
              label="Small"
              id="switch-small"
              size={formElementSizesEnum.SMALL}
              width={20}
            />
          </div>
        )}
        quickTips={(
          <ul>
            <li>The preferred switch size is the default (medium).</li>
            <li>Do not mix switches of different sizes in close proximity.</li>
          </ul>
        )}
      />

      <h2 className="mb-spacing" id="section-description-guidance">Description and Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Enter a formatted date</strong>. Use a date input to allow users to enter a correctly formatted date.</li>
        <li><strong>Use date picker popup</strong>. A date picker popup can make it easier for the user to pick a date in context with the current date, such as scheduling an event or appointment. Additionally, the date picker can be useful for choosing a date in relation to the day of the week.</li>
        <li><strong>Entire date</strong>. The date input is used to collect the entire date such as 01/02/2023, and not a part of the date such as the day, month, or year. Use separate inputs or select inputs to collect part of a date.</li>
        <li><strong>Date range</strong>. Consider using two date inputs to capture a date range.</li>
      </ul>
      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Familiar dates</strong>. The date picker popup is less useful for picking familiar dates such as birthdays. Consider not showing the date picker icon in these cases as the user experience can be frustrating to find an exact date that is months or years in the past or future.</li>
        <li><strong>Date context is not needed</strong>. Typically the date picker popup is not needed when the context of the date is not important, such as knowing the day of the week at a particular date is on.</li>
        <li><strong>Use browser&apos;s built-in date input</strong>. Optionally, you may choose to use the browser&apos;s built in date input. e.g. <code>&lt;input type=&quot;date&quot; /&gt;</code>. However, you will not be able to style the popup.</li>
      </ul>
      <h3 id="section-usability">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li>Provide a formatting hint as part of the label such as &quot;mm/dd/yyyy&quot; so users know what format is expected if they decide to enter the date directly.</li>
        <li>Avoid using the date picker popup to collect familiar dates such as birthdays, life events, or dates in the far past or future.</li>
        <li>The date picker popup will typically appear when the user presses the calendar icon button. Avoid automatically popping open the date picker when the date input receives focus.</li>
        <li>The calendar icon button is styled to compliment the input field, and therefore doesn&apos;t maintain the typical appearance of most icon buttons. See icon button.</li>
        <li>The user should be allowed to skip months or years by pressing the arrows at the top of the date picker popup.</li>
        <li>The days of the week should be visible above the calendar dates.</li>
        <li>The current date should be highlighted on the popup so the user can orient themselves.</li>
        <li>You may optionally include a &quot;today&quot; button that will automatically select the current date.</li>
        <li>Do not automatically submit the form when the user picks a date.</li>
      </ul>
      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li>The input text and the date picker text and icons should maintain a 4.5:1 or higher contrast ratio.</li>
        <li>Button boundaries, such as the current date and picked date should maintain a 3:1 contrast ratio.</li>
        <li>The popup should follow the contrast guidelines for a typical popup component. See popup.</li>
      </ul>
      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>You should be able to navigate the entire date popup using only the keyboard. Pressing return or space on the calendar icon button will cause the date picker popup to appear. Focus will be automatically set to the selected date. </li>
        <li>You can close the popup by hitting the escape key.</li>
        <li>The tab key will focus on the month and year arrows, the currently selected day, and the &quot;today&quot; button.</li>
        <li>When the user presses &quot;return/enter&quot; the date picker popup will close with the highlighted date being added to the input field.</li>
        <li>Additionally you may navigate the date picker popup with the following keyboard shortcuts (Mac-equivalent commands are in parentheses):
          <ul>
            <li>Days, use left and right arrows</li>
            <li>Weeks, use up and down arrows</li>
            <li>Months, use  page up (fn + up arrow) and page down (fn + down arrow)</li>
            <li>Years use shift + page up (shift + fn + up arrow) and shift + page down (shift + fn + down arrow)</li>
            <li>Home (fn + left arrow) and End (fn + right arrow) keys navigate to the beginning and end of a week</li>
          </ul>
        </li>
      </ul>
      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>The icon button should have an accessible label such as &quot;Choose Date&quot;. This label should change to &quot;Change Date&quot; if the field already has a date entered. Optionally, you may also include the chosen date: &quot;Change Date, 03/14/2024&quot;.</li>
        <li>Visually, day names headers are abbreviated. Screen reader users will be provided the full names using the abbr attribute. e.g. <code>&lt;td abbr=&quot;Wednesday&quot;&gt;We&lt;/td&gt;</code></li>
        <li>Use an aria-live region for the Month - Year. When the user changes the month or year it will read to them the current month being displayed.</li>
      </ul>

      <h2 id="settings">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="switch-props-css">
          <TabList>
            <Tab id="switch-props-css">CSS</Tab>
            <Tab id="switch-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="switch-props-css">
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
                      <TableCell><code>.switch--small</code></TableCell>
                      <TableCell>CSS class modifier for a small switch.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.switch--large</code></TableCell>
                      <TableCell>CSS class modifier for a large switch.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </TabPanel>

            <TabPanel tabId="switch-props-react">
              <h3>React Switch Properties</h3>
              <div className="documentation-content--small-text">
                <TableWrapper>
                  <Table className="table--lines-x">
                    <TableHead>
                      <TableHeadRow>
                        <TableHeadCell className="text-left">Property</TableHeadCell>
                        <TableHeadCell className="text-left">Type</TableHeadCell>
                        <TableHeadCell className="text-left">Default</TableHeadCell>
                        <TableHeadCell className="text-left">Description</TableHeadCell>
                      </TableHeadRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell><code className="primary-color">className</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>string</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>This css class will be added to the switch.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">errorMessage</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>string</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>Message to be displayed when an error occurs.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">id</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>string</code>
                            <span> | </span>
                            <code>number</code>
                          </div>
                        </TableCell>
                        <TableCell>(required)</TableCell>
                        <TableCell>An id to put on the input element.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">innerRef</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>MutableRefObject</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>
                          This ref will be attached to the rendered &lt;div&gt; element allowing the parent component to interact
                          directly with the actual <span className="font-semi-bold">switch</span> DOM element.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">isDisabled</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>true</code>
                            <span> | </span>
                            <code>false</code>
                          </div>
                        </TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>
                          When isDisabled is true, the switch will become unclickable and its appearance will change
                          to be more subdued so that the user can tell the switch is unusable.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">label</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>string</code>
                          </div>
                        </TableCell>
                        <TableCell>(required)</TableCell>
                        <TableCell>Label to be displayed next to the switch.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">labelOff</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>node</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>A label can be displayed within the switch itself when its value is set to <code>false</code>.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">labelOn</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>node</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>A label can be displayed within the switch itself when its value is set to <code>true</code>.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">onChange</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>function</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>The function to call when the switch is triggered.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">onSubmit</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>function</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>The function to call when the enter key is pressed.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">size</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>formElementSizesEnum</code>
                            <span> | </span>
                            <code>&apos;small&apos;</code>
                            <span> | </span>
                            <code>&apos;medium&apos;</code>
                            <span> | </span>
                            <code>&apos;large&apos;</code>
                          </div>
                        </TableCell>
                        <TableCell>&apos;medium&apos;</TableCell>
                        <TableCell>Determines how much space the switch will consume on the page.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">sliderChildren</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>node</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>Element to be displayed within the indicator.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">value</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>true</code>
                            <span> | </span>
                            <code>false</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>Whether the input is switched.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><code className="primary-color">width</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>number</code>
                          </div>
                        </TableCell>
                        <TableCell>null</TableCell>
                        <TableCell>Width of the switch in <code>px</code>.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableWrapper>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

DateInputDocumentation.propTypes = propTypes;
DateInputDocumentation.defaultProps = defaultProps;

export default DateInputDocumentation;
