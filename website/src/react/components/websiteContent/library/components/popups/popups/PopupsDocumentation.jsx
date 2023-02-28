/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  Button,
  BUTTON_APPEARANCE,
  BUTTON_TYPES,
  componentColors,
  formElementSizesEnum,
  popperPlacement,
  Popup,
  Tab,
  TabGroup,
  Table, TableBody, TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow, TableRow,
  TableWrapper,
  TabList,
  TabPanel,
  TabPanels
} from '@utahdts/utah-design-system';
import { useEffect, useRef } from 'react';
import { useImmer } from 'use-immer';
import PreCode from '../../../../../preCode/PreCode';
import SandboxExample from '../../../../../sandbox/SandboxExample';
import StaticExample from '../../../../../staticExamples/StaticExample';
// eslint-disable-next-line import/no-unresolved
import PopupExampleAriaDialog from './PopupExampleAriaDialog.html?raw';
// eslint-disable-next-line import/no-unresolved
import PopupExampleAriaMenu from './PopupExampleAriaMenu.html?raw';
import PopupsExampleCodeReact from './PopupsExampleCodeReact';
import PopupsExampleProps from './PopupsExampleProps';
import PopupsExampleRender from './PopupsExampleRender';

const propTypes = {};
const defaultProps = {};

function PopupsDocumentation() {
  const buttonRef = useRef();
  const button2Ref = useRef();
  const buttonEditorRef = useRef();
  const [popupsState, setPopupsState] = useImmer({
    example1: false,
    example2: false,
    editorExample: false,
  });

  useEffect(() => {
    // set the focus on the button or text input depending on visibility
    if (popupsState.editorExample) {
      document.getElementById('editor-example-textarea').focus();
    } else {
      document.getElementById('button-for-editor-example').focus();
    }
  }, [popupsState.editorExample]);

  return (
    <div className="documentation-content">
      <h1 id="h1-top">Popups</h1>
      <div className="lead-in">
        <p>
          Popups are *non-modal boxes that are triggered by some input from the end user (e.g. clicking a target, or key presses).
          When the popup is triggered, new content is displayed near the triggering element. The popup is elevated above the main content of the page.
        </p>
        <p>
          <em>
            *Differentiation: Modals are boxes containing content that disables the page content and focuses the user’s attention on a single task
            or message. View more information on <a href="www.someLink.com" target="_blank">modals</a>.
          </em>
        </p>
      </div>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        RENDER_EXAMPLE={PopupsExampleRender}
        PROPS_EXAMPLE={PopupsExampleProps}
        CODE_EXAMPLE={PopupsExampleCodeReact}
      />
      <StaticExample
        title="Basic Popup"
        renderedExample={(
          <>
            <button
              aria-controls="id-for-example1"
              aria-expanded={popupsState.example1}
              aria-haspopup="dialog"
              id="button-for-example1"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setPopupsState((draftState) => { draftState.example1 = !draftState.example1; });
              }}
              ref={buttonRef}
              type="button"
            >
              Toggle Popup
            </button>
            <Popup
              ariaLabelledBy="button-for-example1"
              id="id-for-example1"
              isVisible={popupsState.example1}
              onVisibleChange={(_e, isVisible) => setPopupsState((draftState) => { draftState.example1 = isVisible; })}
              placement={popperPlacement.BOTTOM}
              referenceElement={buttonRef}
              role="dialog"
            >
              <div>I am content in a Popup</div>
            </Popup>

            <button
              aria-controls="id-for-example2"
              aria-expanded={popupsState.example2}
              aria-haspopup="dialog"
              id="button-for-example-2"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setPopupsState((draftState) => { draftState.example2 = !draftState.example2; });
              }}
              ref={button2Ref}
              type="button"
            >
              Toggle Popup Example 2
            </button>
            <Popup
              ariaLabelledBy="button-for-example-2"
              hasCloseButton
              id="id-for-example2"
              isVisible={popupsState.example2}
              onVisibleChange={(_e, isVisible) => setPopupsState((draftState) => { draftState.example2 = isVisible; })}
              placement={popperPlacement.TOP}
              referenceElement={button2Ref}
              role="dialog"
            >
              <div>I am content in a Popup with a close button.</div>
            </Popup>
          </>
        )}
        quickTips={(
          <ul>
            <li>A basic popup should have only a single brief sentence or description.</li>
            <li>
              To close the popup you may use an icon button, toggle the action button, click outside of the popup, or mash the escape key.
            </li>
            <li>Typically these should not interfere with the users ability to continue their work.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Popup Menu"
        renderedExample={(
          <p>TODO: when we have vertical menus.</p>
        )}
        quickTips={(
          <ul>
            <li>A menu popup has a list of items, and possibly icon buttons, that the user can select.</li>
            <li>
              Avoid selection lists that have more than 15 options to choose from.
              Lists may not be visible on mobile screens if there are too many options.
            </li>
            <li>
              Close a popup menu by toggling the button, clicking outside of the popup, or mashing the escape key.
            </li>
          </ul>
        )}
      />
      <StaticExample
        title="Popup Menu with Flyout Popups"
        renderedExample={(
          <p>TODO: When we have flyout popups.</p>
        )}
        quickTips={(
          <ul>
            <li>
              After a user hovers over a list item in the primary popup menu,
              a secondary fly-out popup appears next to the primary popup with another item list.
            </li>
            <li>A chevron icon should be used to identify a list item that has a sub list of items for the user to choose from.</li>
            <li>Avoid using fly-out menus as they are difficult for users with reduced dexterity and are difficult to use on mobile devices</li>
          </ul>
        )}
      />
      <StaticExample
        title="Popup Editor"
        renderedExample={(
          <>
            <button
              aria-controls="id-for-editorExample"
              aria-expanded={popupsState.editorExample}
              aria-haspopup="dialog"
              id="button-for-editor-example"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setPopupsState((draftState) => { draftState.editorExample = !draftState.editorExample; });
              }}
              ref={buttonEditorRef}
              type="button"
            >
              Toggle Editor Popup Example
            </button>
            <Popup
              ariaLabelledBy="button-for-editor-example"
              className="popup__wrapper--close-button-absolute"
              hasCloseButton
              id="id-for-editorExample"
              isVisible={popupsState.editorExample}
              onVisibleChange={(_e, isVisible) => setPopupsState((draftState) => { draftState.editorExample = isVisible; })}
              placement={popperPlacement.TOP}
              referenceElement={buttonEditorRef}
              role="dialog"
            >
              <>
                <div className="flex flex-col gap-xs">
                  <label htmlFor="editor-example-textarea"><strong>What is the ultimate question?</strong></label>
                  <textarea name="editor-example-textarea" id="editor-example-textarea" className="mb-spacing-s" style={{ width: '300px' }} />
                </div>
                <div className="flex justify-end gap-xs">
                  <Button
                    type={BUTTON_TYPES.BUTTON}
                    size={formElementSizesEnum.SMALL}
                    onClick={() => setPopupsState((draftState) => { draftState.editorExample = false; })}
                  >
                    Cancel
                  </Button>
                  <Button
                    type={BUTTON_TYPES.BUTTON}
                    appearance={BUTTON_APPEARANCE.SOLID}
                    color={componentColors.PRIMARY}
                    size={formElementSizesEnum.SMALL}
                    onClick={() => setPopupsState((draftState) => { draftState.editorExample = false; })}
                  >
                    Okay
                  </Button>
                </div>
              </>
            </Popup>
          </>
        )}
        quickTips={(
          <ul>
            <li>The popup editor should only contain one input element</li>
            <li>Typically use two buttons, one to cancel the action and one to continue the action</li>
            <li>
              An icon button should be used to close the popup and can be used in combination with
              clicking outside of the popup, or mashing the escape key.
            </li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Additional, non-critical, information.</strong> Use a popup to convey additional,
          non-critical, information to assist the user in completing an action.
        </li>
        <li>
          <strong>Limited space.</strong> Popups can be used to present the user with some interactivity when there is not enough space on the
          screen for an inline action.
        </li>
        <li>
          <strong>Minimal disruption to content flow.</strong> Use popups to create minimal disruption to the content flow, thereby not creating
          an annoying or frustrating user experience.
        </li>
      </ul>
      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Detailed content.</strong> If the content has detailed information that consists of more than a few sentences or more than
          one input consider using a Dialog or Modal.
        </li>
        <li>
          <strong>Users full attention required.</strong> Always use a Modal if the user&apos;s full attention needs to be on a particular form
          or content section.
        </li>
        <li>
          <strong>Use a tooltip for one or two words.</strong> Consider using a tooltip if the information does not need a click to be dismissed
          and the content is limited to one or two words. View more information on <a href="www.somelink.com" target="_blank">tooltips</a>.
        </li>
      </ul>
      <h3 id="section-usability">Usability Guidance</h3>
      <h4>Style</h4>
      <ul className="mb-spacing">
        <li><strong>Hover above the content.</strong> A popup should overlap in front of other UI elements. View more information about <a href="www.somelink.com" target="_blank">elevation</a>.</li>
        <li>
          <strong>Popup positioning.</strong> Popups should always be positioned within the viewable areas of the screen and be <code>6-12px</code> away from the element that launched them.
          The popup should appear next to (left, right, top, bottom) the element that launched it.
        </li>
      </ul>
      <h4>User Experience</h4>
      <ul className="mb-spacing">
        <li><strong>Float above the content.</strong> Popup box should display over the main page content using a drop-shadow on the box.</li>
        <li><strong>Trigger event onClick.</strong> The user should be able to click on the element to trigger the interaction.</li>
        <li>
          <strong>Mobile experience.</strong> Avoid using fly-out menus as they are difficult for users with reduced dexterity and are difficult to
          use on mobile devices.
        </li>
        <li>
          <strong>Easy to dismiss.</strong>Popups should be easily dismissible using a combination of an icon button,  clicking outside of the popup,
          or mashing the escape key.
        </li>
      </ul>
      <h3 id="section-accessibility">Accessability</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>The popup boundary (the outside edge of the popup) must maintain a <code>3:1</code> contrast ratio or better.</li>
      </ul>
      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Default focus should go to the first interactive element.</li>
        <li>User should be able to open, close and navigate within the popup using only the keyboard.</li>
        <li>
          Be sure the content in the popup does not disappear prematurely and is visible until the user chooses to dismiss it or move away from it.
        </li>
        <li>
          Be sure the popup can be dismissed with the Escape key. Once dismissed, the user’s focus should return to the element that spawned the
          popup.
        </li>
        <li>Keyboard shortcuts include:</li>
        <ul>
          <li>&quot;Enter&quot; key should open the popup</li>
          <li>&quot;Esc&quot; key should dismiss the popup</li>
        </ul>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          When encountering an element that opens a popup, the user should be alerted to the purpose or intent of the popup and that their action will
          trigger the popup to open.
        </li>
        <li>Screen readers typically announce the name and role of the element first followed by the state of the element.</li>
        <li>Remember that the focus is set on the first interactive element within the popup after it opens.</li>
        <li>Ensure that the user can easily close the popup and return to the main content of the website.</li>
        <li>Use popup menus sparingly. Too many popup menus can create &quot;noise&quot; in screen readers.</li>
      </ul>
      <h4 className="mb-spacing">Aria Examples</h4>

      <h5>Popup Dialog</h5>
      <PreCode className="gray-block" codeRaw={PopupExampleAriaDialog} />

      <h5>Popup Menu</h5>
      <PreCode className="gray-block" codeRaw={PopupExampleAriaMenu} />

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="segmented-button-props-css">
          <TabList>
            <Tab id="segmented-button-props-css">CSS</Tab>
            <Tab id="segmented-button-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="segmented-button-props-css">
              <TableWrapper>
                <Table className="table--lines-x">
                  <TableHead>
                    <TableHeadRow>
                      <TableHeadCell className="text-left css-classes">Css Classes</TableHeadCell>
                      <TableHeadCell className="text-left">Description</TableHeadCell>
                    </TableHeadRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell><code>.popup__wrapper</code></TableCell>
                      <TableCell>The outer wrapper of a popup.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.popup__wrapper--hidden</code></TableCell>
                      <TableCell>The hidden state of the popup.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.popup__wrapper--visible</code></TableCell>
                      <TableCell>The visible state of the popup.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.popup__content</code></TableCell>
                      <TableCell>The content of the popup.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.popup__arrow</code></TableCell>
                      <TableCell>The arrow for the popup.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.popup__close-button</code></TableCell>
                      <TableCell>The class for the close button (icon button).</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code>.popup__wrapper--close-button-absolute</code></TableCell>
                      <TableCell>Will position the close button absolutely instead of floating it.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </TabPanel>
            <TabPanel tabId="segmented-button-props-react">
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
                      <TableCell><code className="primary-color">children</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>node</code>
                        </div>
                      </TableCell>
                      <TableCell><em>required</em></TableCell>
                      <TableCell>
                        The content of the popup.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code className="primary-color">className</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>string</code>
                        </div>
                      </TableCell>
                      <TableCell>null</TableCell>
                      <TableCell>
                        This css class will be added to the popup wrapper.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code className="primary-color">hasCloseButton</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>boolean</code>
                        </div>
                      </TableCell>
                      <TableCell>false</TableCell>
                      <TableCell>
                        Controls whether the close button will appear on the popup or not.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code className="primary-color">id</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>string</code>
                        </div>
                      </TableCell>
                      <TableCell>null</TableCell>
                      <TableCell>
                        The <code>id</code> attribute of the popup wrapper.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code className="primary-color">innerRef</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>react ref</code>
                        </div>
                      </TableCell>
                      <TableCell>null</TableCell>
                      <TableCell>
                        The ref for the popup wrapper.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code className="primary-color">isVisible</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>boolean</code>
                        </div>
                      </TableCell>
                      <TableCell><em>required</em></TableCell>
                      <TableCell>
                        The popup component is controlled. You must provide the visible state of the popup.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code className="primary-color">offset</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>array of numbers</code>
                        </div>
                      </TableCell>
                      <TableCell>[0, 10]</TableCell>
                      <TableCell>
                        The offset used by Popper to position the popup.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code className="primary-color">onVisibleChange</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>function</code>
                        </div>
                      </TableCell>
                      <TableCell><em>required</em></TableCell>
                      <TableCell>
                        A function that is triggered when the visibility of the popup should changes. The new visible value is passed as a parameter.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code className="primary-color">placement</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>string</code>
                        </div>
                      </TableCell>
                      <TableCell>popperPlacement.AUTO</TableCell>
                      <TableCell>
                        The default placement of the popup. See the popperPlacement ENUM for the correct values to use.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code className="primary-color">referenceElement</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>react ref</code>
                        </div>
                      </TableCell>
                      <TableCell><em>required</em></TableCell>
                      <TableCell>
                        A ref to the button or place where the popup will appear. Usually this is the button that activated the popup.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

PopupsDocumentation.propTypes = propTypes;
PopupsDocumentation.defaultProps = defaultProps;

export default PopupsDocumentation;
