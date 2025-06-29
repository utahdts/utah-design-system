/* eslint-disable max-len */
import PopupExampleAriaDialog from './PopupExampleAriaDialog.html?raw';
import PopupExampleAriaMenu from './PopupExampleAriaMenu.html?raw';

import {
  BUTTON_APPEARANCE,
  BUTTON_TYPES,
  Button,
  Popup,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Table, TableBody, TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow, TableRow,
  TableWrapper,
  VerticalMenu,
  componentColors,
  formElementSizesEnum,
  popupPlacement,
  ExternalLink
} from '@utahdts/utah-design-system';
import { childrenMenuTypes } from '@utahdts/utah-design-system-header';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { PreCodeForCodeString } from '../../../../../preCode/PreCodeForCodeString';
import { pageUrls } from '../../../../../routing/pageUrls';
import { SandboxExample } from '../../../../../sandbox/SandboxExample';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import { PopupsExampleCodeReact } from './PopupsExampleCodeReact';
import { PopupsExampleProps } from './PopupsExampleProps';
import { PopupsExampleRender } from './PopupsExampleRender';

// https://www.abc4.com/news/digital-exclusives/attention-new-utahns-seven-unique-utah-foods-to-know/
const example3Menu = [
  {
    // custom titleTagName so the default 'h2' doesn't get picked up by "On this page"
    titleTagName: 'div',
    header: 'Utah Foods',
    id: 'vertical-menu-example-3',
    menuItems: [
      { title: 'Dutch Oven', id: 'example3-dutch-oven', link: 'example3-dutch-oven' },
      { title: 'Fry Sauce', id: 'example3-fry-sauce', link: 'example3-fry-sauce' },
      { title: 'Funeral Potatoes', id: 'example3-funeral-potatoes', link: 'example3-funeral-potatoes' },
      { title: 'Green Jell-O', id: 'example3-jell-o', link: 'example3-jell-o' },
      { title: 'Ice Cream Shakes', id: 'example3-ice-cream-shake', link: 'example3-ice-cream-shake' },
      { title: 'Pastrami Burgers', id: 'example3-pastrami-burgers', link: 'example3-pastrami-burgers' },
      { title: 'Specialty Sodas', id: 'example3-specialty-soda', link: 'example3-specialty-soda' },
      { title: 'Utah Honey', id: 'example3-honey', link: 'example3-honey' },
    ],
  },
];
const example4Menu = [
  {
    // custom titleTagName so the default 'h2' doesn't get picked up by "On this page"
    titleTagName: 'div',
    header: 'Utah Foods',
    id: 'vertical-menu-example-3',
    menuItems: [
      {
        title: 'Main Dish',
        id: 'example4-main-dish',
        children: [
          { title: 'Dutch Oven', id: 'example4-dutch-oven', link: 'example4-dutch-oven' },
          { title: 'Funeral Potatoes', id: 'example4-funeral-potatoes', link: 'example4-funeral-potatoes' },
          { title: 'Green Jell-O', id: 'example4-jell-o', link: 'example4-jell-o' },
          { title: 'Pastrami Burgers', id: 'example4-pastrami-burgers', link: 'example4-pastrami-burgers' },
        ],
        childrenMenuType: childrenMenuTypes.FLYOUT,
      },
      {
        title: 'Side Dish',
        id: 'example4-side-dish',
        children: [
          { title: 'Fry Sauce', id: 'example4-fry-sauce', link: 'example4-fry-sauce' },
          { title: 'Ice Cream Shakes', id: 'example4-ice-cream-shake', link: 'example4-ice-cream-shake' },
          { title: 'Specialty Sodas', id: 'example4-specialty-soda', link: 'example4-specialty-soda' },
          { title: 'Utah Honey', id: 'example4-honey', link: 'example4-honey' },
        ],
        childrenMenuType: childrenMenuTypes.FLYOUT,
      },
    ],
  },
];

