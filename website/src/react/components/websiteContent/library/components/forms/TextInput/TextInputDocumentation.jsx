/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableWrapper
} from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import textInputClassFocusPng from '../../../../../../../static/images/screenshots/components/textInput/textInput-class-focus.png';
import textInputClassHoverPng from '../../../../../../../static/images/screenshots/components/textInput/textInput-class-hover.png';
import textInputSearchPng from '../../../../../../../static/images/screenshots/components/textInput/textInput-search.png';
import textInputValidationPng from '../../../../../../../static/images/screenshots/components/textInput/textInput-validation.png';
import textInputPng from '../../../../../../../static/images/screenshots/components/textInput/textInput.png';
import pageUrls from '../../../../../routing/pageUrls';
import SandboxExample from '../../../../../sandbox/SandboxExample';
import StaticExample from '../../../../../staticExamples/StaticExample';
import TextInputExampleCodeReact from './TextInputExampleCodeReact';
import TextInputPrimaryExampleProps from './TextInputExampleProps';
import TextInputExampleRender from './TextInputExampleRender';
import PreCode from '../../../../../preCode/PreCode';

const propTypes = {};
const defaultProps = {};

function TextInputDocumentation() {
  return (
    <div className="documentation-content">
      <h1>Text Input</h1>
      <p className="lead-in">
        <code>Text input</code> allows the user to enter any combination of letters, numbers or symbols in a single-line input box.
        For multi-line input please view more information on <Link to={pageUrls.textArea}>Areas</Link>.
      </p>
      <hr />
      <h2 id="example">Example</h2>
      <SandboxExample
        CODE_EXAMPLE={TextInputExampleCodeReact}
        PROPS_EXAMPLE={TextInputPrimaryExampleProps}
        RENDER_EXAMPLE={TextInputExampleRender}
      />
      <StaticExample
        title="Text Input"
        renderedExample={(
          <div className="flex-col">
            <div className="flex-row">
              <img src={textInputPng} alt="Example Text Input" />
              <img src={textInputValidationPng} alt="Example Text Input validation" />
            </div>
            <div className="flex-row">
              Hover <img src={textInputClassHoverPng} alt="Example Text Input Hover" />
              Focus <img src={textInputClassFocusPng} alt="Example Text Input Focus" />
            </div>
          </div>
        )}
        quickTips={(
          <ul>
            <li><code>Text Input</code> is comprised of a <code>label</code> and an <code>input box</code>. Generally, the <code>label</code> should be above the <code>input box</code>.</li>
            <li>Don&apos;t use <code>placeholders</code> as the <code>label</code>. However, they can be used to indicate how to format the user&apos;s text response (e.g. <code>xxx-xxx-xxxx</code>, or <code>xxx@xxxx.com</code>)</li>
            <li>Use <code>visual indicators</code> when a user hovers over an <code>input box</code> versus when the <code>input box</code> has focus to enhance the user experience.</li>
            <li>It is recommended that a <code>text input</code> has real time validation to alert the user to incorrect input.</li>
          </ul>
        )}
      />
      <p>View more information on <Link to={pageUrls.validation}>Form Validation.</Link></p>

      <StaticExample
        title="Search Input"
        renderedExample={(<div className="flex-col"><img src={textInputSearchPng} alt="Example Text Input Search" /></div>)}
        quickTips={(
          <ul>
            <li>The <code>search input box</code> should have a <code>placeholder</code>. The <code>label</code> is still visible to screen readers. (Use the css class <code>visually-hidden</code> to hide the <code>label</code> on the screen.)</li>
            <li>To the left of the <code>placeholder</code> there should be a magnifying glass icon to signify that this is a <code>search input box</code>.</li>
            <li>Optionally, you may place an <code>X icon</code> on the right to clear the <code>input field</code>.</li>
            <li>There should be a <code>submit button</code> (visible or visually-hidden) to trigger the search.</li>
            <li>Use an event handler to trigger the search when the user presses <code>return</code> or <code>enter</code>.</li>
          </ul>
        )}
      />
      <p>View more information on <Link to={pageUrls.iconButton}>Icon Buttons.</Link> or <Link to={pageUrls.button}>Buttons.</Link></p>

      <h2 className="mb-spacing" id="description-guidance">Description and Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Expected input is limited to single sentence, or few words</strong>. Consider the expected length of the user&apos;s response. If it will be limited to a single sentence, phrase, word, or number use <code>text input</code>.</li>
        <li><strong>Unknown data</strong>. Use a <code>text input</code> for open ended responses.</li>
      </ul>
      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Set of predetermined responses</strong>. Consider using a <code>select input</code>, <code>checkboxes</code>, or <code>radio buttons</code> if you have a standard set of responses.</li>
      </ul>
      <p>
        View more information on <Link to={pageUrls.switch}>Select Input</Link>, <Link to={pageUrls.comboBox}>Combo Box</Link>, <Link to={pageUrls.multiSelect}>Multi Select</Link>, <Link to={pageUrls.checkbox}>Checkboxes</Link> or <Link to={pageUrls.radioButton}>Radio Buttons</Link>
      </p>
      <h3 id="section-usability-guidance">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Width of the input box</strong>. You may choose to match the <code>input box</code> length to the anticipated user response. (e.g. <code>state abbreviation</code>, <code>telephone number</code>, <code>date of birth</code>, etc.)</li>
        <li><strong>Consistent look</strong>. Keep the look of your <code>text inputs</code> consistent to help the user to easily identify your <code>form inputs</code>. (e.g. <code>border-radius: 4px</code>, <code>:focus</code> color matches the <code>primary color</code>, error messages all have the same color, etc.)</li>
        <li><strong>Do not use placeholders as a replacement for labels</strong>. When a user moves into the <code>input box</code> any <code>placeholder text</code> will disappear and the user will no longer be able to see the purpose of the <code>input box</code>. In addition, most browsers do not provide a high enough <code>contrast ratio</code> when rendering <code>placeholder text</code>.</li>
        <li><strong>Input box height between 32px and 40px</strong>. By sticking to the specified range, your <code>text fields</code> will be mobile friendly and at the same time provide a consistent user experience.</li>
        <li><strong>Ensure enough space between other form elements</strong>. There should be enough spacing between the <code>text input</code> and other <code>elements</code> on the page to prevent accidental clicks or taps.</li>
        <li><strong>The name of the text area should correspond to the data point</strong>. A <code>name</code> attribute to set the <code>name</code> of the associated data point submitted to the server when the <code>form</code> is submitted.</li>
        <li><strong>Clear concise labels</strong>. Use clear and concise <code>labels</code> to describe the purpose of the <code>input box</code>.</li>
        <li><strong>Real time validation</strong>. Generally <code>real time validation</code> is preferred as it creates an easy experience for the user when filling out <code>forms</code>. Once the user clicks or tabs out of the <code>input box</code>, then it is appropriate to validate the user&apos;s response. Provide error messages that are clear and specific to the error.</li>
        <li id="associate-the-label-with-the-input">
          <strong>Associate the label with the input</strong>.
          <ol type="1">
            <li>
              <strong>Preferred Method</strong>: Associate the <code>label</code> with the <code>input box</code> by adding <code>for=&quot;example&quot;</code> to the <code>label</code> and an <code>id=&quot;example&quot;</code> to the <code>input</code>.
              <br />
              <PreCode
                className="gray-block"
                codeRaw={`<div>
  <label for="input1">My Label</label>
  <input type="text" id="input1" … />
  <label for="input1" class="error">Error Message</label>
</div>`}
              />
            </li>
            <li>
              <strong>Secondary Method</strong>: <code>Inputs</code> can be nested inside the <code>label element</code> to create an implicit association between the two elements. The attributes <code>for</code> and <code>id</code> can still be used but are no longer needed.
              <br />
              <PreCode
                className="gray-block"
                codeRaw={`<label>
  <span>My Label<span>
  <input …/>
  <div class="error">Error</div>
<label>`}
              />
            </li>
          </ol>
          <p>For flexibility of style, in the design system, we have chosen <code>Option 1 (Preferred Method)</code> for the provided css.</p>
        </li>
      </ul>
      <h3 id="section-accessibility">Accessibility</h3>
      <h4>Contrast</h4>
      <ul className="mb-spacing">
        <li><code>Text input</code> and <code>label</code> should have a contrast ratio of <code>4.5:1</code> with the background color to ensure legibility.</li>
        <li>The <code>text area&apos;s</code> focus state should be a <code>3:1</code> contrast ratio.</li>
      </ul>
      <h4>Keyboard Interactivity</h4>
      <ul className="mb-spacing">
        <li>When navigating the <code>form</code>, the user should be able to move in and out of <code>focus</code> on the <code>text area</code> using the <code>tab</code> key.</li>
      </ul>
      <h4>Screen Readers</h4>
      <ul className="mb-spacing">
        <li>Do not use <code>Headings</code> for <code>labels</code>. This interferes with assistive technology.</li>
        <li>Use the <code>Search</code> role if the <code>input</code> will be used for searching and use this role sparingly. Too many <code>search inputs</code> can create noise in screen readers.</li>
        <li>If there is more than one <code>search</code> role in a document, provide an <code>aria-label</code> for each landmark. (e.g. <code>Sitewide</code>, <code>On this page</code>) There is no need to repeat the word <code>search</code> in the <code>label</code>.</li>
        <li><code>Inputs</code> should have an associated <code>label</code>. (<a href="#associate-the-label-with-the-input">see above</a>).</li>
      </ul>
      <h4>Examples</h4>
      <ul className="mb-spacing">
        <li>
          <strong>Text Input</strong>
          <PreCode
            className="gray-block"
            codeRaw={`<div>
  <label for="input1">Some Input<label>
  <input type="text" id="input1">
  <label for="input1" class="error">Some Error</label>
</div>`}
          />
        </li>
        <li>
          <strong>Search Input</strong>
          <PreCode
            className="gray-block"
            codeRaw={`<form role="search" aria-label="Sitewide">
  <label for="search1">Some Search Input<label>
  <input type="text" id="search1">
  <button class="visually-hidden?">Submit</button>
</form>`}
          />
        </li>
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

TextInputDocumentation.propTypes = propTypes;
TextInputDocumentation.defaultProps = defaultProps;

export default TextInputDocumentation;
