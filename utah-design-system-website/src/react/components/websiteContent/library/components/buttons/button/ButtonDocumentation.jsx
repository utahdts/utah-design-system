/* eslint-disable max-len */
import {
  Button,
  formElementSizesEnum,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  useBanner
} from '@utahdts/utah-design-system';
import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { pageUrls } from '../../../../../routing/pageUrls';
import { SandboxExample } from '../../../../../sandbox/SandboxExample';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import { ButtonCssClassesDocumentation } from './ButtonCssClassesDocumentation';
import { ButtonPropsDocumentation } from './ButtonPropsDocumentation';
import { ButtonExampleCodeReact } from './ButtonExampleCodeReact';
import { ButtonExampleProps } from './ButtonExampleProps';
import { ButtonExampleRender } from './ButtonExampleRender';

export function ButtonDocumentation() {
  const { addBanner } = useBanner();
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Button</h1>
      <p className="lead-in">A <code>&lt;button&gt;</code> element is a clickable component that triggers an action.</p>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        defaultProps={{
          appearance: 'outlined',
          className: '',
          color: 'none',
          iconLeft: 'none',
          iconRight: 'none',
          id: 'button-sandbox-example-id',
          isBusy: false,
          isDisabled: false,
          size: 'medium',
          title: 'Button Title',
          type: 'button',
        }}
        CODE_EXAMPLE={ButtonExampleCodeReact}
        PROPS_EXAMPLE={ButtonExampleProps}
        RENDER_EXAMPLE={ButtonExampleRender}
      />
      <StaticExample
        title="Emphasized Button (Solid)"
        renderedExample={(
          <>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => addBanner({ message: 'Primary emphasized button clicked' }), [addBanner])}
            >
              Primary Color
            </Button>
            <Button
              appearance="solid"
              color="secondary"
              onClick={useCallback(() => addBanner({ message: 'Secondary emphasized button clicked' }), [addBanner])}
            >
              Secondary Color
            </Button>
            <Button
              appearance="solid"
              color="accent"
              onClick={useCallback(() => addBanner({ message: 'Accent emphasized button clicked' }), [addBanner])}
            >
              Accent Color
            </Button>
            <Button
              appearance="solid"
              onClick={useCallback(() => addBanner({ message: 'Default emphasized button clicked' }), [addBanner])}
            >
              No Color
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>Used to emphasize a button when multiple buttons appear on a page or in close proximity.</li>
            <li>Limit the number of emphasized buttons in a view to ensure your button emphasis isn&apos;t diluted</li>
            <li>When used in proximity to other buttons:
              <ul>
                <li>Should appear on the right.</li>
              </ul>
            </li>
            <li>Solid color.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Unemphasized Button (Outlined)*"
        renderedExample={(
          <>
            <Button
              color="primary"
              onClick={useCallback(() => addBanner({ message: 'Primary unemphasized  button clicked' }), [addBanner])}
            >
              Primary Color
            </Button>
            <Button
              appearance="outlined"
              color="secondary"
              onClick={useCallback(() => addBanner({ message: 'Secondary unemphasized  button clicked' }), [addBanner])}
            >
              Secondary Color
            </Button>
            <Button
              appearance="outlined"
              color="accent"
              onClick={useCallback(() => addBanner({ message: 'Accent unemphasized  button clicked' }), [addBanner])}
            >
              Accent Color
            </Button>
            <Button
              appearance="outlined"
              onClick={useCallback(() => addBanner({ message: 'Unemphasized button clicked' }), [addBanner])}
            >
              No Color
            </Button>
          </>
        )}
        quickTips={(
          <>
            <ul>
              <li>Used to de-emphasize a button. This is the default look of a button.</li>
              <li>When used in proximity to other buttons:
                <ul>
                  <li>Should appear on the left of an emphasized button.</li>
                </ul>
              </li>
              <li>Solid outline. Text matches the button color.</li>
            </ul>
            <p className="mt-spacing">* This is the default appearance of a button.</p>
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
              onClick={useCallback(() => addBanner({ message: 'Cancel button clicked' }), [addBanner])}
            >
              Cancel
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => addBanner({ message: 'Okay button clicked' }), [addBanner])}
            >
              Okay
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>When two or more buttons are in close proximity, and you wish to have an emphasized button:
              <ul>
                <li>The emphasized button will appear on the right.</li>
                <li>One or more unemphasized buttons will appear on the left.</li>
                <li>If you wish to use more than 3 buttons in proximity, consider grouping them depending on their context.
                </li>
              </ul>
            </li>
          </ul>
        )}
      />

      <StaticExample
        title="With Icon"
        renderedExample={(
          <>
            <Button
              appearance="outlined"
              color="primary"
              iconLeft={<span className="utds-icon-before-check" aria-hidden="true" />}
              onClick={useCallback(() => addBanner({ message: '`Left Icon` button clicked' }), [addBanner])}
            >
              Button
            </Button>
            <Button
              appearance="solid"
              color="primary"
              iconRight={<span className="utds-icon-before-arrow-right" aria-hidden="true" />}
              onClick={useCallback(() => addBanner({ message: '`See More` button clicked' }), [addBanner])}
            >
              See More
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>An icon can be used on the left or the right.</li>
            <li>It is is preferred that you only use a single icon per button.</li>
            <li>An icon should be simple and change color with the button text.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Sizes"
        renderedExample={(
          <>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => addBanner({ message: 'Small button clicked' }), [addBanner])}
              size={formElementSizesEnum.SMALL1X}
            >
              Small 1X
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => addBanner({ message: 'Small button clicked' }), [addBanner])}
              size={formElementSizesEnum.SMALL}
            >
              Small
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => addBanner({ message: 'Medium button clicked' }), [addBanner])}
              size={formElementSizesEnum.MEDIUM}
            >
              Medium
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => addBanner({ message: 'Large button clicked' }), [addBanner])}
              size={formElementSizesEnum.LARGE}
            >
              Large
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => addBanner({ message: '`large1x` button clicked' }), [addBanner])}
              size={formElementSizesEnum.LARGE1X}
            >
              Large 1X
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>The preferred button size is the default (medium).</li>
            <li>Do not mix buttons of different sizes in close proximity.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Busy"
        renderedExample={(
          <Button
            appearance="solid"
            color="primary"
            onClick={useCallback(() => addBanner({ message: 'Medium button clicked' }), [addBanner])}
            size={formElementSizesEnum.MEDIUM}
            isBusy
          >
            Submit Now
          </Button>
        )}
        quickTips={(
          <ul>
            <li>Use a busy button state to indicate to the user that some asynchronous process is taking place.</li>
            <li>Do not use more than one busy button per view.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Enabled/Disabled"
        renderedExample={(
          <>
            <Button
              color="primary"
              onClick={useCallback(() => addBanner({ message: 'Medium button clicked' }), [addBanner])}
              size={formElementSizesEnum.MEDIUM}
            >
              Cancel
            </Button>
            <Button
              appearance="solid"
              color="primary"
              onClick={useCallback(() => addBanner({ message: 'Medium button clicked' }), [addBanner])}
              size={formElementSizesEnum.MEDIUM}
              isDisabled
            >
              Submit
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>Disabled buttons do not allow user interaction.</li>
            <li>Disabled buttons are visually grayed out.</li>
            <li>Use the built-in attribute disabled to disable a button.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Hover"
        renderedExample={(
          <>
            <Button
              color="secondary"
              onClick={useCallback(() => addBanner({ message: 'Medium button clicked' }), [addBanner])}
              size={formElementSizesEnum.MEDIUM}
            >
              Hover Me
            </Button>
            <Button
              appearance="solid"
              color="secondary"
              onClick={useCallback(() => addBanner({ message: 'Medium button clicked' }), [addBanner])}
              size={formElementSizesEnum.MEDIUM}
            >
              Hover Me
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>Hover is the state when a pointing cursor enters the button boundary.</li>
            <li>The hover state changes from the normal state to provide the user with a visual cue.</li>
          </ul>
        )}
      />

      <StaticExample
        title="Pressed"
        renderedExample={(
          <>
            <Button
              color="primary"
              className="button--active"
              onClick={useCallback(() => addBanner({ message: 'Medium button clicked' }), [addBanner])}
              size={formElementSizesEnum.MEDIUM}
            >
              Pressed
            </Button>
            <Button
              appearance="solid"
              color="primary"
              className="button--active"
              onClick={useCallback(() => addBanner({ message: 'Medium button clicked' }), [addBanner])}
              size={formElementSizesEnum.MEDIUM}
            >
              Pressed
            </Button>
          </>
        )}
        quickTips={(
          <ul>
            <li>The button produces a visual cue that it is being pressed.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Buttons are for actions.</strong> Use a button to indicate an action.</li>
        <li>
          <strong>Emphasize buttons.</strong> Choose a button style that will give the desired emphasis to the action:
          <ul>
            <li>Important actions should be emphasized (solid button) to stand out from other actions on the view or in the immediate area.</li>
            <li>You can further emphasize buttons with size and color.</li>
          </ul>
        </li>
        <li>
          <strong>Navigation buttons.</strong> If a <code>&lt;button&gt;</code> must be used for navigation, you are required to implement the
          following ARIA properties:<br />
          <em>
            (Note: Where possible, it is recommended that you use a native <code>&lt;a&gt;</code> element rather than the link role,
            as native elements are more widely supported by user agents and assistive technology.)
          </em>
          <ul>
            <li>Use <code>role=&quot;link&quot;</code>.</li>
            <li>Use the <code>tabindex</code> attribute with a value of <code>0</code> to ensure the link is in the correct tab focus order.</li>
            <li>You will need to style a button to appear as a link where needed.</li>
            <li>Example: <code>&lt;button type=&quot;button&quot; role=&quot;link&quot; tabindex=&quot;0&quot;&gt;My Button&lt;/button&gt;</code></li>
          </ul>
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Navigation.</strong> Generally, use a link for navigation, especially when there are other action buttons in the view.</li>
        <li><strong>Paragraph navigation.</strong> Always use a link for navigation within a paragraph of text.</li>
        <li>
          <strong>Style a link as a button:</strong>
          <ul>
            <li>
              Use the button style if it also includes a visual indicator such as an arrow icon.
              For example <code>Read More <span className="utds-icon-before-arrow-right icon" aria-hidden="true" /></code>.
            </li>
            <li>Use the button style for a call to action. For example, <code>Register Now <span className="utds-icon-before-arrow-right icon" aria-hidden="true" /></code>.</li>
          </ul>
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Keep button text short.</strong> Use action words to describe what the button will do.</li>
        <li><strong>Use Title Case capitalization.</strong>{' '}
          Such as, Download, View More, Sign In, or Sign Out.
        </li>
        <li>
          <strong>Lead with a verb.</strong> Make the first word of the button&apos;s text a verb.
          For example, instead of Information Request, label the button Request Information.
        </li>
        <li><strong>Icons help provide clarity.</strong> Use icons in a button to help describe the action.</li>
        <li><strong>Avoid using too many buttons in a view.</strong> Too many buttons will cause confusion and distraction.</li>
        <li><strong>Icon Buttons.</strong> Consider using an <NavLink to={pageUrls.iconButton}>Icon Button</NavLink> in compact layouts.</li>
        <li><strong>Always set the type attribute to define the purpose of the button.</strong> The type attribute
          can accept three values: submit, button, and reset.
          If no type attribute is defined, the button will behave as a submit button.
        </li>
        <li><strong>Avoid stacking.</strong> Generally, avoid stacking one button on top of another. Place them side-by-side if there is room.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>The button boundary (the outside edge of the button) must maintain a <code>3:1</code> contrast ratio or better.</li>
        <li>The button text must maintain a <code>4.5:1</code> contrast ratio or better.</li>
        <li>The button&apos;s focus state should be <code>3:1</code> contrast ratio.</li>
      </ul>
      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>The button must receive focus when the user presses the <code>Tab</code> key.
          <ul>
            <li>Buttons natively receive keyboard focus so there&apos;s no need to add a tabindex attribute.</li>
          </ul>
        </li>
        <li>You should be able to press the button by using the <code>Enter</code> or <code>Space</code> key.</li>

      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          Avoid using non-standard html markup for a button such as a div tag.
          <ul>
            <li>Remember: The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!</li>
            <li>When you must use ARIA use the following:
              <ul>
                <li>Use the <code>role=&quot;button&quot;</code> attribute.</li>
                <li>Use <code>tabindex=&quot;0&quot;</code>.</li>
                <li>Provide a focus state that matches the rest of focusable components.</li>
                <li>Provide event handlers for <code>click</code> and <code>keydown</code> events.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>A Button that contains an icon that adds additional information, the icon should have non-empty <code>alt</code> text or <code>aria-label</code>.</li>
      </ul>

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="button-props-css">
          <TabList>
            <Tab id="button-props-css">CSS</Tab>
            <Tab id="button-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="button-props-css">
              <ButtonCssClassesDocumentation />
            </TabPanel>

            <TabPanel tabId="button-props-react">
              <ButtonPropsDocumentation />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