export function PopupsDocumentation() {
  const buttonRef = useRef(null);
  const button2Ref = useRef(null);
  const button3Ref = useRef(null);
  const button4Ref = useRef(null);
  const buttonEditorRef = useRef(null);
  const [popupsState, setPopupsState] = useImmer({
    example1: false,
    example2: false,
    example3: false,
    example4: false,
    editorExample: /** @type {boolean | null} */ (null),
  });

  useEffect(() => {
    // set the focus on the button or text input depending on visibility
    if (popupsState.editorExample === false) {
      document.getElementById('button-for-editor-example')?.focus();
    } else if (popupsState.editorExample) {
      document.getElementById('editor-example-textarea')?.focus();
    }
  }, [popupsState.editorExample]);

  return (
    <div className="documentation-content">
      <h1 id="h1-top">Popups</h1>
      <div className="lead-in">
        <p>
          Popups are non-modal boxes* that are triggered by some input from the end user (e.g. clicking a target, or key presses).
          When the popup is triggered, new content is displayed near the triggering element. The popup is elevated above the main content of the page.
        </p>
        <p>
          <em>
            *Differentiation: Modals are boxes containing content that disables the page content and focuses the user&apos;s attention on a single task
            or message. View more information on <Link to={pageUrls.modals}>modals</Link>.
          </em>
        </p>
      </div>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        defaultProps={{
          hasCloseButton: false,
          isVisible: false,
          placement: popupPlacement.BOTTOM,
          popupType: 'onClick',
        }}
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
              isVisible={!!popupsState.example1}
              onVisibleChange={(_e, isVisible) => setPopupsState((draftState) => { draftState.example1 = isVisible; })}
              placement={popupPlacement.BOTTOM}
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
              isVisible={!!popupsState.example2}
              onVisibleChange={(_e, isVisible) => setPopupsState((draftState) => { draftState.example2 = isVisible; })}
              placement={popupPlacement.TOP}
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
              To close the popup you may use an icon button, toggle the action button, click outside of the popup, or mash the <code>escape</code> key.
            </li>
            <li>Typically these should not interfere with the users ability to continue their work.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Popup Menu"
        renderedExample={(
          <div>
            <button
              aria-controls="popups-example-render-popup"
              aria-expanded={!!popupsState.example3}
              aria-haspopup="dialog"
              id="popups-example-render-button"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setPopupsState((draftState) => { draftState.example3 = !draftState.example3; });
              }}
              ref={button3Ref}
              type="button"
            >
              Open Plain Menu...
            </button>
            <Popup
              ariaLabelledBy="popups-example-render-button"
              id="popups-example-render-popup"
              isVisible={!!popupsState.example3}
              // eslint-disable-next-line no-param-reassign
              onVisibleChange={(_e, newIsVisible) => setPopupsState((draftState) => { draftState.example3 = newIsVisible; })}
              referenceElement={button3Ref}
              role="dialog"
            >
              <VerticalMenu menus={example3Menu} />
            </Popup>
          </div>
        )}
        quickTips={(
          <ul>
            <li>A menu popup has a list of items, and possibly icon buttons, that the user can select.</li>
            <li>
              Avoid selection lists that have more than 15 options to choose from.
              Lists may not be visible on mobile screens if there are too many options.
            </li>
            <li>
              Close a popup menu by toggling the button, clicking outside of the popup, or mashing the <code>escape</code> key.
            </li>
          </ul>
        )}
      />
      <StaticExample
        title="Popup Menu with Flyout Popups"
        renderedExample={(
          <div>
            <button
              aria-controls="popups-example-render-popup"
              aria-expanded={!!popupsState.example4}
              aria-haspopup="dialog"
              id="popups-example-render-button"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setPopupsState((draftState) => { draftState.example4 = !draftState.example4; });
              }}
              ref={button4Ref}
              type="button"
            >
              Open Flyout Menu...
            </button>
            <Popup
              ariaLabelledBy="popups-example-render-button"
              id="popups-example-render-popup"
              isVisible={!!popupsState.example4}
              // eslint-disable-next-line no-param-reassign
              onVisibleChange={(_e, newIsVisible) => setPopupsState((draftState) => { draftState.example4 = newIsVisible; })}
              referenceElement={button4Ref}
              role="dialog"
            >
              <VerticalMenu menus={example4Menu} />
            </Popup>
          </div>
        )}
        quickTips={(
          <ul>
            <li>
              After a user hovers over a list item in the primary popup menu,
              a secondary flyout popup appears next to the primary popup with another item list.
            </li>
            <li>A chevron icon should be used to identify a list item that has a sub list of items for the user to choose from.</li>
            <li>Avoid using flyout menus as they are difficult for users with reduced dexterity and are difficult to use on mobile devices</li>
          </ul>
        )}
      />
      <StaticExample
        title="Popup Editor"
        renderedExample={(
          <>
            <button
              aria-controls="id-for-editorExample"
              aria-expanded={!!popupsState.editorExample}
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
              isVisible={!!popupsState.editorExample}
              onVisibleChange={(_e, isVisible) => setPopupsState((draftState) => { draftState.editorExample = isVisible; })}
              placement={popupPlacement.TOP}
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
              clicking outside of the popup, or mashing the <code>escape</code> key.
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
          one input consider using a <Link to={pageUrls.modals}>Modal</Link>.
        </li>
        <li>
          <strong>Users full attention required.</strong> Always use a <Link to={pageUrls.modals}>Modal</Link> if the user&apos;s full attention needs to be on a particular form
          or content section.
        </li>
        <li>
          <strong>Use a tooltip for one or two words.</strong> Consider using a tooltip if the information does not need a click to be dismissed
          and the content is limited to one or two words. View more information on <Link to={pageUrls.tooltips}>tooltips</Link>.
        </li>
      </ul>
      <h3 id="section-usability">Usability Guidance</h3>
      <h4>Style</h4>
      <ul className="mb-spacing">
        <li><strong>Hover above the content.</strong> A popup should overlap in front of other UI elements. View more information about <Link to={pageUrls.depthElevationShadows}>elevation</Link>.</li>
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
          <strong>Mobile experience.</strong> Avoid using flyout menus as they are difficult for users with reduced dexterity and are difficult to
          use on mobile devices.
        </li>
        <li>
          <strong>Easy to dismiss.</strong>Popups should be easily dismissible using a combination of an icon button,  clicking outside of the popup,
          or mashing the <code>escape</code> key.
        </li>
      </ul>
      <h3 id="section-accessibility">Accessibility</h3>
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
          Be sure the popup can be dismissed with the <code>Escape</code> key. Once dismissed, the user&apos;s focus should return to the element that spawned the
          popup.
        </li>
        <li>
          Keyboard shortcuts include:
          <ul>
            <li><code>Enter</code> key should open the popup</li>
            <li><code>Esc</code> key should dismiss the popup</li>
          </ul>
        </li>
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
        <li>Use popup menus sparingly. Too many popup menus can create noise in screen readers.</li>
      </ul>
      <h4 className="mb-spacing">Aria Examples</h4>

      <h5>Popup Dialog</h5>
      <PreCodeForCodeString className="gray-block" codeRaw={PopupExampleAriaDialog} />

      <h5>Popup Menu</h5>
      <PreCodeForCodeString className="gray-block" codeRaw={PopupExampleAriaMenu} />

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="popups-props-css">
          <TabList>
            <Tab id="popups-props-css">CSS</Tab>
            <Tab id="popups-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="popups-props-css">
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
            <TabPanel tabId="popups-props-react">
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
                      <TableCell><code className="primary-color">ariaLabelledBy</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>string</code>
                        </div>
                      </TableCell>
                      <TableCell><em>required</em></TableCell>
                      <TableCell>
                        The <code>id</code> of the element - typically a button - that controls the popup.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><code className="primary-color">children</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>React.ReactNode</code>
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
                        <code>number</code>
                        <span> | </span>
                        <code>&#123;mainAxis: number, crossAxis: number, alignmentAxis: number&#125;</code>
                      </TableCell>
                      <TableCell><code>&#123;mainAxis: 10, crossAxis: 0, alignmentAxis: 0&#125;</code></TableCell>
                      <TableCell>
                        Control the popup distance from its anchor.<br />
                        See <ExternalLink href="https://floating-ui.com/docs/offset">official documentation</ExternalLink>.
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
                      <TableCell>popupPlacement.BOTTOM</TableCell>
                      <TableCell>
                        The default placement of the popup. See the popupPlacement ENUM for the correct values to use.
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
                    <TableRow>
                      <TableCell><code className="primary-color">role</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>dialog</code>
                          <code>grid</code>
                          <code>listbox</code>
                          <code>menu</code>
                          <code>tree</code>
                        </div>
                      </TableCell>
                      <TableCell><em>required</em></TableCell>
                      <TableCell>
                        For accessibility purposes. <ExternalLink href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles'>See more</ExternalLink>.
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
