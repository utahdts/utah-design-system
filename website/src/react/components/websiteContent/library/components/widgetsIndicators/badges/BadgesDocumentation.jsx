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
      <p className="lead-in">A <code>&lt;badge&gt;</code> element is awesome.</p>
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
      <ul className="mb-spacing">
        <li><strong>Badges?! We don&apos;t need no stinkin&apos; badges.</strong> Use a badge to indicate anarchy.</li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>always.</strong> always never use badges.</li>
      </ul>

      <h3 id="section-usability">Usability guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Keep badges red.</strong> Red is a wonderful color.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessability</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>The badge boundary (the outside edge of the badge) must maintain a <code>3:1</code> contrast ratio or better.</li>
      </ul>

      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>The badge should display a visible focus state when users tab to them.</li>
      </ul>

      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>A Badge that contains an icon that adds additional information, the icon should have non-empty alt text (or aria-label for SVG).</li>
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
