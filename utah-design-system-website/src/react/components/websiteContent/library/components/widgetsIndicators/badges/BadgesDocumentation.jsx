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
import StaticExample from '../../../../../staticExamples/StaticExample';
import badgesMockup from '../../../../../../../static/images/mockups/Badges.jpg';
import { LightBox } from '../../../../../lightbox/LightBox';

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
      <StaticExample
        title="Badges (Large and Small)"
        renderedExample={(
          <LightBox image={badgesMockup} alt="Badges" className="flex-3up-gap" />
        )}
        quickTips={(
          <ul>
            <li>Large badges use a number to convey a status count.</li>
            <li>Small badges simply note there has been a status change.</li>
            <li>Badges are typically aligned to the upper right corner of the button or item they are a child of.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <p>
        Badges are used to indicate a notification, item count, or other information relating to a navigation destination.
        Typically they are placed on the upper right corner of a component such as an icon button.
      </p>

      <p>There are two types of badges:</p>
      <ol>
        <li><strong>Small Badge (shape only, no characters)</strong>: A small badge is a simple circle, used to indicate a status change or an unread notification.</li>
        <li><strong>Large Badge (usually contain numbers)</strong>: A large badge may contain numbers communicating item count information.</li>
      </ol>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>If not alerting a customer to a notification change</strong>: Badges should be used to alert the user to a status change or unread notifications.</li>
        <li><strong>It creates a conflict with another icon</strong>: If the badge overpowers the icon or creates confusion, consider changing the icon or icon size. Avoid using icons that look similar to badges.</li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Convey dynamic information with navigation</strong>:  Use badges with navigation items to convey dynamic information associated with that destination.</li>
        <li><strong>Recommended Sizing</strong>:
          <ul>
            <li>Small badges should be smaller than large badges since they contain no information</li>
            <li>Large badge should be large enough for the information to be readable.</li>
            <li>Use a <code>+</code> to indicate a count greater than the available character count.
              <ul>
                <li>e.g. 9+, 99+, 999+</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Most commonly used with</strong>: Badges are most commonly used within other components, such as icon buttons, navigation elements, and tabs.</li>
        <li><strong>Badge proximity</strong>: Keep the badge in close proximity to its parent element. When space permits, place the badge inside the parent element on the right side. (e.g. a navigation list item or regular button)</li>
        <li><strong>Maximum character count</strong>: Ensure that badge labels don&apos;t extend too far beyond the badge container. Typically don&apos;t use more than 4 characters.</li>
        <li><strong>Avoid changing the position</strong>: Badges have fixed positions. Generally, don&apos;t change the position of the badge arbitrarily or place the badge directly over the parent component.</li>
        <li><strong>Hide badge when acknowledged</strong>: When a badge is used to indicate an unread notification, the badge gets hidden once it has been viewed or acknowledged by the user.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessibility</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Badges use a color intended to stand out against labels, icons, and navigation elements. Typically use the default color mapping (red) to avoid color conflict issues. You may use other colors to convey different meanings.</li>
        <li>The majority of the badge boundary must maintain a <code>3:1</code> contrast between its surrounding elements.</li>
        <li>The badge text must maintain a <code>4.5:1</code> contrast inside the badge.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>Badges are most commonly used within other components, such as icon buttons, navigation elements, and tabs. They rarely, if ever, receive keyboard focus.</li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>The accessibility label for a badge item will be read after its navigation destination or button label. (e.g. <code>Alerts, 1 unread alert</code>; <code>News, 5 new news items</code>)</li>
        <li>Large badges will have their text read. Additional contextual information visible only to the screen reader may be required to provide context.
          <ul>
            <li>Good: <code>12 Unread Messages</code>; <code>5 Unread Alerts</code></li>
            <li>Bad: <code>12</code>; <code>5</code></li>
          </ul>
        </li>
        <li>Small badges will simply announce new notification or notifications available.</li>
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
