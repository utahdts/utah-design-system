/* eslint-disable max-len */
import {
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
import SandboxExample from '../../../../../sandbox/SandboxExample';
import StaticExample from '../../../../../staticExamples/StaticExample';
import BadgesExampleCodeReact from './BadgesExampleCodeReact';
import BadgesExampleProps from './BadgesExampleProps';
import BadgesExampleRender from './BadgesExampleRender';

/* eslint-disable react/jsx-one-expression-per-line */
const propTypes = {};
const defaultProps = {};

function BadgesDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Badges</h1>
      <p className="lead-in">Badges convey dynamic information, such as counts or status. A badge can include labels or numbers.</p>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        CODE_EXAMPLE={BadgesExampleCodeReact}
        PROPS_EXAMPLE={BadgesExampleProps}
        RENDER_EXAMPLE={BadgesExampleRender}
      />
      <StaticExample
        title="Emphasized Badges (Solid)"
        renderedExample={(
          <div>I am not a badge</div>
        )}
        quickTips={(
          <ul>
            <li>All your badges are belong to us.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <p>
        <code>Badges</code> are used to indicate a notification, item count, or other information relating to a navigation destination.
        Typically they are placed on the upper right corner of a component such as an <code>icon button</code>.
      </p>

      <p>There are two types of <code>badges</code>:</p>
      <ol>
        <li><strong>Small Badge (shape only, no characters)</strong>: A <code>small badge</code> is a simple circle, used to indicate a status change or an unread notification.</li>
        <li><strong>Large Badge (usually contain numbers)</strong>: A <code>large badge</code> may contain numbers communicating item count information.</li>
      </ol>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>If not alerting a customer to a notification change</strong>: <code>Badges</code> should be used to alert the user to a status change or unread notifications.</li>
        <li><strong>It creates a conflict with another icon</strong>: If the <code>badge</code> overpowers the <code>icon</code> or creates confusion, consider changing the icon or icon size. Avoid using <code>icons</code> that look similar to <code>badges</code>.</li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Convey dynamic information with navigation</strong>:  Use <code>badges</code> with navigation items to convey dynamic information associated with that destination.</li>
        <li><strong>Recommended Sizing</strong>:
          <ul>
            <li>Small <code>badges</code> should be smaller than large <code>badges</code> since they contain no information</li>
            <li>Large <code>badge</code> should be large enough for the information to be readable.</li>
            <li>Use a <code>+</code> to indicate a count greater than the available character count.
              <ul>
                <li>e.g. <code>9+</code>, <code>99+</code>, <code>999+</code></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Most commonly used with</strong>: <code>Badges</code> are most commonly used within other components, such as <code>icon buttons</code>, <code>navigation elements</code>, and <code>tabs</code>.</li>
        <li><strong>Badge proximity</strong>: Keep the <code>badge</code> in close proximity to its parent element. When space permits, place the <code>badge</code> inside the parent element on the right side. (e.g. a <code>navigation list item</code> or <code>regular button</code>)</li>
        <li><strong>Maximum character count</strong>: Ensure that <code>badge labels</code> don&apos;t extend too far beyond the <code>badge container</code>. Typically don&apos;t use more than 4 characters.</li>
        <li><strong>Avoid changing the position</strong>: <code>Badges</code> have fixed positions. Generally, don&apos;t change the position of the <code>badge</code> arbitrarily or place the <code>badge</code> directly over the parent component.</li>
        <li><strong>Hide badge when acknowledged</strong>: When a <code>badge</code> is used to indicate an unread notification, the <code>badge</code> gets hidden once it has been viewed or acknowledged by the user. </li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li><code>Badges</code> use a color intended to stand out against <code>labels</code>, <code>icons</code>, and <code>navigation elements</code>. Typically use the default color mapping (<code>red</code>) to avoid color conflict issues. You may use other colors to convey different meanings.</li>
        <li>The majority of the <code>badge boundary</code> must maintain a <code>3:1</code> contrast between its surrounding elements.</li>
        <li>The <code>badge text</code> must maintain a <code>4.5:1</code> contrast inside the badge.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li><code>Badges</code> are most commonly used within other components, such as <code>icon buttons</code>, <code>navigation elements</code>, and <code>tabs</code>. They rarely, if ever, receive keyboard focus.</li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>The accessibility label for a <code>badge item</code> will be read after its navigation destination or button label. (e.g. <code>Alerts, 1 unread alert</code>; <code>News, 5 new news items</code>)</li>
        <li>Large <code>badges</code> will have their text read. Additional contextual information visible only to the screen reader may be required to provide context.
          <ul>
            <li>Good: <code>12 Unread Messages</code>; <code>5 Unread Alerts</code></li>
            <li>Bad: <code>12</code>; <code>5</code></li>
          </ul>
        </li>
        <li>Small <code>badges</code> will simply announce <code>new notification</code> or <code>notifications available</code>.</li>
      </ul>

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="badge-props-css">
          <TabList>
            <Tab id="badge-props-css">CSS</Tab>
            <Tab id="badge-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="badge-props-css">
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
                      <TableCell><code>.badge</code></TableCell>
                      <TableCell>The base css class for a badge.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </TabPanel>

            <TabPanel tabId="badge-props-react">
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
                        <TableCell><code className="primary-color">appearance</code></TableCell>
                        <TableCell>
                          <div className="props-code-wrapper">
                            <code>&apos;solid&apos;</code>
                            <span> | </span>
                            <code>&apos;outlined&apos;</code>
                          </div>
                        </TableCell>
                        <TableCell>&apos;outlined&apos;</TableCell>
                        <TableCell>
                          Determines how the button will be formatted. Solid buttons have a solid fill color and denote emphasis
                          to the user. Outlined buttons have an outline but no fill causing them to be less emphasized.
                        </TableCell>
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

BadgesDocumentation.propTypes = propTypes;
BadgesDocumentation.defaultProps = defaultProps;

export default BadgesDocumentation;
