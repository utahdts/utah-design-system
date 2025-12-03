/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { ExternalLink, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@utahdts/utah-design-system';
import { PreCodeForCodeString } from '../../../../../preCode/PreCodeForCodeString';
import { pageUrls } from '../../../../../routing/pageUrls';
import { StaticExample } from '../../../../../staticExamples/StaticExample';
import { SandboxExample } from '../../../../../sandbox/SandboxExample';
import { TabGroupExampleRender } from './TabGroupExampleRender';
import { TabGroupExampleProps } from './TabGroupExampleProps';
import { TabGroupExampleCodeReact } from './TabGroupExampleCodeReact';
import { TabGroupCssClassesDocumentation } from './TabGroupCssClassesDocumentation';
import { TabGroupPropsDocumentation } from './TabGroupPropsDocumentation';

export function TabGroupDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Tab Group</h1>
      <p className="lead-in">A tab group lets a user navigate through a set of related content, showing only one piece of content at a time.</p>

      <hr />

      <h2 id="section-example">Example</h2>
      <SandboxExample
        componentClassName="sandbox-example__component--outline"
        defaultProps={{
          isVertical: false,
          panelA: 'Here is the first panel.',
          panelB: 'Here is the second panel.',
          selectedTab: 'tab-A',
          tabA: 'Tab A',
          tabB: 'Tab B',
        }}
        RENDER_EXAMPLE={TabGroupExampleRender}
        PROPS_EXAMPLE={TabGroupExampleProps}
        CODE_EXAMPLE={TabGroupExampleCodeReact}
      />
      <StaticExample
        title="Tab Group"
        className="static-example--blank"
        renderedExample={(
          <div className="static-example--outline">
            <TabGroup defaultValue="button-css">
              <TabList>
                <Tab id="button-css">CSS</Tab>
                <Tab id="button-react">React</Tab>
              </TabList>
              <TabPanels>
                <TabPanel tabId="button-css">
                  Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup
                  language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.<br />
                  <ExternalLink href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS">Learn more</ExternalLink>
                </TabPanel>
                <TabPanel tabId="button-react">
                  React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by
                  Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered
                  applications with frameworks like Next.js.<br />
                  <ExternalLink href="https://react.dev/">Learn more</ExternalLink>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        )}
        quickTips={(
          <div>
            A tab group is composed of:
            <ul>
              <li>List headers (or tab list)</li>
              <li>Tabs (controls)</li>
              <li>A panel displaying the active tab (content)</li>
            </ul>
          </div>
        )}
      />

      <StaticExample
        title="Vertical Tab Group"
        className="static-example--blank"
        renderedExample={(
          <div className="static-example--outline">
            <TabGroup defaultValue="vertical-button-css" isVertical>
              <TabList>
                <Tab id="vertical-button-css">CSS</Tab>
                <Tab id="vertical-button-react">React</Tab>
              </TabList>
              <TabPanels>
                <TabPanel tabId="vertical-button-css">
                  Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup
                  language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.<br />
                  <ExternalLink href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS">Learn more</ExternalLink>
                </TabPanel>
                <TabPanel tabId="vertical-button-react">
                  React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by
                  Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered
                  applications with frameworks like Next.js.<br />
                  <ExternalLink href="https://react.dev/">Learn more</ExternalLink>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Context.</strong> Use a tab group to organize large sets of related information in a more condensed format.</li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Too many tabs.</strong> If a tab group has too many tabs, consider reducing the amount of content, using
          an <Link to={pageUrls.accordion}>accordion</Link> or
          simply displaying the content on the page.
        </li>
        <li>
          <strong>Navigation.</strong> Do not use a tab group as navigation. Instead, consider using
          a <Link to={pageUrls.sidePanelNavigation}>side panel</Link> or
          a <Link to={pageUrls.stepIndicator}>step indicator</Link>.
        </li>
        <li>
          <strong>Comparison.</strong> If the user needs to compare content between tabs, consider displaying the content on the page. A tab group
          only displays
          one panel at a time, making comparing difficult.
        </li>
        <li>
          <strong>Cognitive load.</strong> Remember that a tab group hides content and thereby increases the cognitive load of the user.
        </li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li>
          <strong>Clear labels.</strong> Tab labels should indicate to the user the content contains.
        </li>
        <li>
          <strong>Order tabs.</strong> The first tab should be the most useful to the user or show the most popular content.
        </li>
        <li>
          <strong>Avoid wrapping.</strong> If a tab group has too many tabs, consider removing some content. Keeping tabs on a single line helps the
          user associate tabs to their panel.
        </li>
        <li>
          <strong>Mobile.</strong> For mobile users, consider using an overflow for the tab list. Make sure to use an indicator, such as an arrow or
          chevron, to
          show the user that some content is hidden.
        </li>
        <li>
          <strong>Do not disable tabs.</strong> Remove them instead.
        </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Tabs labels must maintain a <code>4.5:1</code> contrast ratio against the background.</li>
        <li>Make sure the active tab indicator is distinguishable from other tabs and is <code>3:1</code> contrast ratio.</li>
        <li>For content within panels, please refer to the respective component documentation.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>
          When the user hits the <code>Tab</code> key to navigate to the tab group, the focus should be placed on the active tab.
        </li>
        <li>
          Hitting <code>Tab</code> after focus has been placed on the active tab will move the focus to the next interactive element
          outside the tab list (whether it be inside a tab panel or outside the tab group).
        </li>
        <li>
          Once the focus is on a tab, using the <code>left</code> and <code>right</code> arrow keys will navigate to the previous or next tab.
        </li>
        <li>
          If the tab group is vertically aligned, using the <code>up</code> and <code>down</code> arrow keys will navigate to the previous or next
          tab.
        </li>
        <li>
          It is recommended that tabs activate automatically following focus. If not, hitting the <code>Spacebar</code> or <code>Enter</code> should
          activate the tab and display the panel associated with it.
        </li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>The tab list should include <code>role=&quot;tablist&quot;</code>.</li>
        <li>Each tab should be a <code>&lt;button&gt;</code> element and include <code>role=&quot;tab&quot;</code>.</li>
        <li>Each tab panel content area should include <code>role=&quot;tabpanel&quot;</code>.</li>
        <li>If the tab group has a label, the tab list should include <code>aria-labelledby</code> referencing the label element. Otherwise,
          use <code>aria-label</code>.
        </li>
        <li>If the tab list is vertical, give the tab group <code>aria-orientation=&quot;vertical&quot;</code>.</li>
        <li>Each tab should include <code>aria-controls</code> referring to their respective tab panel.</li>
        <li>The active tab should include <code>aria-selected=&quot;true&quot;</code> while the other tabs
          have <code>aria-selected=&quot;false&quot;</code>.
        </li>
        <li>The inactive tab buttons should have <code>tab-index=&quot;-1&quot;.</code></li>
        <li>Each tab panel should include <code>aria-labelledby</code> set to its respective tab.</li>
      </ul>

      <h2 id="section-code-example">Code Example</h2>
      <PreCodeForCodeString
        allowScrollOverflow
        showBackgroundColor
        codeRaw={`
          <div>
            <h3 id="tablist-label">
              Technology
            </h3>
            <div role="tablist" aria-labelledby="tablist-label">
              <button
                id="tab-1"
                type="button"
                role="tab"
                aria-selected="true"
                aria-controls="tabpanel-1"
              >
                HTML
              </button>
              <button
                id="tab-2"
                type="button"
                role="tab"
                tab-index="-1"
                aria-selected="false"
                aria-controls="tabpanel-2"
              >
                React
              </button>
            </div>
            <div
              id="tabpanel-1"
              role="tabpanel"
              aria-labelledby="tab-1"
            >
              <p>Here goes the content of the first panel.</p>
            </div>
            <div
              id="tabpanel-2"
              role="tabpanel"
              aria-labelledby="tab-2"
              class="visually-hidden"
            >
              <p>Here goes the content of the second panel.</p>
            </div>
          </div>
        `}
      />
      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="tab-group-props-css">
          <TabList>
            <Tab id="tab-group-props-css">CSS</Tab>
            <Tab id="tab-group-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="tab-group-props-css">
              <TabGroupCssClassesDocumentation />
            </TabPanel>
            <TabPanel tabId="tab-group-props-react">
              <TabGroupPropsDocumentation />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
