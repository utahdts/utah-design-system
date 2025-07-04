/* eslint-disable max-len */
import {
  ExternalLink,
  ICON_BUTTON_APPEARANCE, IconButton, popupPlacement, Tab, TabGroup, TabList, TabPanel, TabPanels, useBanner
} from '@utahdts/utah-design-system';
import { Link } from 'react-router-dom';
import { PreCodeForCodeString } from '../../../../preCode/PreCodeForCodeString';
import { pageUrls } from '../../../../routing/pageUrls';
import { SandboxExample } from '../../../../sandbox/SandboxExample';
import { StaticExample } from '../../../../staticExamples/StaticExample';
import { TooltipsExampleCodeReact } from './TooltipsExampleCodeReact';
import { TooltipsExampleProps } from './TooltipsExampleProps';
import { TooltipsExampleRender } from './TooltipsExampleRender';
import { TooltipsCssClassesDocumentation } from './TooltipsCssClassesDocumentation';
import { TootltipsPropsDocumentation } from './TootltipsPropsDocumentation';

export function TooltipsDocumentation() {
  const { addBanner } = useBanner();
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Tooltips</h1>
      <p className="lead-in">Tooltips are floating labels to describe or add additional information when users hover over or focus on an interactive
        element. Use sparingly.
      </p>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        defaultProps={{
          isPopupVisible: false,
          offsetDistance: '0',
          offsetSkidding: '5',
          placement: popupPlacement.BOTTOM,
          popupText: 'Now you see me',
        }}
        RENDER_EXAMPLE={TooltipsExampleRender}
        PROPS_EXAMPLE={TooltipsExampleProps}
        CODE_EXAMPLE={TooltipsExampleCodeReact}
      />
      <div className="home-page__color-card home-page__card-wide mb-spacing-l">
        <h3 className="home-page__color-card-title flex mb-spacing-xs"><span className="utds-icon-before-info mr-spacing-xs" aria-hidden="true" /> Note
        </h3>
        <p>
          Starting with version <code className="color-picker--light">4.0.0</code>, the Design System uses <code className="color-picker--light">@floating-ui/react-dom</code>.
        </p>
        <p>
          The offset property has been updated accordingly. You will need to make the following changes:
        </p>
        <PreCodeForCodeString
          className="gray-block color-picker--light my-spacing"
          codeRaw={`// Before
offset: [0, 10]

// Now
offset: {
  mainAxis: 10,
  crossAxis: 0
}`}
        />
        See <ExternalLink href="https://floating-ui.com/docs/offset">official documentation</ExternalLink>.
      </div>
      <StaticExample
        title="Tooltip Example"
        renderedExample={(
          <>
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              onClick={() => addBanner({
                message: 'Triggered the gear icon button',
                position: 'top-right',
              })}
              title="Gear icon button"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-plus" aria-hidden="true" />)}
              onClick={() => addBanner({
                message: 'Triggered the plus icon button',
                position: 'top-right',
              })}
              title="Plus icon button"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-bookmark" aria-hidden="true" />)}
              onClick={() => addBanner({
                message: 'Triggered the bookmark icon button',
                position: 'top-right',
              })}
              title="Bookmark icon button"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-help" aria-hidden="true" />)}
              onClick={() => addBanner({
                message: 'Triggered the help icon button',
                position: 'top-right',
              })}
              title="Help icon button"
            />
          </>
        )}
        quickTips={(
          <ul>
            <li>Tooltips typically appear below their parent, unless there isn&apos;t space.</li>
            <li>The tooltip will have a short delay when you hover.</li>
            <li>If the hover delay has elapsed, all tooltips instantly pop until hover is lost for a period of time.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul>
        <li><strong>Enhance Confidence</strong>: Use tooltips to increase certainty about an interaction.</li>
        <li><strong>Interactive Elements</strong>: Use for icon-only buttons, text links (e.g. Opens in a new tab) or for a button with an associated
          keyboard shortcut.
        </li>
        <li><strong>Brief Descriptions</strong>: Tooltips should be short and descriptive.</li>
        <li><strong>Insufficient Space</strong>: Use when the description content would be too much information to include inline or create too much
          clutter.
        </li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>Redundant Text</strong>: Don&apos;t use tooltips to restate visible UI text.</li>
        <li><strong>Critical Information</strong>: To communicate critical information, including errors in forms or other interaction feedback.
          Consider using <Link to={pageUrls.modals}>Modals</Link>.
        </li>
        <li><strong>Avoid Links and Buttons</strong>: As tooltips only surface from a hover, never include links or buttons in the copy. If your
          tooltip requires either of these, consider putting your content in a <Link to={pageUrls.popups}>Popup</Link>.
        </li>
        <li><strong>Keep it Brief</strong>: Good tooltips contain concise and helpful information. Keep it short (we recommend no more than 5 words
          max). If you need more space, consider using a <Link to={pageUrls.popups}>Popup</Link>.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>Tooltips are used to provide additional information when space is tight.</li>
        <li>Tooltips must be concise with one line of text.</li>
        <li>Tooltips must be accessed via hover and focus only.</li>
        <li>Use tooltips on Interactive elements (Buttons, Links, Icon buttons) or Non-interactive elements (Icons, Abbreviations, Truncated text) —
          be mindful of keyboard accessibility.
        </li>
        <li>Use sparingly. Tooltips innately hide information. Consider exposing it immediately without a tooltip or removing it completely. If
          you&apos;re building something that requires a lot of tooltips, work on clarifying the design and the language in the experience.
        </li>
        <li>Never include any kind of error messages in a tooltip.</li>
        <li>Tooltips have slightly different guidelines to Popups and Modals. For more information, see
          <Link to={pageUrls.popups}>Popup</Link> and <Link to={pageUrls.modals}>Modals</Link> guidelines.
        </li>
        <li>If the information is crucial for a user to proceed, consider using a modal or inline notification instead.</li>
        <li>The anatomy of a tooltip is made up of a container, description and arrow.
          <ul>
            <li>They do not include a title or heading. If you need to include a title, use a Popup.</li>
          </ul>
        </li>
        <li>A tooltip is connected to a trigger element, such as a button or icon, that shows the tooltip when the interactive trigger element is
          hovered or focused. (More details below.)
        </li>
        <li>Tooltip arrows are positioned to any side of the container, depending on available space within the browser viewport.
          <ul>
            <li>The arrow always points to the trigger element</li>
          </ul>
        </li>
        <li>Needs to be discoverable:
          <ul>
            <li>E.g. an icon.</li>
            <li>Avoid triggering tooltips from text that excludes a visual indicator (e.g. underline, dashed-underline, or icon)</li>
          </ul>
        </li>
        <li>Only trigger tooltips from:
          <ul>
            <li>Interactive Elements
              <ul>
                <li>Buttons</li>
                <li>Links</li>
                <li>Icon Buttons</li>
              </ul>
            </li>
            <li>
              Non-interactive elements (be mindful of keyboard accessibility):
              <ul>
                <li>Icons</li>
                <li>Abbreviations (e.g. dashed underlined text for HRIS that shows a tooltip that says Human Resource Information System)</li>
                <li>Truncated text</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Only show one tooltip at a time.</li>
      </ul>

      <h3 id="section-behavior-and-animation" className="mb-spacing">Behavior and Animation</h3>
      <ul className="mb-spacing">
        <li>By default, the tooltip&apos;s arrow centers to the trigger. The arrow may shift left, right, up, down depending on available space
          between trigger and viewport.
        </li>
        <li>By default, a Tooltip drops down from the trigger point, by slide fading towards the bottom of the screen away from the trigger point.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <p>Preferred Method</p>
      <ul className="mb-spacing">
        <li>Information contained in the tooltip should always be visible to the screen reader via visually hidden text,
          an <code>aria-label</code>, <code>aria-labelledby</code>, or <code>aria-describedby</code>.
        </li>
        <li>It is unnecessary to hide information from the screen reader in this instance unless it creates confusion for the user.</li>
      </ul>

      <p>If you must use a tooltip for a screen reader do the following:</p>
      <ul className="mb-spacing">
        <li>Tooltips contain limited content so we can use an announcer to announce tooltip content to people using screen readers e.g. using an ARIA
          live region.
        </li>
        <li>A tooltip&apos;s trigger should be focusable, the tooltip should show on focus and hide on blur.</li>
        <li>Use <code>aria-hidden=&quot;true&quot;</code> to prevent screen readers from reading hidden tooltips. Change value
          to <code>false</code> when tooltip is visible.
        </li>
        <li>Tooltip trigger element should have an <code>aria-describedby</code> attribute which references to the <code>id</code> of the associated
          tooltip.
        </li>
        <li>By default, tooltips use <code>role=&quot;tooltip&quot;</code></li>
      </ul>

      <p>Tooltip is used for the <code>aria-labelledby</code>:</p>
      <PreCodeForCodeString
        className="gray-block"
        codeRaw={`<Button aria-labelledby="myTooltip">Blergh</Button>
<Tooltip id="myTooltip">My text</Tooltip>`}
      />

      <p>Hidden Tooltip because the accessible text is already there:</p>
      <PreCodeForCodeString
        className="gray-block"
        codeRaw={`<Button class="icon-button" data-tooltip="Something"><span className="visually-hidden">Description</span></Button>
<Tooltip id="myTooltip" aria-hidden>Description</Tooltip>`}
      />

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="tooltips-props-css">
          <TabList>
            <Tab id="tooltips-props-css">CSS</Tab>
            <Tab id="tooltips-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="tooltips-props-css">
              <TooltipsCssClassesDocumentation />
            </TabPanel>
            <TabPanel tabId="tooltips-props-react">
              <TootltipsPropsDocumentation />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
